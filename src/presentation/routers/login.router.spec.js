class LoginRouter {
  route (httpRequest) {
    if (!httpRequest || !httpRequest.body) {
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
})
