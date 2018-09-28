/**
 * 扩展 css 配置
 */

module.exports = {
  extractCSS: true,
  postcss: {
    preset: {
      autoprefixer: {
        grid: true
      }
    }
  },
  // publicPath: 'https://cdn.nuxtjs.org' // cdn 路径
  // splitChunks // 是否切割 layout, pages and commons 默认就好
}
