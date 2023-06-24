declare module '@sequencemedia/express' {
  export function getRequestSocket(req: Request): object
  export function isRequestSocketEncrypted(req: Request): boolean
  export function getRequestHeaders(req: Request): object
  export function getRequestHeadersOrigin(req: Request): string | void
  export function getRequestHeadersConnection(req: Request): string | void
  export function getRequestHeadersUserAgent(req: Request): string | void
  export function getRequestHeadersAccept(req: Request): string | void
  export function getRequestHeadersAcceptEncoding(req: Request): string | void
  export function getRequestHeadersAcceptLanguage(req: Request): string | void
  export function getRequestHeadersCookie(req: Request): string | void
}
