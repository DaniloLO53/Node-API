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
    return { statusCode: 500 }
  }
}

class LoginRouter {
  route (httpRequest) {
    const isNotObjectReturn = isNotObject(httpRequest)

    if (!httpRequest || !httpRequest.body || isNotObjectReturn) {
      return {
        statusCode: 500
      }
    }
    const { EMAIL, PASSWORD } = httpRequest.body

    if (!EMAIL || !PASSWORD) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('Login Router', () => {
  const PASSWORD = 'any_password'
  const EMAIL = 'any_email'
  const BAD_REQUEST_CODE = 400
  const INTERNAL_ERROR_CODE = 500

  it('Should return 400 if no email is provided', () => {
    const httpRequest = {
      body: {
        PASSWORD
      }
    }

    const sut = new LoginRouter()
    const httpResponse = sut.route(httpRequest)

    expect(httpResponse.statusCode).toBe(BAD_REQUEST_CODE)
  })

  it('Should return 400 if no password is provided', () => {
    const httpRequest = {
      body: {
        EMAIL
      }
    }

    const sut = new LoginRouter()
    const httpResponse = sut.route(httpRequest)

    expect(httpResponse.statusCode).toBe(BAD_REQUEST_CODE)
  })

  it('Should return 500 if no httpRequest is received', () => {
    const sut = new LoginRouter()
    const httpResponse = sut.route()

    expect(httpResponse.statusCode).toBe(INTERNAL_ERROR_CODE)
  })

  it('Should return 500 if httpRequest has no body', () => {
    const httpRequest = {}
    const sut = new LoginRouter()
    const httpResponse = sut.route(httpRequest)

    expect(httpResponse.statusCode).toBe(INTERNAL_ERROR_CODE)
  })

  it('Should return 500 if httpRequest is not a object', () => {
    const httpRequestString = 'any_string'
    const httpRequestBoolean = false
    const httpRequestNumber = 0
    const httpRequestArray = []
    const httpRequestUndefined = undefined

    const sut = new LoginRouter()
    const httpResponseString = sut.route(httpRequestString)
    const httpResponseBoolean = sut.route(httpRequestBoolean)
    const httpResponseNumber = sut.route(httpRequestNumber)
    const httpResponseArray = sut.route(httpRequestArray)
    const httpResponseUndefined = sut.route(httpRequestUndefined)

    expect(httpResponseString.statusCode).toBe(INTERNAL_ERROR_CODE)
    expect(httpResponseBoolean.statusCode).toBe(INTERNAL_ERROR_CODE)
    expect(httpResponseNumber.statusCode).toBe(INTERNAL_ERROR_CODE)
    expect(httpResponseArray.statusCode).toBe(INTERNAL_ERROR_CODE)
    expect(httpResponseUndefined.statusCode).toBe(INTERNAL_ERROR_CODE)
  })
})
