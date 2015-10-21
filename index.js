module.exports = function (prefix, routes) {
  return routes.map(function (route) {
    route.path = prefix + route.path
    return route
  })
}
