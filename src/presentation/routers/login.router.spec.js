class LoginRouter {
  route (httpRequest) {
    const { EMAIL, PASSWORD } = httpRequest.body

    if (!EMAIL || !PASSWORD) {
      return {
        statusCode: 400
      }
    }
  }
}

describe('Login Router', () => {
  it('Should return 400 if no email is provided', () => {
    const PASSWORD = 'any_password'
    const BAD_REQUEST_CODE = 400

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
    const EMAIL = 'any_email'
    const BAD_REQUEST_CODE = 400

    const httpRequest = {
      body: {
        EMAIL
      }
    }

    const sut = new LoginRouter()
    const httpResponse = sut.route(httpRequest)

    expect(httpResponse.statusCode).toBe(BAD_REQUEST_CODE)
  })
})
