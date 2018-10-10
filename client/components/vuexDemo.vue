<template>
  <div class="wrapper">
    <span>全局状态：{{ counter }}</span><br>
    <span>模块状态：{{ count1 }}</span><br>
    <button @click="increment">全局状态+</button>
    <button @click="ADD">模块状态+</button>
    <button @click="addAsync(10)">模块状态async+</button>
  </div>
</template>

<script>
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
  computed: {
    ...mapRootGetters(['counter']),
    ...mapGetters(['count1'])
  },
  methods: {
    ...mapRootMutations(['increment']),
    ...mapMutations(['ADD']),
    ...mapActions(['addAsync'])
  }
}
</script>

<style scoped>
</style>
