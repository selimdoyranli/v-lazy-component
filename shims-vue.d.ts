declare module '*.vue' {
  import { DefineComponent } from 'vue-next'

  const Component: DefineComponent<{}, {}, any>
  export default Component
}
