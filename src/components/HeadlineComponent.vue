<template>
   <a-row v-if="type === 'page'" type="flex" justify="center" class="margin----bottom">
      <a-col :span="24" class="margin---bottom margin----top">
        <a-row type="flex" justify="center">
          <a-col :span="18">
            <tempObject type="delay" animation="fade-in-out" :delay="delay">
              <p class="headline--page text--white">
                {{content}}
              </p>
            </tempObject>
            <tempObject type="delay" animation="fade-in-out" :delay="delay">
              <hr style="width: 70%">
            </tempObject>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row v-if="type === 'sub'" type="flex" justify="center" class="margin---bottom">
      <a-col :span="24">
        <a-row type="flex" justify="center">
          <a-col :span="18">
            <tempObject type="delay" animation="fade-in-out" :delay="delay">
              <p class="headline--sub">
                {{content}}
              </p>
            </tempObject>
            <tempObject type="delay" animation="fade-in-out" :delay="delay">
              <hr style="width: 100%">
            </tempObject>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
</template>

<script>

import tempObject from '@/components/tempObject.vue';

export default {

  name: 'HeadlineComponent',
  components: {
    tempObject
  },
  data() {
    return {
    }
  },
  props: {
    type: {
        type: String,
        required: true,
        default: 'page'
    },
    content: {
      type: String,
      required: true
    },
    delay: {
      type: Number,
      required: false,
      default: 0
    }
  }
}
</script>