<template>
  <div class="sidebar">
      <div class="sidebar-admin">
        <img src="@/assets/User.svg" alt="">
          <p class="name">User</p>
          <span class="admin">{{nameUser}}</span>
        
      </div>
      <div class="sidebar-items">
          
            <router-link
            v-for="link in links"
            
            :key="link.url"
            :to="link.url"
            active-class="active-link"
            :exact="link.exact"
            >
              <div class="sidebar-items-item top">
                <span
                class="ico"
                :class="link.class"
                ></span>
                <a href="">{{link.title}}</a>
              </div>
            </router-link>

      </div>
  </div>
</template>

<script>
 

export default {
  name: 'Sidebar',
  data: () => ({
    links:[  
        {title:'User Page',url:'/', class: 'user2-ico',exact: true},
        {title:'Posts',url:'/users-posts', class: 'dashboard-ico'},
        {title:'About us',url:'/about-us', class: 'molot-ico'},
        {title:'Contact us',url:'/calls', class: 'calls-ico'}, 
        {title:'All Users',url:'/all-users', class: 'user2-ico'},
    ],
    nameUser: '',
    roleUser: '',
    }),
    mounted() {
      this.nameUser = localStorage.getItem('email')
    }
     
}
</script>

<style lang='scss'>
  @import './sidebar.scss';
</style>