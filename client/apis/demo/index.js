import http from '../../common/ajax'

export const test = http.post('/api/v1/demo/hehe', {
  commonPath: 'http://localhost:3000',
  returnRes: true
})
