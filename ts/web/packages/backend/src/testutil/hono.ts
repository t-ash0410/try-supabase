import { errorHandler } from '@backend/error'
import { getLogger } from '@backend/log'
import type { DefaultEnv } from '@backend/types'
import { Hono } from 'hono'

const initHonoApp = () =>
  new Hono<DefaultEnv>()
    .use(async (c, next) => {
      c.set('logger', getLogger())
      await next()
    })
    .onError(errorHandler)

export { initHonoApp }
