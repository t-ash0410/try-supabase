import { type RouteConfig, index, route } from '@react-router/dev/routes'
import { pagePaths } from './consts'

export default [
  index(pagePaths.public.root.file),
  route(pagePaths.public.signin.path, pagePaths.public.signin.file),
] satisfies RouteConfig
