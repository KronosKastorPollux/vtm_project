<template>
  <div class="image-component" :class="{'overflow--hidden': !overflow}" :align="align">
    <template v-if="!overflow">
      <div class="image--overflov-hidden"
           :class="className + ' ' + (loadAnimated  === true ? 'loading' : '') + ' ' + (loaded  === true ? 'loaded' : '')"
           :style="{'background-image': 'url('+src+')'}"
      ></div>
    </template>
    <template v-else>
      <img :class="className + ' ' + (loadAnimated  === true ? 'loading' : 'loaded') + ' ' + (loaded  === true ? 'loaded' : '')" :src="src" @load="loadedImage" :style="{'width': imageWidth, 'height': imageHeight}" />
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
