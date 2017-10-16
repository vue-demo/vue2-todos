<template>
  <div id="app">
    <div class="header">
      <div class="header-inner">任务计划列表</div>
    </div>
    <div class="add">
      <input class="add-msg" type="text" v-model="msg" @keyup.enter="add" placeholder="添加任务">
    </div>
    <div class="nav">
      <span class="nav-title">{{ total }}条任务未完成</span>
      <ul class="nav-list">
        <li v-for="(item,index) in nav" :class="{'active':index==current}" @click="toggle(item,index)">{{item}}</li>
      </ul>
    </div>
    <div class="list">
      <ul v-show="items.length==0">
        <li class="row">没有任务计划</li>
      </ul>
      <ul>
        <li class="row" v-for="(item,index) in list" :class="{'active':item.status}">
          <input class="checkbox" type="checkbox" v-model="item.status">
          <span class="text">{{ item.title }}</span>
          <span class="delete" @click="del(item)">×</span>
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
        current: 0,
        nav: ['所有任务', '未完成', '已完成'],
        list: [],
        items: [{
          title: 'hello 111',
          status: false
        }, {
          title: 'hello 222',
          status: true
        }, {
          title: 'hello 333',
          status: true
        }]
      }
    },
    computed: {
      total(){
        return this.items.filter(item => !item.status).length
      }
    },
    mounted(){
      this.list = this.items;
    },
    methods: {
      add(ev){
        this.items.push({
          title: ev.target.value,
          status: false
        });
        this.msg = '';
        this.list = this.items;
      },
      del(item){
        var index = this.items.indexOf(item);
        this.items.splice(index, 1);
        this.list = this.items;
      },
      toggle(item, index){
        this.current = index;
        this.list = [];
        if (index === 0) {
          this.items.forEach(item => {
            this.list.push(item);
          });
        }
        if (index === 1) {
          this.items.forEach(item => {
            if (item.status === false) {
              this.list.push(item);
            }
          });
        }
        if (index === 2) {
          this.items.forEach(item => {
            if (item.status === true) {
              this.list.push(item);
            }
          });
        }
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
    -webkit-font-smoothing: antialiased;
    color: #2c3e50;
  }

  ul {
    list-style: none;
  }

  .header,
  .add,
  .nav,
  .list{
    width: 800px;
    margin: 0 auto;
  }

  .header {
    line-height: 40px;
    text-indent: 2em;
    background-color: #42b983;
    color: #fff;
  }

  .add {
    padding: 10px 0;
  }

  .add-msg {
    display: block;
    width: 100%;
    line-height: 30px;
    text-indent: 10px;
  }

  .nav {
    overflow: hidden;
  }
  .nav-title{
    float: left;
    line-height: 30px;
  }
  .nav-list{
    float: right;
  }
  .nav-list li{
    display: inline-block;
    font-size: 12px;
    line-height: 28px;
    padding: 0 10px;
    margin-left:10px;
    border: 1px solid #ccc;
  }
  .nav-list .active{
    border: 1px solid red;
  }

  .list {
    background-color: white;
    margin-top: 10px;
  }

  .list ul {
    overflow: hidden;
  }

  .list li {
    border-bottom: 1px solid #ccc;
    padding: 5px 40px;
    position: relative;
  }

  .list li:hover {
    background-color: rgba(0, 0, 0, .1);
  }

  .list .checkbox,
  .list .delete {
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 20px;
    position: absolute;
    cursor: pointer;
  }

  .list .checkbox {
    left: 10px;
    top: 10px;
    border-radius: 50%;
    border: 1px solid #ccc;
    color: white;
  }

  .list .delete {
    right: 10px;
    top: 10px;
    color: red;
    display: none;
  }

  .list .text {
    display: inline-block;
    width: 100%;
    line-height: 30px;
    font-size: 20px;
    color: #666;
  }

  .list .active .text {
    text-decoration: line-through;
    color: #ccc;
  }

  .list li:hover .delete {
    display: block;
  }
</style>