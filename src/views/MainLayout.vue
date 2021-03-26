<template>
  <div class="main">
    <div class="nav"> 
       <Navbar />
       <Sidebar/>
       <div class="webBody">
      <div class="webBodyMain">
        <router-view/>
        </div>
    </div>
    </div>
     
  </div>
</template>

<script>
import Navbar from '@/views/MainLayouts/Navbar/Navbar'
import Sidebar from '@/views/MainLayouts/Sidebar/Sidebar'

export default {
    name: 'MainLayout',
    components: {
        Navbar, Sidebar
    },
    
    computed: {
    currentRouteName() {
        return this.$route.name;
    }
}
}
</script>

<style lang='scss'>
  @import './main.scss';
</style>