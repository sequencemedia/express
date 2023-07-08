function getRequestSocket ({ socket = {} }) {
  return socket
}

function isRequestSocketEncrypted (req) {
  const {
    encrypted = false
  } = getRequestSocket(req)

  return encrypted
}

function isRequestSecure ({ secure = false }) {
  return secure
}

function getRequestQuery ({ query = {} }) {
  return query
}

function getRequestParams ({ params = {} }) {
  return params
}

function getRequestBaseUrl ({ baseUrl }) {
  return baseUrl
}

function getRequestUrl ({ url }) {
  return url
}

function getRequestOriginalUrl ({ originalUrl }) {
  return originalUrl
}

function getRequestHeaders ({ headers = {} }) {
  return headers
}

function getRequestHeadersOrigin (req) {
  const {
    origin
  } = getRequestHeaders(req)

  return origin
}

function getRequestHeadersHost (req) {
  const {
    host
  } = getRequestHeaders(req)

  return host
}

function getRequestHeadersConnection (req) {
  const {
    connection
  } = getRequestHeaders(req)

  return connection
}

function getRequestHeadersUserAgent (req) {
  const {
    'user-agent': userAgent
  } = getRequestHeaders(req)

  return userAgent
}

function getRequestHeadersAccept (req) {
  const {
    accept
  } = getRequestHeaders(req)

  return accept
}

function getRequestHeadersAcceptEncoding (req) {
  const {
    'accept-encoding': acceptEncoding
  } = getRequestHeaders(req)

  return acceptEncoding
}

function getRequestHeadersAcceptLanguage (req) {
  const {
    'accept-language': acceptLanguage
  } = getRequestHeaders(req)

  return acceptLanguage
}

function getRequestHeadersCookie (req) {
  const {
    cookie
  } = getRequestHeaders(req)

  return cookie
}

module.exports = {
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
}
