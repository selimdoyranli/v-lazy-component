'use strict';Object.defineProperty(exports,'__esModule',{value:true});var vue=require('vue');var script = vue.defineComponent({
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
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var rootRef = vue.ref(null);
    var state = vue.reactive({
      wrapperTag: props.wrapperTag,
      isIntersected: props.isIntersected,
      idle: props.idle,
      rootMargin: props.rootMargin,
      threshold: props.threshold,
      observer: null
    });
    vue.watch(function () {
      return props.isIntersected;
    }, function (value) {
      if (value) {
        state.isIntersected = true;
      }
    });
    vue.watch(function () {
      return state.isIntersected;
    }, function (value) {
      if (value) {
        emit('intersected', rootRef.value);
      }
    });
    var isIntersectionObserverSupported = function isIntersectionObserverSupported() {
      return 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype && 'isIntersecting' in window.IntersectionObserverEntry.prototype;
    };
    var onIntersection = function onIntersection(entries) {
      state.isIntersected = entries.some(function (entry) {
        return entry.intersectionRatio > 0;
      });
      if (state.isIntersected) {
        unobserve();
      }
    };
    var observe = function observe() {
      var rootMargin = state.rootMargin,
        threshold = state.threshold;
      var config = {
        root: undefined,
        rootMargin: rootMargin,
        threshold: threshold
      };
      state.observer = new IntersectionObserver(onIntersection, config);
      state.observer.observe(rootRef.value);
    };
    var unobserve = function unobserve() {
      if (isIntersectionObserverSupported()) {
        state.observer.unobserve(rootRef.value);
      }
    };
    vue.onMounted(function () {
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
    vue.onBeforeUnmount(function () {
      if (!state.isIntersected && !state.idle) {
        unobserve();
      }
    });
    return {
      rootRef: rootRef,
      state: state
    };
  }
});function render(_ctx, _cache, $props, $setup, $data, $options) {
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
    default: vue.withCtx(function () {
      return [_ctx.state.isIntersected ? vue.renderSlot(_ctx.$slots, "default", {
        key: 0
      }) : vue.createCommentVNode("", true), !_ctx.state.isIntersected ? vue.renderSlot(_ctx.$slots, "placeholder", {
        key: 1
      }) : vue.createCommentVNode("", true)];
    }),
    _: 3
  }, 8, ["class"]);
}script.render = render;// Import vue component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var entry = /*#__PURE__*/(function () {
  // Assign InstallableComponent type
  var installable = script;

  // Attach install function executed by Vue.use()
  installable.install = function (app) {
    app.component('LazyComponent', installable);
  };
  return installable;
})();

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
exports["default"]=entry;