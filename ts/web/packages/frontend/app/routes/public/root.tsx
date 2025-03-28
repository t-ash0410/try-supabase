import type { MetaArgs } from 'react-router'

export function meta(_: MetaArgs) {
  return [{ title: 'Hello World!' }]
}

export default () => {
  return <div>Hello World!</div>
}
