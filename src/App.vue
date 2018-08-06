<template>
  <div id="app">
       <side-bar></side-bar>

       <page></page>
  </div>
</template>

<script>
import SideBar from './components/SideMenu.vue'
import Page from './components/page/Page.vue'

export default {
  name: 'App',
  components: {
    SideBar,
    Page
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  #app {
/*    color: rgb(0, 202, 176);*/
    display: flex;
    font-family: 'PT Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
