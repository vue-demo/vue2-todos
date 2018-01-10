<template>
  <div class="wrap list">
    <div class="item" v-for="item in pages">
      <div class="text">{{ item }}</div>
    </div>
    <div class="more">
      <button type="button" @click="more">More</button>
    </div>
  </div>
</template>

<script>
  import * as types from '@/store/type'
  export default {
    name: 'list',
    computed: {
      page: {
        set(newValue){
          this.$store.state.List.page = newValue;
        },
        get(){
          return this.$store.state.List.page;
        }
      },
      pages: {
        set(newValue){
          this.$store.state.List.pages = newValue;
        },
        get(){
          let num = this.page;
          return this.$store.state.List.pages.filter(item => (item <= num))
        }
      }
    },
    created(){
      this.$store.dispatch('getHomeNews', this.pages);
    },
    mounted(){

    },
    methods: {
      more(){
        this.page += 5;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrap {
    width: 100%;
  }

  .wrap .item {
    width: 100%;
    margin: 5px auto;
    line-height: 100px;
    text-align: center;
    border: 1px solid #ccc;
  }

  .wrap .more {
    text-align: center;
  }
</style>
