# v-lazy-component

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> Vue component render when visible. Uses Intersection Observer API.

[📖 **Release Notes**](./CHANGELOG.md) 

✨ Demo: [https://v-lazy-component.now.sh](https://v-lazy-component.now.sh)

🟥 NPM: [https://www.npmjs.com/package/v-lazy-component](https://www.npmjs.com/package/v-lazy-component)

⬛ Github: [https://github.com/RadKod/v-lazy-component](https://github.com/RadKod/v-lazy-component)

#### Installation

```js
npm install v-lazy-component --save
```

#### Global Register

```js
import Vue from "vue";
import LazyComponent from "v-lazy-component";

Vue.use(LazyComponent);
```

#### Local Register
```js
import LazyComponent from "v-lazy-component";

export default {
  components: {
    LazyComponent
  }
}
```
#### Via CDN
```js
<script src="https://unpkg.com/v-lazy-component"></script>

<script>
new  Vue({
  el: "#app"
});
Vue.use(LazyComponent);
</script>
```
#### Usage

```html
<lazy-component wrapper-tag="section" @intersected="optionalDispatch">
  <YourComponent />
  <span slot="placeholder">Loading..</span> <!-- Optional -->
</lazy-component>
```

#### Props

|Name|Type|Default 
|--|--|--|
|`wrapper-tag` |String | div
|`root-margin` |String | 0px 0px 0px 0px
|`threshold` |Number, Array| 0
[See Intersection Observer API doc](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options)

#### Slots
|`placeholder`| Content that is loaded as a placeholder until it comes into view  |
|--|--|

#### Events
|`intersected`| dispatch event when visible |
|--|--|

#### CSS Selectors

```css
.v-lazy-component.loading {
  filter: blur(20px);
}

.v-lazy-component.loaded {
  filter: blur(0);
  transition: filter 1s;
}
```

## License

[MIT License](./LICENSE)

Copyright (c) RadKod <info@radkod.com>

## Author

👤 **selimdoyranli**

* Website: [@selimdoyranli](https://selimdoyranli.com)
* Github: [@selimdoyranli](https://github.com/selimdoyranli)
* LinkedIn: [@selimdoyranli](https://linkedin.com/in/selimdoyranli)
* Team: [@RadKod](https://radkod.com)

___

CREATED BY

 [![RadKod](https://i.ibb.co/q5G6N0n/radkod-mail-imza.png)](https://www.radkod.com)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/v-lazy-component/latest.svg
[npm-version-href]: https://npmjs.com/package/v-lazy-component

[npm-downloads-src]: https://img.shields.io/npm/dt/v-lazy-component.svg
[npm-downloads-href]: https://npmjs.com/package/v-lazy-component

[codecov-src]: https://img.shields.io/codecov/c/github/RadKod/v-lazy-component.svg
[codecov-href]: https://codecov.io/gh/RadKod/v-lazy-component

[license-src]: https://img.shields.io/badge/License-MIT-blue.svg
[license-href]: https://npmjs.com/package/v-lazy-component/LICENSE
