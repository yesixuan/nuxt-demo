<template>
  <section class="container">
    <div class="wrapper">
      demo
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  mounted() {
    // 这个配置文件在配置文件以及项目代码中都可以使用
    console.log('process.env.NODE_ENV', process.env.NODE_ENV)
  }
}
</script>

<style lang="stylus" scoped>
@import "./index.styl"
</style>
