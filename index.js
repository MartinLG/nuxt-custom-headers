const { resolve } = require('path')

module.exports = function nuxtCustomHeaders (options) {
  this.addPlugin({
    src: resolve(__dirname, 'middleware.js'),
    options: {
      moduleName: 'nuxt-custom-headers'
    }
  })

  this.options.env.NUXT_CUSTOM_HEADERS_FUNCTION = process.env.NUXT_CUSTOM_HEADERS_FUNCTION || options.functionName || 'httpHeaders'

  this.options.router = this.options.router || {}
  this.options.router.middleware = this.options.router.middleware || []
  this.options.router.middleware.push('nuxt-custom-headers')
}
