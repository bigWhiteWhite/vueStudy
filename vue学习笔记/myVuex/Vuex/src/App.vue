<template>
  <div>
    <p>click {{count}} times,count is {{evenOrOdd}}</p><!--模板里面调用不需要this-->
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapActions,mapState,mapGetters} from 'vuex'
  export default {
    computed:{
      ...mapState(['count']),//mapState()返回值:{count() {return this.$store.state['count']}
      ...mapGetters(['evenOrOdd']),//mapGetters()返回值:{eventOrOdd() {return this.$store.getters['evenOrOdd']}
    },
    methods:{
      ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
/*
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
      },*/
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
