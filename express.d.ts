declare module '@sequencemedia/express' {
  export function getRequestSocket(req: Request): object
  export function isRequestSocketEncrypted(req: Request): boolean
  export function isRequestSecure(req: Request): boolean
  export function getRequestQuery(req: Request): object
  export function getRequestParams(req: Request): object
  export function getRequestBaseUrl(req: Request): string | void
  export function getRequestUrl(req: Request): string | void
  export function getRequestOriginalUrl(req: Request): string | void
  export function getRequestHeaders(req: Request): object
  export function getRequestHeadersOrigin(req: Request): string | void
  export function getRequestHeadersHost(req: Request): string | void
  export function getRequestHeadersConnection(req: Request): string | void
  export function getRequestHeadersUserAgent(req: Request): string | void
  export function getRequestHeadersAccept(req: Request): string | void
  export function getRequestHeadersAcceptEncoding(req: Request): string | void
  export function getRequestHeadersAcceptLanguage(req: Request): string | void
  export function getRequestHeadersCookie(req: Request): string | void
}
