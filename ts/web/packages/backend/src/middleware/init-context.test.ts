import { describe, expect, it } from 'bun:test'
import type { DefaultEnv } from '@backend/types'
import { Hono } from 'hono'
import { initContext } from './init-context'

describe('initContext', () => {
  it('sets the component in context', async () => {
    const app = new Hono<DefaultEnv>().use(initContext).get('/', (c) => {
      expect(c.var.logger).toBeTruthy()
      return c.text('ok!')
    })
    await app.request('/')
  })
})
