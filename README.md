
  

# v-lazy-component

  

Vue component render when visible. Uses Intersection Observer API. 

#### Installation

    npm install v-lazy-component --save

#### Register

    import Vue from "vue";
    import LazyComponent from "v-lazy-component";
    
    Vue.use(LazyComponent);

  
#### Usage

    <lazy-component  wrapper-tag="section" @intersected="optionalDispatch">
	    <YourComponent />
	    <span slot="placeholder">Loading..</span> <!-- Optional -->
    </lazy-component>

#### Props
|wrapper-tag|default: div  (optional) |
|--|--|

#### Events
|intersected| dispatch event when visible |
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
