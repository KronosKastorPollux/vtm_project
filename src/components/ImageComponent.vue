<template>
  <div class="image-component" :class="{'overflow--hidden': !overflow}" :align="align">
    <template v-if="!overflow">
      <div class="image--overflov-hidden"
           :class="className + ' ' + (loadAnimated  === true ? 'loading' : '') + ' ' + (loaded  === true ? 'loaded' : '')"
           :style="[border ? {'border': '0.5px solid white'} : {}, {'background-image': 'url('+src+')', }, round ? {'border-radius': '100%'} : {'border-radius': '0'}]"
      ></div>
    </template>
    <template v-else>
      <img :class="className + ' ' + (loadAnimated  === true ? 'loading' : 'loaded') + ' ' + (loaded  === true ? 'loaded' : '')" :src="src" @load="loadedImage" :style="[border ? {'border': '0.5px solid white'} : {}, round ? {'border-radius': '100%'} : {'border-radius': '0'}, {'width': imageWidth, 'height': imageHeight}]" />
      <span v-if="this.$slots.default"><slot></slot></span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ImageComponent',
  props: {
    src: {
      type: String,
      required: true
    },
    imageWidth: {
      type: String,
      required: false,
      default: '100%'
    },
    imageHeight: {
      type: String,
      required: false,
      default: 'auto'
    },
    className: {
      type: String,
      required: false
    },
    align: {
      type: String,
      required: false,
      default: 'center'
    },
    loadAnimated: {
      type: Boolean,
      required: false,
      default: true
    },
    overflow: {
      type: Boolean,
      required: false,
      default: true
    },
    border: {
      type: Boolean,
      required: false,
      default: false
    },
    round: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      loaded: false
    }
  },
  methods: {
    loadedImage () {
      setTimeout(() => {
        this.loaded = true;
      }, 100);
    }
  }
}
</script>
