/**
 * 扩展 css 配置
 */

/* 生产环境下抽离 css */
const extractCSS = isDev => ({
  extractCSS: !isDev
})

/* PostCSS 配置 */
const extractCSS = isDev => ({
  plugins: {
    // Disable `postcss-url`
    'postcss-url': false,
    // Add some plugins
    'postcss-nested': {},
    'postcss-responsive-type': {},
    'postcss-hexrgba': {}
  },
  preset: {
    autoprefixer: {
      grid: true
    }
  }
})

module.exports = {
  extractCSS
}
