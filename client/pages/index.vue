<template>
  <section class="container">
    <div class="wrapper">
      demo
    </div>
  </section>
</template>

<script lang="ts">
export default {
  components: {},
  mounted() {
    // 这个配置文件在配置文件以及项目代码中都可以使用
    // console.log('process.env.NODE_ENV', process.env.NODE_ENV)
    this.hello()
  },
  methods: {
    hello(): string {
      console.log('hehe')
      return 'hello ts'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    font-size $hehe // 这个变量来自 style-resources-loader 的自动注入
</style>
