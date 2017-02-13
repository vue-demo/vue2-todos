<template>
  <div id="app">
    <div class="header">
      <div class="header-inner">任务计划列表</div>
    </div>
    <div class="tasks">
      <div class="task-add">
        <input class="task-input" type="text" v-model="msg" @keyup.enter="add" placeholder="添加任务">
      </div>
      <div class="task-nav">
        <span class="task-tip">{{ total }}条任务未完成</span>
        <ul class="task-tab">
          <li :class="{active:flag=='all'}" @click="all()">所有任务</li>
          <li :class="{active:flag=='active'}" @click="active()">未完成</li>
          <li :class="{active:flag=='completed'}" @click="completed()">已完成</li>
        </ul>
      </div>
      <div class="task-list">
        <ul v-show="!items.length">
          <li>没有任务计划</li>
        </ul>
        <ul>
          <li class="row" v-for="(item,index) in items" :class="{active:item.status}">
            <input class="row-radio" type="checkbox" v-model="item.status">
            <span class="row-text">{{ item.title }}</span>
            <span class="row-del" @click="del(item)">×</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: '',
        flag:'all',
        items:[{
          title:'hello 111',
          status:false
        },{
          title:'hello 222',
          status:true
        },{
          title:'hello 333',
          status:true
        }]
      }
    },
    computed:{
      total(){
        return this.items.filter(item => !item.status).length
      }
    },
    methods:{
      add(ev){
        this.items.push({
          title:ev.target.value,
          status:false
        });
        this.msg='';
      },
      del(item){
        var index=this.items.indexOf(item);
        this.items.splice(index,1);
      },
      all(){
        this.flag='all';
      },
      active(){
        this.flag='active';
      },
      completed(){
        this.flag='completed';
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

  .header {
    line-height: 40px;
    background-color: #42b983;
    color: #fff;
  }

  .header-inner,
  .tasks {
    width: 800px;
    margin: 0 auto;
  }

  /*添加*/

  .task-add {
    padding: 10px 0;
  }

  .task-input {
    display: block;
    width: 100%;
    line-height: 30px;
    text-indent: 10px;
  }
  /*筛选*/

  .task-nav {
    overflow: hidden;
  }

  .task-tip {
    float: left;
    padding: 5px 10px;
  }

  .task-tab {
    float: right;
  }

  .task-tab li {
    padding: 5px 10px;
    display: inline-block;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  .task-tab .active {
    border-color: #999;
  }
  /*列表*/

  .task-list {
    background-color: white;
    margin-top: 10px;
  }

  .task-list ul {
    overflow: hidden;
  }

  .task-list li {
    border-bottom: 1px solid #ccc;
    padding: 5px 40px;
    position: relative;
  }
  .task-list li:hover{
    background-color:rgba(0,0,0,.1);
  }

  .row-radio,
  .row-del {
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 20px;
    position: absolute;
    cursor: pointer;
  }

  .task-list .row-radio {
    left: 10px;
    top: 10px;
    border-radius: 50%;
    border: 1px solid #ccc;
    color: white;
  }

  .task-list .row-del {
    right: 10px;
    top: 10px;
    color: red;
    display: none;
  }

  .task-list .row-text {
    display: inline-block;
    width: 100%;
    line-height: 30px;
    font-size: 20px;
    color: #666;
  }

  .task-list .active .row-text {
    text-decoration: line-through;
    color: #ccc;
  }

  .task-list li:hover .row-del {
    display: block;
  }
</style>