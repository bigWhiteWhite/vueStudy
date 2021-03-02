/*
包含多个由action触发去直接更新状态的方法的对象
*/
import {ADD_TODO,DELETE_TODO,RECEIVE_TODOS} from "./mutation-type";
//从mutation-type传过来的是小写的变量而且是字符串，传导mutation的时候，
// 为了将字符串换为变量，要使用[]的方式调用

export default {
    [ADD_TODO](state,{todo}){
        state.todos.unshift(todo)
    } ,
    [DELETE_TODO](state,{index}){
        state.todos.splice(index)
    },
    [RECEIVE_TODOS](state,todos){
        state.todos=todos
    }
}