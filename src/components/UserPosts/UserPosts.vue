<template>
<div class="userPosts"> 
<h1>Posts</h1>
 
  <div class="block">
    <div v-for="post in info.data" :key="post.id" class="blockItem">
      <div class="header">
        <span>{{post.author_name}}</span>
      </div>
      <div class="body">
        <span>{{post.title}}</span>
        <span>{{post.text}}</span>
        <button @click.prevent="deletePost(post.id)">Delete</button>
      </div>
    </div>
  </div>
</div>
</template>

<script> 

import axios from "axios";

export default {
  name: 'Posts', 
  data: () => {
    return { 
      info: []
    } 
  },
  mounted() { 
      this.getPosts();
    },
  methods: {
    deletePost(id) {
      axios.delete(`http://localhost:4040/post/delete/${id}`)
            .then(() => {
              this.getPosts();
            })
            .catch(() => {
                console.log("error");
            }); 
    },

    getPosts(){
      axios.get("http://localhost:4040/post/get_all")
            .then((res) => {
              this.info = res 
            })
            .catch(() => {
                console.log("error");
            }); 
    }
  }

  
}
</script>
<style lang='scss'> 
  @import './dashboard.scss';
</style>