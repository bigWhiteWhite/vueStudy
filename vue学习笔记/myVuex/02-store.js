import Vue from 'vue'
import Vuex from  'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {//状态对象
    count:0
  },
  mutations: {//包含多个更新state函数的对象
    //增加的mutation
    INCREMENT (state){
      state.count++
    },
    //增加的mutation
    DECREMENT (state){
      state.count--
    },
  },
  actions:{//包含多个对应事件回调函数的对象，包含接受组件通知触发mutation调用间接状态的方法的对象
    increment({commit}){
      //提交增加的mutation
      commit('INCREMENT')
    },
    decrement({commit}){
      //提交减少的mutation
      commit('DECREMENT')
    },
    incrementIfOdd({commit,state}){
      if (state.count%2===1){
        //提交增加的mutation
        commit('INCREMENT')
      }
    },
    incrementAsync({commit}){//action中直接就可以执行异步代码VueResource
      setTimeout(()=>{
        //提交增加的mutation
        commit('INCREMENT')
      },1000)
    }
  },
  getters:{//包含多个getter计算属性函数的对象
    evenOrOdd(state){
      return state.count%2===0 ? '偶数' : '奇数'
    }
  }
})
