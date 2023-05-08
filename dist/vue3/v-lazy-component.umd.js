(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.LazyComponent = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var script = vue.defineComponent({
    name: 'LazyComponent',
    props: {
      wrapperTag: {
        type: String,
        required: false,
        default: 'div'
      },
      isIntersected: {
        type: Boolean,
        required: false,
        default: false
      },
      idle: {
        type: Boolean,
        required: false,
        default: false
      },
      /**
       * See IntersectionOberserver rootMargin [docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options)
       */
      rootMargin: {
        type: String,
        required: false,
        default: '0px 0px 0px 0px'
      },
      /**
       * See IntersectionOberserver treshold [docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options)
       */
      threshold: {
        type: [Number, Array],
        required: false,
        default: 0
      }
    },
    setup(props, _ref) {
      let {
        emit
      } = _ref;
      const rootRef = vue.ref(null);
      const state = vue.reactive({
        wrapperTag: props.wrapperTag,
        isIntersected: props.isIntersected,
        idle: props.idle,
        rootMargin: props.rootMargin,
        threshold: props.threshold,
        observer: null
      });
      vue.watch(() => props.isIntersected, value => {
        if (value) {
          state.isIntersected = true;
        }
      });
      vue.watch(() => state.isIntersected, value => {
        if (value) {
          emit('intersected', rootRef.value);
        }
      });
      const isIntersectionObserverSupported = () => {
        return 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype && 'isIntersecting' in window.IntersectionObserverEntry.prototype;
      };
      const onIntersection = entries => {
        state.isIntersected = entries.some(entry => entry.intersectionRatio > 0);
        if (state.isIntersected) {
          unobserve();
        }
      };
      const observe = () => {
        const {
          rootMargin,
          threshold
        } = state;
        const config = {
          root: undefined,
          rootMargin,
          threshold
        };
        state.observer = new IntersectionObserver(onIntersection, config);
        state.observer.observe(rootRef.value);
      };
      const unobserve = () => {
        if (isIntersectionObserverSupported()) {
          state.observer.unobserve(rootRef.value);
        }
      };
      vue.onMounted(() => {
        if (isIntersectionObserverSupported()) {
          if (!state.isIntersected && !state.idle) {
            observe();
          }
        } else {
          state.isIntersected = true;
        }
        if (state.isIntersected) {
          emit('intersected', rootRef.value);
        }
      });
      vue.onBeforeUnmount(() => {
        if (!state.isIntersected && !state.idle) {
          unobserve();
        }
      });
      return {
        rootRef,
        state
      };
    }
  });

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.state.wrapperTag), {
      ref: "rootRef",
      class: vue.normalizeClass(['v-lazy-component', {
        'v-lazy-component--loading': !_ctx.state.isIntersected,
        'v-lazy-component--loaded': _ctx.state.isIntersected
      }]),
      style: {
        minWidth: '1px',
        minHeight: '1px'
      }
    }, {
      default: vue.withCtx(() => [_ctx.state.isIntersected ? vue.renderSlot(_ctx.$slots, "default", {
        key: 0
      }) : vue.createCommentVNode("", true), !_ctx.state.isIntersected ? vue.renderSlot(_ctx.$slots, "placeholder", {
        key: 1
      }) : vue.createCommentVNode("", true)]),
      _: 3
    }, 8, ["class"]);
  }

  script.render = render;

  // Import vue component

  // Default export is installable instance of component.
  // IIFE injects install function into component, allowing component
  // to be registered via Vue.use() as well as Vue.component(),
  var entry = /*#__PURE__*/(() => {
    // Assign InstallableComponent type
    const installable = script;

    // Attach install function executed by Vue.use()
    installable.install = app => {
      app.component('LazyComponent', installable);
    };
    return installable;
  })();

  // It's possible to expose named exports when writing components that can
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = directive;

  exports["default"] = entry;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
