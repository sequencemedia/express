const {
  getRequestSocket,
  isRequestSocketEncrypted,

  isRequestSecure,
  getRequestQuery,
  getRequestParams,
  getRequestBaseUrl,
  getRequestUrl,
  getRequestOriginalUrl,

  getRequestHeaders,
  getRequestHeadersOrigin,
  getRequestHeadersHost,
  getRequestHeadersConnection,
  getRequestHeadersUserAgent,
  getRequestHeadersAccept,
  getRequestHeadersAcceptEncoding,
  getRequestHeadersAcceptLanguage,
  getRequestHeadersCookie
} = require('@sequencemedia/express')

import('chai')
  .then(({
    expect
  }) => {
    describe('@sequencemedia/express', () => {
      describe('`getRequestSocket`', () => it('is a function', () => expect(getRequestSocket).to.be.a('function')))

      describe('`isRequestSocketEncrypted`', () => it('is a function', () => expect(isRequestSocketEncrypted).to.be.a('function')))

      describe('`isRequestSecure`', () => it('is a function', () => expect(isRequestSecure).to.be.a('function')))

      describe('`getRequestQuery`', () => it('is a function', () => expect(getRequestQuery).to.be.a('function')))

      describe('`getRequestParams`', () => it('is a function', () => expect(getRequestParams).to.be.a('function')))

      describe('`getRequestBaseUrl`', () => it('is a function', () => expect(getRequestBaseUrl).to.be.a('function')))

      describe('`getRequestUrl`', () => it('is a function', () => expect(getRequestUrl).to.be.a('function')))

      describe('`getRequestOriginalUrl`', () => it('is a function', () => expect(getRequestOriginalUrl).to.be.a('function')))

      describe('`getRequestHeaders`', () => it('is a function', () => expect(getRequestHeaders).to.be.a('function')))

      describe('`getRequestHeadersOrigin`', () => it('is a function', () => expect(getRequestHeadersOrigin).to.be.a('function')))

      describe('`getRequestHeadersHost`', () => it('is a function', () => expect(getRequestHeadersHost).to.be.a('function')))

      describe('`getRequestHeadersConnection`', () => it('is a function', () => expect(getRequestHeadersConnection).to.be.a('function')))

      describe('`getRequestHeadersUserAgent`', () => it('is a function', () => expect(getRequestHeadersUserAgent).to.be.a('function')))

      describe('`getRequestHeadersAccept`', () => it('is a function', () => expect(getRequestHeadersAccept).to.be.a('function')))

      describe('`getRequestHeadersAcceptEncoding`', () => it('is a function', () => expect(getRequestHeadersAcceptEncoding).to.be.a('function')))

      describe('`getRequestHeadersAcceptLanguage`', () => it('is a function', () => expect(getRequestHeadersAcceptLanguage).to.be.a('function')))

      describe('`getRequestHeadersCookie`', () => it('is a function', () => expect(getRequestHeadersCookie).to.be.a('function')))
    })
  })
