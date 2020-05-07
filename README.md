
  

# v-lazy-component

  

Vue component render when visible. Uses Intersection Observer API. 

#### Installation

    npm install v-lazy-component --save

#### Register

    import Vue from "vue";
    import LazyComponent from "v-lazy-component";
    
    Vue.use(LazyComponent);

  
#### Usage

    <lazy-component wrapper-tag="section" @intersected="optionalDispatch">
	    <YourComponent />
	    <span slot="placeholder">Loading..</span> <!-- Optional -->
    </lazy-component>

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

    .v-lazy-component.loading {
	    filter: blur(20px);
    }
    
    .v-lazy-component.loaded {
	    filter: blur(0);
	    transition: filter 1s;
    }


 **[created by @radkod](https://radkod.com)**
