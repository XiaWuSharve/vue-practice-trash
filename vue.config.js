const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://news-at.zhihu.com',
        ws: true,
        secure: false,
        changeOrigin: true,
      },
      '/css': {
        target: 'http://news-at.zhihu.com',
        ws: true,
        secure: false,
        changeOrigin: true,
      }
    }
  }
})
