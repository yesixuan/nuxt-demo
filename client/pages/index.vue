<template>
  <section class="container">
    <div class="wrapper">
      demo
      <JsxComponent/>
      <VuexDemo/>
      <!--<pre>index page: {{ JSON.stringify(res) }}</pre>-->
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import JsxComponent from '../components/jsxComponent'
import VuexDemo from '../components/vuexDemo'
// import { test } from '../apis/demo'
import {
  createNamespacedHelpers,
  mapMutations as mapRootMutations, // 在一个组件中既要用到全局状态，又要用到模块中的状态时，防止重名
  mapGetters as mapRootGetters
} from 'vuex'

const {
  mapMutations,
  mapState,
  mapActions,
  mapGetters
} = createNamespacedHelpers('moduleDemo')

export default {
  components: { JsxComponent, VuexDemo },
  computed: {
    ...mapGetters(['res'])
  },
  methods: {
    ...mapMutations(['TEST_API']),
    ...mapActions(['testApi'])
  },
  async fetch({ store, params }) {
    axios
      .post('/api/v1/demo/hehe')
      .then(
        res => console.log('-----------------', res),
        res => console.log('++++++++++++++++++++', res)
      )
      .catch(err => console.log('********************', err))
    await store.dispatch('moduleDemo/testApi')
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    font-size $hehe // 这个变量来自 style-resources-loader 的自动注入
</style>
