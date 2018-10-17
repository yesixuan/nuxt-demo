// 使用 Mock
import Mock from 'mockjs'
import cache from '../../common/cache'

let mock = cache.getSessionData('mock')
let mockSwitch = mock === 1 ? '' : '_'

Mock.mock('/api/v1/demo/hehe', 'post' + mockSwitch, {
  company: 'lixing',
  msg: '来自mock接口数据',
  name: 'tiny'
})
