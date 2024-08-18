<template>
  <div class="home container--main" @click="playAudio">
    <transition name="fade-in-out">
      <a-row v-if="pins[0].prince.active" class="container--absolute ovl">
        <a-col :span="24">
          <a-row type="flex" justify="end">
            <transition name="slide-left">
              <a-col v-if="pins[0].prince.animation" :span="18" style="height: 100vh">
                <BgImage :src="require('../assets/images/general/ovl_bg_right.png')">
                  <a-row class="ovl--location-container" type="flex" justify="center">
                    <a-col :span="24">
                      <a-row type="flex" justify="center">
                        <a-col :span="16" class="margin----bottom">
                          <tempObject type="delay" animation="fade-in-out" :delay="1000">
                            <ImageComponent imageWidth="100%" imageHeight="auto" :overflow="true" :border="true" :src="require('../assets/images/locations/teaser_' + pins[0].prince.teaserImg + '')"/>
                          </tempObject>
                        </a-col>
                      </a-row>
                      <a-row type="flex" justify="center">
                        <a-col :span="16">
                          <a-row type="flex" justify="center">
                            <a-col :span="19">
                              <HeadlineComponent content="Linde AG" type="sub" :delay="2000" />
                            </a-col>
                          </a-row>
                        </a-col>
                        <a-col :span="24" class="margin---bottom">
                          <tempObject type="delay" animation="fade-in-out" :delay="3000">
                            <p v-html="pins[0].prince.teaserText" class="text--primarys text--white text--left"></p>
                        </tempObject>
                        </a-col>
                      </a-row>
                      <a-row type="flex" justify="center">
                        <a-col :span="24">
                          <a-row type="flex" justify="center">
                            <a-col :span="3" class="display-flex align-items-center">
                              <tempObject type="delay" animation="fade-in-out" :delay="4000" style="margin-right: 20px">
                                <ImageComponent class="teaser--symbol" imageWidth="100%" imageHeight="auto" :overflow="true" :border="true" :src="require('../assets/images/sects/symbols/' + pins[0].prince.teaserSect + '')"/>
                              </tempObject>
                            </a-col>
                            <a-col :span="7" v-for="(item, name) in pins[0].prince.teaserNpc" :key="name">
                              <tempObject type="delay" animation="fade-in-out" :delay="4000">
                                <ImageComponent class="img--npc-teaser" imageWidth="100%" imageHeight="auto" :overflow="true" :round="true" :src="require('../assets/images/characters/teaser/'+ item.img + '')"/>
                              </tempObject>
                            </a-col>
                          </a-row>
                        </a-col>
                      </a-row>
                    </a-col>
                  </a-row>
                </BgImage>
              </a-col>
            </transition>
          </a-row>
        </a-col>
      </a-row>
    </transition>
    <BgVideo :video="require('../assets/videos/map/city_map_audio.mp4')" :muted="false" :volume="0.5"></BgVideo>
    <a-row type="flex" justify="center">
      <a-col :span="24" class="container--maps">
        <a-row type="flex" justify="start">
          <a-col :span="12">
          </a-col>
          <a-col :span="12">
            <tempObject type="delay" animation="fade-in-out" :delay="2000">
              <div class="map--item pin1" v-if="pins[0].prince.visible">
              <div class="map--item-pin pulse" @mouseover="pins[0].prince.hover = true" @mouseleave="pins[0].prince.hover = false" @click="ovlAnimation(pins[0].prince)"></div>
                <transition name="fade-in-out">
                  <div v-if="pins[0].prince.hover || pins[0].prince.active" class="map--item-pin-container-text">
                    <a-row>
                      <a-col :span="24">
                        <p class="text--primarys text--white text--left map--item-pin-text">
                          Linde AG
                        </p>
                      </a-col>
                    </a-row>
                  </div>
                </transition>
              </div>
            </tempObject>
          </a-col>
        </a-row>
        <a-row type="flex" justify="center">
          <a-col :span="12">
          </a-col>
          <a-col :span="12">
            <tempObject type="delay" animation="fade-in-out" :delay="3000">
              <div class="map--item pin2" v-if="pins[1].bloodbank.visible">
                <div class="map--item-pin pulse" @mouseover="pins[1].bloodbank.hover = true" @mouseleave="pins[1].bloodbank.hover = false"></div>
                <transition name="fade-in-out">
                  <div v-if="pins[1].bloodbank.hover" class="map--item-pin-container-text">
                    <a-row>
                      <a-col :span="24">
                        <p class="text--primarys text--white text--left map--item-pin-text">
                          Blutbank
                        </p>
                      </a-col>
                    </a-row>
                  </div>
                </transition>
              </div>
            </tempObject>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
