<template>
  <div>
    <p>click {{$store.state.count}} times,count is {{evenOrOdd}}</p><!--模板里面调用不需要this-->
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
      }
    },
    computed:{
      evenOrOdd(){
        return this.$store.getters.evenOrOdd
      }
    },
    methods:{
      increment(){
        //通知vuex去增加
        this.$store.dispatch("increment")//触发store中对应的action调用

      },
      decrement(){
        //通知vuex去减少
        this.$store.dispatch("decrement")//触发store中对应的action调用
      },
      incrementIfOdd(){//如果是奇数才增加
        this.$store.dispatch("incrementIfOdd")

      },
      incrementAsync(){//过1s才增加
        this.$store.dispatch("incrementAsync")
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
