<template>
  <div class="home">
    <div class="title">任务计划列表</div>

    <input
      class="create"
      type="text"
      v-model="msg"
      @keyup.enter="create"
      placeholder="添加任务"/>

    <div class="nav">
      <div class="nav-title">{{ total }}条任务未完成</div>
      <ul class="nav-list">
        <li
          v-for="(item,index) in nav"
          :class="{'active':index===current}"
          @click="toggle(item,index)"
        >
          {{item}}

        </li>
      </ul>
    </div>

    <div class="list">
      <ul>
        <li class="row"
            v-for="(item,index) in list"
            :class="{'active':item.status}">
          <input class="checkbox" type="checkbox" v-model="item.status"/>
          <span class="text">{{ item.title }}</span>
          <span class="remove" @click="remove(item)">×</span>
        </li>
      </ul>
      <ul v-show="items.length===0">
        <li class="row">没有任务计划</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'home',
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
      create(ev){
        this.items.push({
          title: ev.target.value,
          status: false
        });
        this.msg = '';
        this.list = this.items;
      },
      remove(item){
        let index = this.items.indexOf(item);
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
<style scoped>
  .title,
  .create {
    width: 100%;
    margin: 0 auto;
  }

  .title {
    line-height: 40px;
    text-indent: 2em;
    background-color: #42b983;
    color: #fff;
  }

  .create {
    display: block;
    width: 90%;
    margin: 10px auto;
    line-height: 30px;
    text-indent: 10px;
  }

  .nav,
  .list {
    width: 90%;
    margin: 0 auto;
  }

  .nav {
    overflow: hidden;
  }

  .nav-title {
    float: left;
    line-height: 30px;
  }

  .nav-list {
    float: right;
  }

  .nav-list li {
    display: inline-block;
    font-size: 12px;
    line-height: 28px;
    padding: 0 10px;
    margin-left: 10px;
    border: 1px solid #ccc;
  }

  .nav-list .active {
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
    list-style: none;
    padding: 5px 40px;
    border-bottom: 1px solid #ccc;
    position: relative;
  }

  .list li:hover {
    background-color: rgba(0, 0, 0, .1);
  }

  .list .checkbox,
  .list .remove {
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

  .list .remove {
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

  .list li:hover .remove {
    display: block;
  }
</style>
