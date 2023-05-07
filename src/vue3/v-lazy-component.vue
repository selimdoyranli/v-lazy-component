<template>
  <component
    ref="rootRef"
    :is="state.wrapperTag"
    :class="[
      'v-lazy-component',
      {
        'v-lazy-component--loading': !state.isIntersected,
        'v-lazy-component--loaded': state.isIntersected,
      },
    ]"
    :style="{
      minWidth: '1px',
      minHeight: '1px',
    }"
  >
    <slot v-if="state.isIntersected" />
    <!-- Content that is loaded as a placeholder until it comes into view -->
    <slot v-if="!state.isIntersected" name="placeholder" />
  </component>
</template>

<script>
import { defineComponent, ref, reactive, onMounted, watch, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'LazyComponent',
  props: {
    wrapperTag: {
      type: String,
      required: false,
      default: 'div',
    },
    isIntersected: {
      type: Boolean,
      required: false,
      default: false,
    },
    idle: {
      type: Boolean,
      required: false,
      default: false,
    },
    /**
     * See IntersectionOberserver rootMargin [docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options)
     */
    rootMargin: {
      type: String,
      required: false,
      default: '0px 0px 0px 0px',
    },
    /**
     * See IntersectionOberserver treshold [docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options)
     */
    threshold: {
      type: [Number, Array],
      required: false,
      default: 0,
    },
  },
  setup(props, { emit }) {
    const rootRef = ref(null)

    const state = reactive({
      wrapperTag: props.wrapperTag,
      isIntersected: props.isIntersected,
      idle: props.idle,
      rootMargin: props.rootMargin,
      threshold: props.threshold,
      observer: null,
    })

    watch(
      () => props.isIntersected,
      value => {
        if (value) {
          state.isIntersected = true
        }
      }
    )

    watch(
      () => state.isIntersected,
      value => {
        if (value) {
          emit('intersected', rootRef.value);
        }
      }
    )

    const isIntersectionObserverSupported = () => {
      return 'IntersectionObserver' in window
        && 'IntersectionObserverEntry' in window
        && 'intersectionRatio' in window.IntersectionObserverEntry.prototype
        && 'isIntersecting' in window.IntersectionObserverEntry.prototype;
    }

    const onIntersection = (entries) => {
      state.isIntersected = entries.some(
        (entry) => entry.intersectionRatio > 0
      );
      if (state.isIntersected) {
        unobserve();
      }
    }

    const observe = () => {
      const { rootMargin, threshold } = state;
      
      const config = { root: undefined, rootMargin, threshold };
      state.observer = new IntersectionObserver(
        onIntersection,
        config
      );

      state.observer.observe(rootRef.value);
    }

    const unobserve = () => {
      if (isIntersectionObserverSupported()) {
        state.observer.unobserve(rootRef.value);
      }
    }

    onMounted(() => {
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
      
    })

    onBeforeUnmount(() => {
      if (!state.isIntersected && !state.idle) {
        unobserve();
      }
    })

    return {
      rootRef,
      state
    }
  }
})

</script>

<style scoped>
.v-lazy-component {
  position: relative;
}
</style>
