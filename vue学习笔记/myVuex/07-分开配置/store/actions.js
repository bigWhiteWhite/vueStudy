/*包含接受组件通知触发mutation调用间接更新1状态的方法的对象
* */
//将actions对mutation的命名统一放在mutation-type上,因为mutation的命名都是大写，难以理解
//所以将设置mutation-type命名空间，容易理解

import {ADD_TODO,DELETE_TODO,RECEIVE_TODOS} from './mutation-type'
//import storageUtil from '../utils/storageUtil'//模拟引进来一个js代码

//从mutation-type传过来的是小写的变量而且是字符串，传导mutation的时候，要使用[]的方式，调用
export default {
    addTodo({commit},todo){//传参的方式
        //提交对mutation的请求
        commit(ADD_TODO,{todo})//将形参传给mutation，使用对象，这样无论传的是什么
    },
    deleteTodo({commit},index){//传参的方式
        //提交对mutation的请求
        commit(DELETE_TODO,{index})//将形参传给mutation，使用对象，这样无论传的是什么
    },
    //异步获取todos并更新状态，调用在mouned里面，this.$store.dispatch(reqTodos)
    reqTodos({commit}){
        //模拟
        setTimeout(()=>{
            //提取数据
            const todos=storageUtil.readToos()
            //提交mutation
            commit(RECEIVE_TODOS,todos)
        },1000)
    }
}