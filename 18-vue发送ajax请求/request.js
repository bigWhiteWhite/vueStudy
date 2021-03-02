/*ajax测试，还没有经过论证*/
import Vue from 'vue'
import VueResource from 'vue-resource'

//声明使用插件
Vue.use(VueResource)//内部会给vm对象和组件添加一个属性：$http  这个属性里面有两个方法：get()和post()

export default (()=>{
        //使用resource发ajax请求获取数据
        const url ='http://api.github.com/search/repositories?q=v&sort=stars'//v是搜索关键字，可以换
        /this.$http.get(url).then(
           response => {
             //成功了
               const result = response.data
             //得到最受欢迎的repo
               const mostPepo = result.items[0]
               this.repoUrl = mostPepo.html_url   /*this.repoUrl，this.repoName这两个变量，是在data(){}里面定义的*/
               this.repoName =mostPepo.name
           },
           response => {
             alert('请求失败')
           }
         )
    }
)

/*main.js引入，
import request from 'path'
Vue.prototype.request=request
* */