<template>
  <div>
      <div v-if="!repoUrl">使用loading</div>
      <div v-else>最好的库 <a :href="repoUrl">{{repoName}}</a></div>
  </div>

</template>
<!-- 
 如何将axios挂载到vue的全局上
	安装axios：cnpm run axios
	在main.js文件引入axios：import axios from 'axios'
	将axios全局挂载到VUE原型上：在main.js中添加,Vue.prototype.$axios=axios 
		 使用：this.$axios.get('/url',{params:{username:'张三'}}) 
 -->

<script>
import axios from 'axios'

export default {
      data () {
        return {
          repoUrl:'',
          repoName:'',
        }
      },
      mounted() { //使用resource发ajax请求获取数据
          const url ='http://api.github.com/search/repositories?q=v&sort=stars'//v是搜索关键字，可以换
          /* this.$http.get(url).then(
             response => {
               //成功了
                 const result = response.data
               //得到最受欢迎的repo
                 const mostPepo = result.items[0]
                 this.repoUrl = mostPepo.html_url
                 this.repoName =mostPepo.name
             },
             response => {
               alert('请求失败')
             }
           )*/

          //使用axios发送ajax请求
          axios.get(url).then(
              response => {
                  //成功了
                  const result = response.data
                  //得到最受欢迎的repo
                  const mostPepo = result.items[0]
                  this.repoUrl = mostPepo.html_url
                  this.repoName= mostPepo.name
              }).catch(error => {
              alert('请求失败222')
          })



      }
}
</script>

<style>

</style>
