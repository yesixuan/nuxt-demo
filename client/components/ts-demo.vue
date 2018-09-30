<template>
  <div>
    <span>{{ data }}</span><br>
    <span>{{ propData }}</span>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Inject,
  Model,
  Prop,
  Vue,
  Watch
} from 'nuxt-property-decorator'
@Component({
  props: {
    propData: String
  },
  computed: {},
  methods: {}
})
export default class extends Vue {
  data: string = 'data 中的数据'
}
</script>
