<template>
<div>
    <video class="bg-video" :id="'video-' + UniqueId" muted autoplay loop>
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
    }
  },
  mounted() {
    this.UniqueId = this._uid;
  }
}
</script>