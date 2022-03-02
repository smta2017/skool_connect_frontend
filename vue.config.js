module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://3.219.94.115/',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: { '^/api': '/' },
      },
    },
  },
}