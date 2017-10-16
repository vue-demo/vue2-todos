<template>
  <div id="app">
    <div class="header">
      <select @change="toggle1(items,$event)">
        <option v-for="item in nav1">{{item}}</option>
      </select>
      <select>
        <option v-for="item in nav2">{{item}}</option>
      </select>
      <select>
        <option v-for="item in nav3">{{item}}</option>
      </select>
    </div>
    <div class="list">
      <ul v-show="items.length==0">
        <li>没有任务计划: {{total}}</li>
      </ul>
      <ul>
        <li class="row" v-for="(item,index) in list">
          <img :src="item.pic" :alt="item.title">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: '',
        list: [],
        current: 0,
        nav1: ['风格', '简约', '美式'],
        nav2: ['户型', '3室2厅', '2室1厅', '1室1厅'],
        nav3: ['面积', '120平', '80平', '60平'],
        items: [{
          title: '简约',
          pic: './src/assets/logo.png',
          style: 'jianshi',
          type: '3',
          area: '120'
        }, {
          title: '美式',
          pic: './src/assets/logo.png',
          style: 'meishi',
          type: '2',
          area: '80'
        }, {
          title: '美式',
          pic: './src/assets/logo.png',
          style: 'meishi',
          type: '1',
          area: '60'
        }]
      }
    },
    computed: {
      total(){
        return this.items.filter(item => item.pic !== "").length
      }
    },
    mounted(){
      this.list = this.items;
    },
    methods: {
      toggle1(items, ev){
        this.list = [];
        items.forEach((item, i) => {
          if (items[i].title === ev.target.value) {
            this.list.push(item);
          } else if (ev.target.value === "风格") {
            this.list.push(item);
          }
        });
        console.log(ev.target.value);
      }
    }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f1f1f1;
    font-family: 'microsoft Yahei', Arial, sans-serif;
  }

  li {
    list-style: none;
  }

  .header,
  .list {
    width: 414px;
    margin: 0 auto;
  }

  .header {
    color: #fff;
    background-color: #42b983;
    overflow: hidden;
  }

  .header select {
    float: left;
    width: 33.33%;
    height: 30px;
    line-height: 30px;
    color: #fff;
    border-color: #fff;
    background-color: #42b983;
    overflow: hidden;
  }

  .header option {
    color: #333;
    background-color: #fff;
  }

  /*列表*/

  .list ul {
    background-color: #fff;
    padding-bottom: 20px;
    overflow: hidden;
  }

  .list li {
    float: left;
    width: 50%;
    text-align: center;
    position: relative;
  }

  .list img {
    width: 80%;
    height: 80%;
    border: 1px solid #ccc;
    display: block;
    margin: 20px auto 0;
  }

</style>