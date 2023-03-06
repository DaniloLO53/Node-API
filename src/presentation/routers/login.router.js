const HttpResponse = require('../helpers/httpResponse.helper')

function isNotObject (arg) {
  const isArray = Array.isArray(arg)
  const isString = typeof arg === 'string'
  const isNumber = typeof arg === 'number'
  const isBoolean = typeof arg === 'boolean'

  if (
    isArray ||
    isString ||
    isNumber ||
    isBoolean ||
    !arg
  ) {
    return HttpResponse.internalServerError()
  }
}

module.exports = class LoginRouter {
  route (httpRequest) {
    const isNotObjectReturn = isNotObject(httpRequest)

    if (!httpRequest || !httpRequest.body || isNotObjectReturn) {
      return HttpResponse.internalServerError()
    }
    const { EMAIL, PASSWORD } = httpRequest.body

    if (!EMAIL) return HttpResponse.badRequest('email')
    if (!PASSWORD) return HttpResponse.badRequest('password')
  }
}
