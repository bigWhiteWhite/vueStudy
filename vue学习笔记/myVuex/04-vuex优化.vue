<template>
    <div>
        <p>click {{count}} times,count is {{evenOrOdd}}</p><!--模板里面调用不需要this-->
        <p>click {{count}} times,count is {{evenOrOdd02}}</p><!--模板里面调用不需要this-->
    </div>
</template>

<script>
    import {mapState,mapGetters,mapActions} from 'vuex'
    export default {
        computed:{
            ...mapState(['count']),//mapState()返回值:{count() {return this.$store.state['count']}
            ...mapGetters(['evenOrOdd']),//mapGetters()返回值:{eventOrOdd() {return this.$store.getters['evenOrOdd']}
            //使用数组的话，mapGetters名字要和store里面的getters一致，如果要搞不一样，使用对象
            ...mapGetters({evenOrOdd:'evenOrOdd02'})//mapGetters()返回值:{eventOrOdd() {return this.$store.getters['evenOrOdd']}
        },
        methods:{
            ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
