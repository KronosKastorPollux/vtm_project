<template>
  <a-row class="modal start" type="flex" justify="center" align="middle">
      <tempObject class="margin--bottom" type="delay" animation="fade-in-out" :delay="1000">
      <a-col :span="24">
        <LinkComponent path="/home">
          <ButtonComponent content="Start"></ButtonComponent>
        </LinkComponent>
      </a-col>
    </tempObject>
  </a-row>
</template>

<script>
// @ is an alias to /src
import tempObject from '@/components/tempObject.vue';
import LinkComponent from '@/components/LinkComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
  name: 'StartView',
  components: {
    tempObject,
    LinkComponent,
    ButtonComponent
},
data() {
  return {
    modal: true
  }
},
methods: {
},
mounted() {
}
}
</script>
