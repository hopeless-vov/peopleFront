<template>
<div class="userPage"> 
<h1>USER</h1>
  <div class="block">
    <div class="blockItem">
      <div class="header">
        <span>{{user.email}}</span> 
      </div>
      <div class="body">
         <div class="name">
           <span><b>Name:</b></span> <span>{{user.first_name}} {{user.last_name}}</span>  
         </div>
         <div>
           <span><b>Group:</b> </span> <span>{{user.group_name}}</span>
         </div> 
         <div>
           <span><b>Age:</b> </span> <span>{{user.age}}</span>
         </div>
          <div>
            <span><b> Group:</b></span> <span>{{user.description}}</span>
          </div> 
      </div>
    </div>
  </div>
  <h1>Write a post!</h1>
  <div class="post">
    <div class="item">
      <span>TITLE</span>
      <input v-model="titleUser" type="text">
    </div>
    <div class="item">
      <span>DESCRIPTION</span>
      <input v-model="textUser" type="text">
    </div> 
    <button @click.prevent="publishPost()">Publish</button>
  </div> 
</div> 
</template>

<script> 

import axios from "axios";

export default {
  name: 'Posts',   
  data: () => {
    return {  
      user: '', 
      titleUser: '',
      textUser:''
    } 
  },
  mounted() {   
      axios.get("http://localhost:4040/student/all_students")
            .then((students) => { 
              const email = localStorage.getItem('email')
              for( let i =0; i < students.data.length; i++) {
                if(students.data[i].email === email) {
                  this.user = students.data[i] 
                } 
              } 
              console.log(this.user) 
            })
            .catch(() => {
                console.log("error");
            }); 
    },
    methods: {
      publishPost() {
        if(this.titleUser.length === 0  &&  this.textUser.length === 0) {
          console.log('Nope');
        }
        else {
              axios.post(`http://localhost:4040/post/create/${this.user.id}`,
            {
                title : this.titleUser,
                text : this.textUser
            })
                .then(() => {  
                  this.titleUser = '',
                  this.textUser = ''
                })
                .catch(() => {
                    console.log("error");
                }); 
          }
        } 
    }
  
  
}
</script>
<style lang='scss'>  
@import './userPage.scss';
</style>