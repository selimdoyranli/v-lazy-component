[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![changelog][changelog-src]][changelog-href]
[![License][license-src]][license-href]

<p align="center">
<b>v-lazy-component</b>
</p>

<p align="center">
Vue component render when visible 👁️⚡️
</p>

<p align="center">
  <a href="https://v-lazy-component.vercel.app" target="_blank"> 
    <img src='/meta/logo.png' width="256"/>
  </a>
</p>

<p align="center">
  <p align="center"><sub>Created by<sub></p>
    <p align="center">
	    <a href="https://radkod.com" target="_blank">
			<img src='/meta/radkod_signature.png' width="128" />
		</a>
    </p>
</p>

<p align="center">
<a href="https://github.com/RadKod/v-lazy-component" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/RadKod/v-lazy-component?style=social"></a>
</p>

<p align="center">
  <a href="https://v-lazy-component.vercel.app" target="_blank">Website</a>
</p>

<div align="center">
<sub>Buy me a coffee - <a href="https://www.buymeacoffee.com/RadKod">Sponsorship 💖</a></sub><br>
</div>

## Features
- ⚡️ Lightweight
- 🎨 Interactive
- 👶🏻 Easy implementation
- 📦 Vue2 & Vue3 support

## Getting Started

### Try it Online ⚡️

[DEMO](https://v-lazy-component.vercel.app/demo)


## Installation

```js
yarn add v-lazy-component  # or npm i v-lazy-component
```

### Vue3

#### Global Register

```js
import { createApp } from 'vue'
import App from './App.vue'
import LazyComponent from 'v-lazy-component'

const app = createApp(App)

app.use(LazyComponent)
app.mount('#app')
```

#### Local Register
```html
<script setup>
import LazyComponent from 'v-lazy-component'
</script>
```
#### Via CDN
```js
<script src="https://unpkg.com/vue@3"></script>
<script src="https://unpkg.com/v-lazy-component"></script>

<script>
  const app = Vue.createApp({})
    
  app.use(LazyComponent)
  app.mount('#app')
</script>
```

### Vue2

#### Global Register

```js
import Vue from "vue";
import LazyComponent from "v-lazy-component/vue2";

Vue.use(LazyComponent);
```

#### Local Register
```js
import LazyComponent from "v-lazy-component/vue2";

export default {
  components: {
    LazyComponent
  }
}
```
#### Via CDN
```js
<script src="https://unpkg.com/vue@2"></script>
<script src="https://unpkg.com/v-lazy-component/vue2"></script>

<script>
new  Vue({
  el: "#app"
});

Vue.use(LazyComponent);
</script>
```
&nbsp;

### Usage

```html
<lazy-component wrapper-tag="section" @intersected="optionalDispatch">
  <your-component/>
  
  <!-- Optional -->
  <template #placeholder>
    <span>Loading...</span>
  </template>
</lazy-component>
```

idle variant
```html
....
<button @click="isIntersected = true">Click for Render</button>

<lazy-component :is-intersected="isIntersected" idle>
  <your-component/>
  
  <!-- Optional -->
  <template #placeholder>
    <span>Loading...</span>
  </template>
</lazy-component>
```

#### Props

|Name|Description|Type|Default 
|--|--|--|--|
|`wrapper-tag` |Html tag of lazy component|String | div
|`is-intersected` |Do not wait observe, Force render |Boolean | false
|`idle` |Do not use observer, wait `is-intersected` prop changes for render |Boolean | false
|`root-margin` |[Intersection Observer API doc](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options)|String | 0px 0px 0px 0px
|`threshold` |[Intersection Observer API doc](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options)|Number, Array| 0
[See Intersection Observer API doc](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options)

#### Slots
|`placeholder`| Content that is loaded as a placeholder until it comes into view  |
|--|--|

#### Events
|`intersected`| dispatch event when visible |
|--|--|

#### CSS Selectors

```css
.v-lazy-component.v-lazy-component--loading {
  filter: blur(20px);
}

.v-lazy-component.v-lazy-component--loaded {
  filter: blur(0);
  transition: filter 1s;
}
```

---

## Development

### Vue3

```bash
yarn build:vue3 # build for vue3
```

```bash
# Serve

cd dev/vue3

yarn install
yarn serve
```

### Vue2

```bash
yarn build:vue2 # build for vue2
```

```bash
# Serve

cd dev/vue2

yarn install
yarn serve
```

### Vue 2&3

```bash
yarn build # build for vue2 and vue3
```

## Sponsorship

You can sponsor us for the continuity of our projects:

<p align="left">
  <a href="https://buymeacoffee.com/RadKod">
    <img src='https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png'/>
  </a>
</p>

## License

[MIT License](./LICENSE)

Copyright (c) RadKod <info@radkod.com>

<p align="left">
  <a href="https://radkod.com">
    <img src='/meta/radkod_signature.png'/>
  </a>
</p>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/v-lazy-component/latest.svg
[npm-version-href]: https://npmjs.com/package/v-lazy-component

[npm-downloads-src]: https://img.shields.io/npm/dt/v-lazy-component.svg
[npm-downloads-href]: https://npmjs.com/package/v-lazy-component

[codecov-src]: https://img.shields.io/codecov/c/github/RadKod/v-lazy-component.svg
[codecov-href]: https://codecov.io/gh/RadKod/v-lazy-component

[changelog-src]: https://img.shields.io/static/v1?label=%F0%9F%93%96&message=Release%20Notes%20|%20CHANGELOG&color=blue
[changelog-href]: ./CHANGELOG.md

[license-src]: https://img.shields.io/badge/License-MIT-blue.svg
[license-href]: https://npmjs.com/package/v-lazy-component/LICENSE
