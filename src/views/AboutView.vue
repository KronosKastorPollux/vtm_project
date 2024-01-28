<template>
  <div class="container--main">
    <a-row type="flex" justify="center">
      <a-row type="flex" justify="center">
        <a-col :span="20">
          <a-row type="flex" justify="center">
            <tempObject class="margin--bottom" type="delay" animation="fade-in-out" :delay="4000">
              <a-col :span="24">
                <LinkComponent path="/home" content="Wiki">
                  <ButtonComponent content="Home"></ButtonComponent>
                </LinkComponent>
              </a-col>
            </tempObject>
            <tempObject class="margin--bottom" type="delay" animation="fade-in-out" :delay="4000">
              <a-col :span="24">
                <LinkComponent path="/sects">
                  <ButtonComponent content="Sekten"></ButtonComponent>
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
import tempObject from '@/components/tempObject.vue';
import LinkComponent from '@/components/LinkComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

export default {
  name: 'AboutView',
  components: {
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
