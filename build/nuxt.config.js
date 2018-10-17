const pkg = require('../package')

const commonConfig = require('./common.build')
const prodConfig = require('./prod.build')
const devConfig = require('./dev.build')

const isDev = process.env.NODE_ENV === 'development'
const envConfig = isDev ? devConfig : prodConfig

module.exports = {
  mode: 'universal',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['assets/css/global/index.styl'],
  plugins: [
    {
      src: '~/plugins/index.js',
      ssr: false
    },
    { src: '~/plugins/mock.js', ssr: false }
  ],
  modules: ['@nuxtjs/axios', '~/modules/test.js'],
  vendor: ['vue-router', '@nuxtjs/axios'],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  srcDir: 'client/',
  build: {
    ...commonConfig,
    ...envConfig
  }
}
