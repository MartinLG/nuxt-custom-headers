/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
import middleware from '@@/.nuxt/middleware'

middleware['nuxt-custom-headers'] = context => {
  if (process.server && !process.static) {
    const headers = context.route.matched
    .reduce((acc, { components }) => acc.concat(Object.values(components)), [])
    .reduce((acc, { options = {} }) => {
      if (options[context.env.NUXT_CUSTOM_HEADERS_FUNCTION]) {
        Object.assign(acc, options[context.env.NUXT_CUSTOM_HEADERS_FUNCTION](context));
      }

      return acc;
    }, {})

    Object.entries(headers)
    .forEach(([header, value]) => context.res.setHeader(header, value));
  }
}
