<template>
  <div class="photo" ref="photo">

    <div class="photo-scroll">
      <div class="nav">
        <select class="nav-select" v-for="(item,index) in menu" @change="toggle(items,index,$event)" :key="index">
          <option v-for="(option,index) in item.option" :key="index">{{ option }}</option>
        </select>
      </div>
      <div class="items">
        <div class="item" v-for="item in items">
          <div class="pic" :style="'background-image:url('+item.pic+')'"></div>
          <div class="text">{{ item.title }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import * as types from '@/store/type'
  export default {
    name: 'photo',
    data(){
      return {
        items: []
      }
    },
    computed: {
      menu: {
        set(newValue){
          this.$store.state.Photo.menu = newValue;
        },
        get(){
          return this.$store.state.Photo.menu
        }
      },
      list: {
        set(newValue){
          this.$store.state.Photo.dataArr = newValue;
        },
        get(){
          return this.$store.state.Photo.dataArr
        }
      }
    },
    created(){

    },
    mounted(){
      this.items = this.list;

      this.$nextTick(() => {
        this.BScroll(this.$refs.photo, {})
      })
    },
    methods: {
      toggle(list, index, ev){
        console.log(index);
        this.items = [];
        if (index === 0) {
          list.forEach((item, i) => {
            if (list[i].title === ev.target.value) {
              this.items.push(item);
            } else if (ev.target.value === "风格") {
              this.items.push(item);
            }
          });
        }

        if (index === 1) {
          list.forEach((item, i) => {
            if (list[i].type === ev.target.value) {
              this.items.push(item);
            } else if (ev.target.value === "户型") {
              this.items.push(item);
            }
          });
        }

        if (index === 2) {
          list.forEach((item, i) => {
            console.log(item);
            if (list[i].area === ev.target.value) {
              this.items.push(item);
            } else if (ev.target.value === "面积") {
              this.items.push(item);
            }
          });
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .photo {
    padding: 0 10px;
  }

  .photo-scroll {

  }

  .photo .nav {
    padding: 10px 0;
  }

  .photo .nav-select {
    padding: 5px;
    height: 30px;
  }

  .items {
    display: flex;
    flex-flow: row wrap;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
  }

  .items .item {
    width: calc(50% - 2px);
    height: 220px;
    border: 1px solid #ccc;
    border-left: none;
    border-top: none;
  }

  .items .pic {
    max-width: 90%;
    height: 80%;
    margin: 10px auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .items .text {
    text-indent: 10px;
  }
</style>
