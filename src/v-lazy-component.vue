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
  name: 'LazyComponent',
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
    }
  },
  data() {
    return {
      isIntersected: false,
      observer: null
    };
  },
  watch: {
    isIntersected(value) {
      if (value) {
        this.$emit("intersected", this.$el);
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
      const { rootMargin, threshold } = this;
      const config = { root: undefined, rootMargin, threshold };
      this.observer = new IntersectionObserver(this.onIntersection, config);
      this.observer.observe(this.$el);
    },
    onIntersection(entries) {
      this.isIntersected = entries.some(entry => entry.intersectionRatio > 0);
      if (this.isIntersected) {
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
