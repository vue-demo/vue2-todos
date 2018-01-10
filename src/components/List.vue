<template>
  <div class="list" ref="list">

    <div class="list-scroll">
      <div class="item" v-for="page in pages" >
        <div class="text">{{ page }}</div>
      </div>

      <div class="more">
        <button type="button" @click="more">More</button>
      </div>

      <div v-for="item in news" style="display: none">
        <p class="text">{{ item }}</p>
      </div>
    </div>

  </div>
</template>

<script>
  import * as types from '@/store/type'
  export default {
    name: 'list',
    computed: {
      news(){
        return this.$store.state.List.news;
      },
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
      this.$store.dispatch('getHomeNews');
    },
    mounted(){
      this.$nextTick(() => {
        this.BScroll(this.$refs.list, {})
      })
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
  .list {
    width: 100%;
  }

  .list-scroll{

  }

  .list .item {
    width: 100%;
    margin: 5px auto;
    line-height: 100px;
    text-align: center;
    border: 1px solid #ccc;
  }

  .list .more {
    padding: 10px;
    text-align: center;
  }
</style>
