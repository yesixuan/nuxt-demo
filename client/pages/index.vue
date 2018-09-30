<template>
  <section class="container">
    <div class="wrapper">
      demo
      <TsComponent prop-data="传递给子组件的数据" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TsComponent from '~/components/ts-demo'
@Component({
  components: { TsComponent }
})
export default class extends Vue {}
</script>

<style lang="stylus" scoped>
  .wrapper
    font-size $hehe // 这个变量来自 style-resources-loader 的自动注入
</style>
