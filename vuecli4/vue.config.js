
// [vue-cli4 配置信息](https://hacpai.com/article/1584265563174)
// vue-cli3 和 vue-cli4 创建的项目基本的配置都内置好了，如果需要扩展自定义的配置可以在根目录新建一个vue.config.js去扩展。

// 注： 更多npm script 可参考 http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html
// console.log('env', process.env.NODE_ENV) // 环境 development/production
// console.log('argv', process.argv) // npm 命令中传递参数可在process.argv读取 如：npm run serve 123456

const path = require('path')
const config = {
  publicPath: '/', // 部署应用包时的基本 URL
  outputDir: 'dist', // 打包后的目录名称
  assetsDir: 'static', // 静态资源(js、css、img、fonts)目录

  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .end()
  },

  // webpack-dev-server 相关配置
  devServer: {
    open: false, // 自动打开浏览器
    host: '0.0.0.0', // 允许外部ip访问
    port: 8008, // 端口
    https: false, // 启用https
    overlay: { // 错误、警告在页面弹出
      warnings: true,
      errors: true
    },
    proxy: { // 代理
      '/api1': {
        target: 'https://github.com/', // 目标代理接口地址
        changeOrigin: true, // 开启代理
        pathRewrite: {
          '^/api1': '/'
        }
      },
      '/api2': {
        target: 'https://api.github.com/', // 目标代理接口地址
        changeOrigin: true, // 开启代理
        pathRewrite: {
          '^/api2': '/'
        }
      }
    }
  },

  lintOnSave: false // 取消 eslint 验证
}

module.exports = config
