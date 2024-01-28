<template>
  <div class="home container--main" @click="playAudio">
    <BgVideo :video="require('../assets/videos/bg_animation.mp4')"></BgVideo>
    <a-row type="flex" justify="center">
      <a-col :span="24">
        <a-row type="flex" justify="center" class="margin----bottom">
          <a-col :span="24" class="margin-----bottom">
            <a-row type="flex" justify="center">
              <a-col :span="18">
                <tempObject type="delay" animation="fade-in-out" :delay="3000">
                  <p class="headline--main text--white">Vampire</p>
                </tempObject>
                <tempObject type="delay" animation="fade-in-out" :delay="4000">
                  <hr style="width: 70%">
                </tempObject>
                <tempObject type="delay" animation="fade-in-out" :delay="5000">
                  <p class="headline--main--sub text--white">the Masquerade</p>
                </tempObject>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-col>
      <a-row type="flex" justify="center">
        <a-col :span="20">
          <a-row type="flex" justify="center">
            <tempObject class="margin--bottom" type="delay" animation="fade-in-out" :delay="7000">
              <a-col :span="24">
                <LinkComponent path="/sects" content="Sekten">
                  <ButtonComponent content="Sekten"></ButtonComponent>
                </LinkComponent>
              </a-col>
            </tempObject>
            <tempObject class="margin--bottom" type="delay" animation="fade-in-out" :delay="8000">
              <a-col :span="24">
                <LinkComponent path="/clans">
                  <ButtonComponent content="Clans"></ButtonComponent>
                </LinkComponent>
              </a-col>
            </tempObject>
          </a-row>
        </a-col>
      </a-row>
    </a-row>
  </div>
</template>

<script>
// @ is an alias to /src
import BgVideo from '@/components/BgVideo.vue';
import tempObject from '@/components/tempObject.vue';
import LinkComponent from '@/components/LinkComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
  name: 'HomeView',
  components: {
    BgVideo,
    tempObject,
    LinkComponent,
    ButtonComponent
},
data() {
  return {
    modal01: true
  }
},
methods: {
},
mounted() {
}
}
</script>
