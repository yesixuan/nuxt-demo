const Koa = require('koa')
const koaBody = require('koa-body')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const demoRouter = require('./demoRouter')

const app = new Koa()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// Import and Set Nuxt.js options
let config = require('../build/nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  /* 统一的错误处理中间件 */
  app.use(async (ctx, next) => {
    try {
      console.log(`request with path ${ctx.request.path}`)
      await next()
    } catch (err) {
      console.log(err)
      ctx.status = 500
      if (isDev) {
        ctx.body = err.message
      } else {
        ctx.body = 'please try again later'
      }
    }
  })

  app.use(koaBody())
  // 服务端路由引入
  app.use(demoRouter.routes()).use(demoRouter.allowedMethods())

  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
