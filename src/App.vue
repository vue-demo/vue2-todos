<template>
  <div id="app">
    <div class="header">
      <router-link to="/">Home</router-link>
      <router-link to="/list">List</router-link>
      <router-link to="/photo">photo</router-link>
    </div>
    <router-view class="app-view"/>
  </div>
</template>

<script>
  import Home from '@/components/Home';
  import List from '@/components/List';
  import Photo from '@/components/Photo';

  export default {
    name: 'app',
    components: {
      Home,
      List,
      Photo
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    max-width: 414px;
    margin: 0 auto;
    -webkit-box-shadow: 5px 0 20px -5px rgba(0, 0, 0, 0.5), -5px 0 20px -5px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 5px 0 20px -5px rgba(0, 0, 0, 0.5), -5px 0 20px -5px rgba(0, 0, 0, 0.5);
    box-shadow: 5px 0 20px -5px rgba(0, 0, 0, 0.5), -5px 0 20px -5px rgba(0, 0, 0, 0.5);
    position: relative;
  }

  #app {
    height: 100%;;
    position: relative;
    overflow: hidden;
  }

  .app-view {
    background-color: #fff;
    position: absolute;
    top: 30px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
  .header{
    line-height: 30px;
    position: relative;
    z-index: 101;
  }
  .header a{
    display: inline-block;
  }
  .router-link-active{
    color: red;
  }
</style>
