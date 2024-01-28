<template>
  <div style="overflow: hiddens">
    <router-view v-slot="{ Component, route }">
    <!-- Use a custom transition or fallback to `fade` -->
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
    </router-view>
    <AudioElement :audio="require('./assets/audio/vtm_start.mp3')"></AudioElement>
  </div>
</template>

<script>
// @ is an alias to /src
import AudioElement from '@/components/AudioElement.vue';

export default {
  name: 'HomeView',
  components: {
    AudioElement
},
methods: {
},
mounted() {
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
