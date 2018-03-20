/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import middleware from '@@/.nuxt/middleware'

middleware['nuxt-custom-headers'] = context => {
  if (process.server) {
    const headers = [].concat.apply([], (context.route.matched.map(({ components }) => Object.values(components)))).reduce((headers, component) => {
      if (component.options && component.options.headers) {
        Object.assign(headers, component.options.headers())
      }

      return headers
    }, {})

    Object.keys(headers).map(function(header) {
      context.res.setHeader(header, headers[header])
    });
  }
}
