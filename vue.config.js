const { resolve } = require('path');

module.exports = {
  lintOnSave: false,
  devServer: {
    port: 6168,
    proxy: {
      '/4000': { // 匹配所有以 '/api'开头的请求路径
        target: 'http://localhost:4000', // 代理目标的基础路径
        changeOrigin: true, // 支持跨域
        pathRewrite: { // 重写路径: 去掉路径中开头的'/api'
          '^/4000': ""
        }
      },
      '/6168': {
        target: 'https://m.you.163.com/topic/v1/find',
        changeOrigin: true,
        pathRewrite: {
          '/6168': "",
        }
      }
    },
    overlay: {
      warnings: false,
      errors: false
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@components": resolve(__dirname, "src/components"),
        "@pages": resolve(__dirname, "src/pages"),
        "@api": resolve(__dirname, "src/api"),
        "@router": resolve(__dirname, "src/router"),
      },
    },



  }
}
