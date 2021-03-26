<template>
<div class="allUsers"> 
<h1>Users</h1>
<div class="block">
    <div v-for="user in users.data" :key="user.id" class="blockItem">
      <div class="header">
        <span>{{user.email}}</span> 
      </div>
      <div class="body">
        <span>{{user.first_name}} {{user.last_name}} {{user.group_name}}</span>  
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
      users: []
    } 
  },
  mounted() {
      axios.get("http://localhost:4040/student/all_students")
            .then((res) => {
              this.users = res
            })
            .catch(() => {
                console.log("error");
            }); 
    }

  
}
</script>
<style lang='scss'> 
  @import './allUsers.scss';
</style>