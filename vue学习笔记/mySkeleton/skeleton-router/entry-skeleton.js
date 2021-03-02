import Vue from 'vue'
// 创建的骨架屏 Vue 实例
import Skeleton1 from './skeleton1.vue'
import Skeleton2 from './skeleton1.vue'
 
export default new Vue({
  components: {
    SkeletonFinanceSubMenuMore,
    SkeletonInvestmentFinanceHome,
    SkeletonWalletHome
  },
  template: `
        <div>
            <Skeleton1 id="Skeleton1" style="display:none"/>
            <Skeleton2 id="Skeleton2" style="display:none"/>
        </div>
    `
})