<template>
  <div id="emptylayout">
    <div class="login">
        <div class="loginLogo">
          <span class="logo">Logo</span>
        </div>
            <span  class="someMainText">Some Motivational Text String.
                  Some Motivational Text String.
                  Some Motivational Text String.
            </span>
        <router-view/>
    </div>
    <img class="backEmpty" width="100%" src="../assets/emptyBack.png" alt="">
    <img class="waves" width="100%" src="../assets/waves.svg" alt="">
  </div>
</template>
<script>
 

 

export default {
  name: 'emptylayout',
}
</script>

<style lang="scss">
@import './emptylayout.scss';
</style>