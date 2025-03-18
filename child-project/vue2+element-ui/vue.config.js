const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080, // 主应用端口
    headers: {
      'Access-Control-Allow-Origin': '*' // 允许跨域访问
    }
  },
  // 配置 webpack，支持微前端加载
  configureWebpack: {
    output: {
      library: 'vueApp',
      libraryTarget: 'umd'
    }
  }
})
