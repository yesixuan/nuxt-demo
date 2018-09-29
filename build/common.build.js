module.exports = {
  // css 变量注入
  styleResources: {
    stylus: './client/assets/css/global/variables.styl'
  },
  extend(config, { isDev, isServer, isClient }) {
    const {
      entry,
      resolve: { alias },
      module: { rules },
      plugins
    } = config
    // Run ESLint on save
    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  }
}
