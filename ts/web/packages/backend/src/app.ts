import {
  BFF_PORT,
  CORS_ORIGIN,
  TLS_CERT_PATH,
  TLS_KEY_PATH,
  USE_HTTPS,
} from '@backend/env'
import { errorHandler } from '@backend/error'
import { initLogger } from '@backend/log'
import { informationLog, initContext } from '@backend/middleware'
import { healthRoute } from '@backend/routes'
import { Hono } from 'hono'
import { except } from 'hono/combine'
import { cors } from 'hono/cors'
import { secureHeaders } from 'hono/secure-headers'

initLogger('info')

const app = new Hono()
  .use(
    cors({
      origin: CORS_ORIGIN,
      credentials: true,
    }),
    initContext,
    secureHeaders(),
  )
  .use('*', except(['/health'], informationLog))
  .onError(errorHandler)
  .route('/health', healthRoute)

// Run
export default {
  fetch: app.fetch,
  port: BFF_PORT,
  tls: USE_HTTPS
    ? {
        key: Bun.file(TLS_KEY_PATH),
        cert: Bun.file(TLS_CERT_PATH),
        serverName: 'localhost',
      }
    : undefined,
}

export type App = typeof app
