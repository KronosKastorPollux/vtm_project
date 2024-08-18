<template>
  <div class="bg-image" :style="{'background-image': 'url('+src+')'}">
    <slot></slot>
  </div>
</template>

<script>
import { onMounted } from 'vue';


export default {
  name: 'BgImage',
  components: {
  },
  props: {
    src: {
        type: String,
        required: true
    }
  },
  setup() {

    onMounted(() => {

    })

    return {
    
    }
  }
}
</script>