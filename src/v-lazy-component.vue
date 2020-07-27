<template>
  <component
    :is="wrapperTag"
    :class="['v-lazy-component', {'loading': !isIntersected, 'loaded': isIntersected}]"
    :style="{
      minWidth: '1px',
      minHeight: '1px',
    }"
  >
    <slot v-if="isIntersected" />
    <!-- Content that is loaded as a placeholder until it comes into view -->
    <slot v-if="!isIntersected" name="placeholder" />
  </component>
</template>

<script>
export default {
  props: {
    wrapperTag: {
      type: String,
      required: false,
      default: "div"
    },
    /**
     * See IntersectionOberserver rootMargin [docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options)
     */
    rootMargin: {
      type: String,
      required: false,
      default: "0px 0px 0px 0px"
    },
    /**
     * See IntersectionOberserver treshold [docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options)
     */
    threshold: {
      type: [Number, Array],
      required: false,
      default: 0
    },
    once: {
      type: Boolean,
      required: false,
      default: true,
    },
    root: {
      required: false,
      validator: function (el) {
        function isNode(o){
          return (
            typeof Node === "object" ? o instanceof Node :
              o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
          );
        };
        function isElement(o){
          return (
            typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
              o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
          );
        };
        return isElement(el) || isNode(el);
      },
      default: function () {
        return undefined;
      }
    },
  },
  data() {
    return {
      isIntersected: false,
      isLeaving: false,
      observer: null
    };
  },
  watch: {
    isIntersected(value) {
      if (value) {
        this.$emit("intersected", this.$el);
      }
    },
    isLeaving(value) {
      if (value) {
        this.$emit("leaved", this.$el);
      }
    }
  },
  mounted() {
    if ("IntersectionObserver" in window) {
      this.observe();
    } else {
      this.isIntersected = true;
    }
  },
  beforeDestroy() {
    this.unobserve();
  },
  methods: {
    observe() {
      const { rootMargin, threshold, root } = this;
      const config = { root, rootMargin, threshold };
      this.observer = new IntersectionObserver(this.onIntersection, config);
      this.observer.observe(this.$el);
    },
    onIntersection(entries) {
      this.isIntersected = entries.some(entry => entry.intersectionRatio > 0);
      this.isLeaving = entries.some(entry => !entry.isIntersecting);
      if (this.isIntersected && this.once) {
        this.unobserve();
      }
    },
    unobserve() {
      if ("IntersectionObserver" in window) {
        this.observer.unobserve(this.$el);
      }
    }
  }
};
</script>
