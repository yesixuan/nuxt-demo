<template>
  <div>
    <span>{{ data }}</span><br>
    <span>{{ propData }}</span><br>
    <span>全局：{{ currentNum }}</span><br>
    <!--在绑定的事件中传参给 action 或 mutation 一定要使用方法调用的方式，否则默认传的第一个参数是事件对象-->
    <button @click="add()">加一</button><br>
    <button @click="addAsync2(2)">async加二</button><br>
    <span>模块中：{{ demoNum }}</span><br>
    <button @click="demoAdd()">加一</button><br>
    <button @click="demoAddAsync(2)">async加二</button><br>
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
import { State, Getter, Mutation, Action, namespace } from 'vuex-class'
import { mapGetters, mapMutations, mapActions } from 'vuex'

const demoModule = namespace('demo')

@Component({
  props: {
    propData: String
  },
  computed: {
    // ...mapGetters(['currentNum'])
  },
  methods: {
    // ...mapMutations(['ADD']),
    // ...mapActions(['addAsync'])
  },
  mixins: []
})
export default class extends Vue {
  data: string = 'data 中的数据'
  @Getter('currentNum')
  currentNum: number
  @Mutation('ADD')
  add: Function
  @Action('addAsync')
  addAsync: Function
  addAsync2(num: number) {
    this.addAsync(num)
  }
  @demoModule.Getter('num')
  demoNum: number
  @demoModule.Mutation('ADD')
  demoAdd: Function
  @demoModule.Action('addAsync')
  demoAddAsync: Function
}
</script>
