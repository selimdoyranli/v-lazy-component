// Import vue component
import component from './v-lazy-component.vue'

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
export default /*#__PURE__*/ (() => {
  // Assign InstallableComponent type
  const installable = component

  // Attach install function executed by Vue.use()
  installable.install = app => {
    app.component('LazyComponent', installable)
  }

  return installable
})()

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
