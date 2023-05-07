'use strict';Object.defineProperty(exports,'__esModule',{value:true});//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
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
  data: function data() {
    return {
      state: {
        wrapperTag: this.wrapperTag,
        isIntersected: this.isIntersected,
        idle: this.idle,
        rootMargin: this.rootMargin,
        threshold: this.threshold,
        observer: null
      }
    };
  },
  watch: {
    isIntersected: function isIntersected(value) {
      if (value) {
        this.state.isIntersected = true;
      }
    },
    'state.isIntersected': function stateIsIntersected(value) {
      if (value) {
        this.$emit('intersected', this.$el);
      }
    }
  },
  mounted: function mounted() {
    if (this.isIntersectionObserverSupported()) {
      if (!this.state.isIntersected && !this.state.idle) {
        this.observe();
      }
    } else {
      this.state.isIntersected = true;
    }
    if (this.state.isIntersected) {
      this.$emit('intersected', this.$el);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (!this.state.isIntersected && !this.state.idle) {
      this.unobserve();
    }
  },
  methods: {
    isIntersectionObserverSupported: function isIntersectionObserverSupported() {
      return 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype && 'isIntersecting' in window.IntersectionObserverEntry.prototype;
    },
    observe: function observe() {
      var _this$state = this.state,
        rootMargin = _this$state.rootMargin,
        threshold = _this$state.threshold;
      var config = {
        root: undefined,
        rootMargin: rootMargin,
        threshold: threshold
      };
      this.state.observer = new IntersectionObserver(this.onIntersection, config);
      this.state.observer.observe(this.$el);
    },
    onIntersection: function onIntersection(entries) {
      this.state.isIntersected = entries.some(function (entry) {
        return entry.intersectionRatio > 0;
      });
      if (this.state.isIntersected) {
        this.unobserve();
      }
    },
    unobserve: function unobserve() {
      if (this.isIntersectionObserverSupported()) {
        this.state.observer.unobserve(this.$el);
      }
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__ = script;
/* template */
var __vue_render__ = function __vue_render__() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.state.wrapperTag, {
    tag: "component",
    class: ['v-lazy-component', {
      'v-lazy-component--loading': !_vm.state.isIntersected,
      'v-lazy-component--loaded': _vm.state.isIntersected
    }],
    style: {
      minWidth: '1px',
      minHeight: '1px'
    }
  }, [_vm.state.isIntersected ? _vm._t("default") : _vm._e(), _vm._v(" "), !_vm.state.isIntersected ? _vm._t("placeholder") : _vm._e()], 2);
};
var __vue_staticRenderFns__ = [];

/* style */
var __vue_inject_styles__ = undefined;
/* scoped */
var __vue_scope_id__ = undefined;
/* module identifier */
var __vue_module_identifier__ = "data-v-36b530e4";
/* functional template */
var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);// Import vue component

// install function executed by Vue.use()
var install = function installLazyComponent(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('LazyComponent', __vue_component__);
};

// Create module definition for Vue.use()
var plugin = {
  install: install
};

// To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare
/* global window, global */
{
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
}

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
__vue_component__.install = install;

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports["default"]=__vue_component__;