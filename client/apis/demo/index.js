import http from '../../common/ajax'

export const test = http.post('/demo/hehe', {
  returnRes: true
})
