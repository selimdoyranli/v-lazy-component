<template>
  <component
    :is="state.wrapperTag"
    :class="[
      'v-lazy-component',
      {
        'v-lazy-component--loading': !state.isIntersected,
        'v-lazy-component--loaded': state.isIntersected
      }
    ]"
    :style="{
      minWidth: '1px',
      minHeight: '1px'
    }"
  >
    <slot v-if="state.isIntersected" />
    <!-- Content that is loaded as a placeholder until it comes into view -->
    <slot v-if="!state.isIntersected" name="placeholder" />
  </component>
</template>

<script>
export default {
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
  data() {
    return {
      state: {
        wrapperTag: this.wrapperTag,
        isIntersected: this.isIntersected,
        idle: this.idle,
        rootMargin: this.rootMargin,
        threshold: this.threshold,
        observer: null
      }
    }
  },
  watch: {
    isIntersected(value) {
      if (value) {
        this.state.isIntersected = true
      }
    },
    'state.isIntersected'(value) {
      if (value) {
        this.$emit('intersected', this.$el)
      }
    }
  },
  mounted() {
    if (this.isIntersectionObserverSupported()) {
      if (!this.state.isIntersected && !this.state.idle) {
        this.observe()
      }
    } else {
      this.state.isIntersected = true
    }

    if (this.state.isIntersected) {
      this.$emit('intersected', this.$el)
    }
  },
  beforeDestroy() {
    if (!this.state.isIntersected && !this.state.idle) {
      this.unobserve()
    }
  },
  methods: {
    isIntersectionObserverSupported() {
      return (
        'IntersectionObserver' in window &&
        'IntersectionObserverEntry' in window &&
        'intersectionRatio' in window.IntersectionObserverEntry.prototype &&
        'isIntersecting' in window.IntersectionObserverEntry.prototype
      )
    },
    observe() {
      const { rootMargin, threshold } = this.state
      const config = { root: undefined, rootMargin, threshold }
      this.state.observer = new IntersectionObserver(this.onIntersection, config)
      this.state.observer.observe(this.$el)
    },
    onIntersection(entries) {
      this.state.isIntersected = entries.some(entry => entry.intersectionRatio > 0)

      if (this.state.isIntersected) {
        this.unobserve()
      }
    },
    unobserve() {
      if (this.isIntersectionObserverSupported()) {
        this.state.observer.unobserve(this.$el)
      }
    }
  }
}
</script>

<style>
.v-lazy-component {
  position: relative;
}
</style>
