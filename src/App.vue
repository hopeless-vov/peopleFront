<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component> 
  </div>
</template>
<script>


import MainLayout from '@/views/MainLayout'
import EmptyLayout from '@/views/EmptyLayout'
export default {

  name: 'app',
  components: {
    MainLayout,EmptyLayout
  },
  computed: {
    layout(){
      return (this.$route.meta.layout || 'empty' ) + '-layout'
    }
  }
}
</script>

<style lang="scss">
  @import './app.scss';
</style>