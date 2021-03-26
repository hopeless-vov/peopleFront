<template>
    <div class="navbar">
      <div class="navbar-items">
        <div class="navbar-left"><span>{{ $route.name }}</span></div>
          <div class="navbar-right"> 
          <span v-on:click.prevent="logout()" class="navbar-right">Log Out</span> 
          </div>
      </div>
    
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
    name: 'Navbar',
      currentRouteName() {
        return this.$route.name;
      },
    data: () => {
        return{  
        }
    },
    methods: { 
        logout() { 
          localStorage.removeItem("email")
          this.$router.push('/login') 
        
        }
    }
}
</script>

<style lang='scss'>
  @import './navbar.scss';
</style>