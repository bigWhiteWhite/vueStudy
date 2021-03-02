<template>
    <div>
        state：
            vuex管理的状态对象
            他应该是唯一的
            const state = {
                xxx:initValue
            }

        mutation:
            包含多个直接更新state的方法(回调函数）的对象
            谁来触发:action中的commit('mutation 名称')
            只能包含同步的代码，不能写异步代码
                const mutation = {
                    yyy(state,{date1}){
                        //更新state的摸个属性
                    }
                }

        actions
            包含多个事件回调函数的对象
            通过执行:commit()来触发mutation的调用，间接更新state
            谁来触发：组件中:this.$store.dispatch('action 名称',data1)
            可以包含异步代码(定时器，ajax)
                const actions={
                    zzz({commit,state},data1){
                        setTimeOut(()=>{
                            commit('yyy',{data1})
                        },1000)
                    }
                }

        getters
            包含多个计算属性(get)的对象
            谁来读取：组件中：this.$store.getters.xxx
            const getters = {
                mmm(state){ }
            }

        向外暴露
            export default new Vuex.store({
                state,mutations,actions,getters
            })

        组件中
            import {mapState,mapGetters,mapActions} from 'vuex'
            export default {
                computed:{
                    ...mapState(['xxx']),
                    ...mapGetters(['mmm'])
                },
                methods:{
                    ...mapActions{['zzz']}
                }
            }

            {{xxx}}{{mmm}}@click="zzz(data)"

        映射store
            import store from './store'
            new Vus({
                store
            })

        store对象
            所有用vuex管理的组件中都多了一个属性$store，他就是一个store对象
            属性:
                state注册的state对象
                getter：注册的getter对象
            方法：
                dispatch(actionName,data):分发调用action
    </div>
</template>


