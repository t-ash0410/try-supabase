import { getLogger } from '@backend/log'
import type { DefaultEnv } from '@backend/types'
import { createMiddleware } from 'hono/factory'

export const initContext = createMiddleware<DefaultEnv>(async (c, next) => {
  c.set('logger', getLogger())
  await next()
})