// @ is an alias to /src
import BgVideo from '@/components/BgVideo.vue'; 
import tempObject from '@/components/tempObject.vue';
import BgImage from '@/components/BgImage.vue'
import HeadlineComponent from '@/components/HeadlineComponent.vue'
import ImageComponent from "@/components/ImageComponent.vue";
import { ref } from 'vue'

export default {
  name: 'MapView',
  components: {
    BgVideo,
    tempObject,
    BgImage,
    HeadlineComponent,
    ImageComponent
},
setup() {

  const pins = ref([
    {
      prince: {
        hover: false,
        active: false,
        animation: false,
        visible: true,
        teaserImg: 'linde_ag.png',
        teaserSect: 'symbol_camarilla.webp',
        teaserText: 'Die Linde AG ist ein bekanntes und erfolgreiches Unternehmen, das sich auf erneuerbare Energien fokussiert hat und im Herzen des Geschäftsviertiels Münchens liegt. Bei der Firma handelt es sich jedoch nicht um ein Familienunternehmen, sondern um ein verhältnismäßg neues Unternehmen, das von Cäcila Linde, dem Prinzen von München selbst, gegründet wurde. Sollte man eine Audienz beim Prinzen benötigen, findet man sie zumeist dort in ihrem Büro an. Ihr Begleiter, der Sheriff, befindet sich stets an ihrer Seite.',
        teaserNpc: [
          {
            name: 'Cäcilia Linde',
            img: 'teaser_linde.png'
          },
          {
            name: 'Der Sheriff',
            img: 'teaser_sheriff.png'
          }
        ]
      }
    },
    {
      bloodbank: {
        hover: false,
        active: false,
        animation: false,
        visible: true
      }
    }
  ])

  const ovlAnimation = (location) => {
    const sound = new Audio(require('@/assets/audio/sounds/sound3.mp3'))
    sound.play()
    pins.value[0].prince.visible = !pins.value[0].prince.visible
    pins.value[1].bloodbank.visible = !pins.value[1].bloodbank.visible
    location.visible = !location.visible;
    location.active = !location.active;
    setTimeout(() => {
      location.animation = !location.animation;
    }, 500);
  }

  return {
    pins,
    ovlAnimation
  }
}
}
</script>

<style>
  .map--item {
    borders: 2px solid white; 
    width: 300px; 
    height: 300px; 
    position: absolute;
    transform: translateX(calc((100% - 10vw) / 2)) translateY(calc((100% + 60vh) / 2))
  }
  .map--item.pin1 {
    transform: translateX(calc((100% - 1500px) / 2)) translateY(calc((100% + 40vh) / 2))
  }
  .map--item-pin {
    border: 2px solid white; 
    width: 100px; 
    height: 100px; 
    border-radius: 100%;
    position: absolute;
    left: 40%;
    z-index: 100;
  }
  .map--item-pin-container-text {
    width: 20vw;
    position: absolute;
    top: 20%;
    left: 80%;
  }
  .map--item-pin-text {
      text-decoration: underline;
  }
  .map--item-pin-text::after {
    content: "";
    background-color: white;
    height: 2px;
    width: 8vh;
    display: block;
    transform: rotate(-25deg);
    position: absolute;
    left: -8vh;
    top: 5.5vh;
  }
</style>
