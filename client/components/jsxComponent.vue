<script lang="jsx">
export default {
  data() {
    return {
      test: '来自 render 函数的 jsx'
    }
  },
  render() {
    return <div class={'wrapper'}>{ this.test }</div>
  },
}
</script>

<style lang="stylus" scoped>
  .wrapper
    background-color orangered
</style>
