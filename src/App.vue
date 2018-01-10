<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/list">List</router-link>
    <router-link to="/photo">photo</router-link>

    <router-view/>
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
    width: 414px;
    margin: 0 auto;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, .5);
  }
</style>
