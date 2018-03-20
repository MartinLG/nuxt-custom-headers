const { resolve } = require('path')

module.exports = function nuxtCustomHeaders (options) {
  this.addPlugin({
    src: resolve(__dirname, 'middleware.js'),
    options: {
      moduleName: 'nuxt-custom-headers'
    }
  })

  this.options.router = this.options.router || {}
  this.options.router.middleware = this.options.router.middleware || []
  this.options.router.middleware.push('nuxt-custom-headers')
}
