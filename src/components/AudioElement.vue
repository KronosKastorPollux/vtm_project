<template>
  <Transition name="fade-in-out">
    <a-row v-if="modalAudio" class="modal start" type="flex" justify="center" align="middle">
        <tempObject class="margin--bottom" type="delay" animation="fade-in-out" :delay="1000">
        <a-col :span="24">
          <ButtonComponent @click="startAudio" content="Start"></ButtonComponent>
        </a-col>
      </tempObject>
    </a-row>
  </Transition>
  <div class="audio-element"  :id="'audio-element-' + UniqueId">
    <audio :id="'audio-' + UniqueId" ref="audio" loop>
        <source :src="audio" type="audio/mp3">
    </audio>
  </div>
</template>

<script>
import tempObject from '@/components/tempObject.vue';
//import LinkComponent from '@/components/LinkComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';


export default {
  name: 'AudioElement',
  components: {
    tempObject,
    ButtonComponent

  },
  data() {
    return {
        UniqueId: null,
        modalAudio: true
    }
  },
  props: {
    audio: {
        type: String,
        required: true
    }
  },
  methods: {
    startAudio() {
      this.modalAudio = !this.modalAudio
      let audioElement = this.$refs.audio;
      let sound = new Audio(require('../assets/audio/sounds/sound4.mp3'))
      this.audioElement = audioElement;
      this.audioElement.play();
      sound.play()
      this.$router.push({ name: "home" });
    }
  },
  mounted() {
    this.UniqueId = this._uid;

  }
}
</script>