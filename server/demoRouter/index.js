const Router = require('koa-router')

const demoRouter = new Router({ prefix: '/api/v1/demo' })

demoRouter.post('/hehe', async ctx => {
  ctx.status = 200
  ctx.body = {
    msg: '来自服务端聚合层的接口数据',
    name: 'Vic',
    company: 'lixing'
  }
})

module.exports = demoRouter
