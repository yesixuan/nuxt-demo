<template>
  <section class="container">
    <div class="wrapper">
      <p>github {{ msg }}</p>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      msg: ''
    }
  },
  created() {
    axios.post('/api/v1/demo/hehe').then(res => {
      this.msg = res.data.msg
    })
  }
}
</script>
