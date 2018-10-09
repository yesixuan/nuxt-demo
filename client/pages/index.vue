<template>
  <section class="container">
    <div class="wrapper">
      demo
      <JsxComponent/>
    </div>
  </section>
</template>

<script>
import ajax from '../common/ajax'
import JsxComponent from '../components/jsxComponent'
export default {
  components: { JsxComponent },
  mounted() {
    // 这个配置文件在配置文件以及项目代码中都可以使用
    // console.log('process.env.NODE_ENV', process.env.NODE_ENV)
    ajax
      .post('/hehe', { emulateJson: true, returnRes: true, cache: true })({
        hehe: 'haha'
      })
      .then(res => {
        console.log(res)
      })
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    font-size $hehe // 这个变量来自 style-resources-loader 的自动注入
</style>
