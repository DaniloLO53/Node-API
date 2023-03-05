class LoginRouter {
  route (httpRequest) {
    const { EMAIL } = httpRequest.body

    if (!EMAIL) {
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
})
