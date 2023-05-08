!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).LazyComponent={})}(this,(function(e){"use strict";function t(e,t,s,n,i,r,o,d,a,l){"boolean"!=typeof o&&(a=d,d=o,o=!1);const c="function"==typeof s?s.options:s;let p;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,i&&(c.functional=!0)),n&&(c._scopeId=n),r?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=p):t&&(p=o?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,d(e))}),p)if(c.functional){const e=c.render;c.render=function(t,s){return p.call(s),e(t,s)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,p):[p]}return s}const s=t({render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.state.wrapperTag,{tag:"component",class:["v-lazy-component",{"v-lazy-component--loading":!e.state.isIntersected,"v-lazy-component--loaded":e.state.isIntersected}],style:{minWidth:"1px",minHeight:"1px"}},[e.state.isIntersected?e._t("default"):e._e(),e._v(" "),e.state.isIntersected?e._e():e._t("placeholder")],2)},staticRenderFns:[]},undefined,{name:"LazyComponent",props:{wrapperTag:{type:String,required:!1,default:"div"},isIntersected:{type:Boolean,required:!1,default:!1},idle:{type:Boolean,required:!1,default:!1},rootMargin:{type:String,required:!1,default:"0px 0px 0px 0px"},threshold:{type:[Number,Array],required:!1,default:0}},data(){return{state:{wrapperTag:this.wrapperTag,isIntersected:this.isIntersected,idle:this.idle,rootMargin:this.rootMargin,threshold:this.threshold,observer:null}}},watch:{isIntersected(e){e&&(this.state.isIntersected=!0)},"state.isIntersected"(e){e&&this.$emit("intersected",this.$el)}},mounted(){this.isIntersectionObserverSupported()?this.state.isIntersected||this.state.idle||this.observe():this.state.isIntersected=!0,this.state.isIntersected&&this.$emit("intersected",this.$el)},beforeDestroy(){this.state.isIntersected||this.state.idle||this.unobserve()},methods:{isIntersectionObserverSupported:()=>"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&"isIntersecting"in window.IntersectionObserverEntry.prototype,observe(){const{rootMargin:e,threshold:t}=this.state,s={root:void 0,rootMargin:e,threshold:t};this.state.observer=new IntersectionObserver(this.onIntersection,s),this.state.observer.observe(this.$el)},onIntersection(e){this.state.isIntersected=e.some((e=>e.intersectionRatio>0)),this.state.isIntersected&&this.unobserve()},unobserve(){this.isIntersectionObserverSupported()&&this.state.observer.unobserve(this.$el)}}},undefined,false,undefined,!1,void 0,void 0,void 0),n=function(e){n.installed||(n.installed=!0,e.component("LazyComponent",s))},i={install:n};{let e=null;"undefined"!=typeof window?e=window.Vue:"undefined"!=typeof global&&(e=global.Vue),e&&e.use(i)}s.install=n,e.default=s,Object.defineProperty(e,"__esModule",{value:!0})}));