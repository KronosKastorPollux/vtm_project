<template>
<div>
    <video ref="video" class="bg-video" :id="'video-' + UniqueId" :muted="muted" autoplay loop>
        <source :src="video" type="video/mp4">
    </video>
</div>
</template>

<script>

export default {
  name: 'BgVideo',
  components: {
  },
  data() {
    return {
        UniqueId: null
    }
  },
  props: {
    video: {
        type: String,
        required: true
    },
    muted: {
        type: Boolean,
        required: true
    },
    volume: {
        type: Number,
        required: false,
        default: 0.2
    }
  },
  mounted() {
    this.UniqueId = this._uid;
    this.$refs.video.volume = this.volume
  }
}
</script>