/**
 * 正式环境配置
 */

module.exports = {
  extractCSS: true,
  postcss: {
    preset: {
      autoprefixer: {
        grid: true
      }
    }
  }
  // babel: {
  //   presets: [
  //     [
  //       '@babel/preset-env',
  //       {
  //         targets: {
  //           browsers: ['ie >= 8']
  //         }
  //       }
  //     ]
  //   ],
  //   plugins: ['syntax-dynamic-import', 'transform-vue-jsx']
  // }
  // publicPath: 'https://cdn.nuxtjs.org' // cdn 路径
  // splitChunks // 是否切割 layout, pages and commons 默认就好
}
