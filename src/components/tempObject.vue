<template>
  <div class="temp-object" :class="className">
      <template v-if="type === 'audio'">
        <transition :name="animation">
          <slot v-if="audioCurrentTime >= parseFloat(startTime) && audioCurrentTime <= parseFloat(endTime)"></slot>
        </transition>
      </template>
      <template v-if="type === 'delay'">
        <transition :name="animation">
            <slot v-if="tempObjectActive"></slot>
        </transition>
      </template>
      <template v-if="type === 'variable'">
        <transition :name="animation">
            <slot v-if="variable"></slot>
        </transition>
      </template>
  </div>
</template>

<script>
export default {
  name: 'tempObject',
  props: {
    animation: {
      type: String,
      required: true,
      default: 'fade'
    },
    type: {
      type: String,
      required: true,
      default: 'delay'
    },
    className: {
      type: String,
      required: false,
      default: ''
    },
    delay: {
      type: Number,
      required: false,
      default: 0
    },
    startTime: {
      type: Number,
      required: false,
      default: 0
    },
    endTime: {
      type: Number,
      required: false,
      default: 0
    },
    audioCurrentTime: {
      type: Number,
      required: false
    },
    variable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      tempObjectActive: false,
      UniqueId: null
    }
  },
  methods: {
    showContent () {
      setTimeout(() => {
        this.tempObjectActive = true;
      }, this.delay);
    }
  },
  mounted () {
    this.showContent();
    this.UniqueId = this._uid;
  }
}
</script>
