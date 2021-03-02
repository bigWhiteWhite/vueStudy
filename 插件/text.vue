
//入口文件  main.js
import Vue from 'vue' //引入vue
import App from '.App' //引入App.vue组件
import router from 'router'//引入路由组件

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },//通过这个配置引入组件通过映射成一个指定名称的标签，相当于{App：App}
  template: '<App/>'//组件标签化：模板，一些标签字符串，最终插到el中所匹配到的页面上的<div id="app"></div>
                    //最终渲染的根标签根组件就是App
})


//App.vue
<template>
  <div>
    <img class="logo" src="./assets/logo.png" alt="">
    <!--3.使用组件标签-->
    <HelloWorld/>
  </div>
</template>

<script>
  //1.引入组件
  import HelloWorld from './components/HelloWorld.vue'
  export default {
    //2.映射组件标签
    components:{
      HelloWorld
    }
  }
</script>

<style >
  .logo{
    width: 200px;
    height: 200px;
  }
</style>

//HelloWorld.vue
<template>
  <div>
    <p class="msg">{{msg}}</p>
  </div>
</template>

<script>
  export default {//配置对象(与Vue一致)
    data(){//本来可以写对象或者函数，但是组件里面必须写函数
      return{
        msg:'Hello jshfjhs'
      }
    }

  }
</script>

<style >
  .msg{
    background: yellow;
  }
</style>

