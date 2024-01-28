<template>
  <Transition>
    <div :class="animationScroll">
      <slot />
    </div>
  </Transition>
</template>

<script lang="js">
import { ref } from 'vue';
export default {
  name: 'AnimatedScroll_bkp',
  data() {
    return {
    }
  },
  props: {
    animationScroll: {
      type: String,
      required: false,
      default: 'fade-in-out'
    },
    threshold: {
      type: Number,
      required: false,
      default: 0.3
    },
  },
  setup() {



  },
  mounted () {
    /*Intersection Observer*/

    const currentSection = ref();
    console.log('threshold: ' + this.threshold)

    const options = {threshold: this.threshold};
    //const options = {rootMargin: "-150px"};
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          currentSection.value = entry.target.getAttribute('id')
        }
        if (entry.isIntersecting) {
          modify(entry.target);
        } else {
          revert(entry.target);
        }
      })
    }, options)

    function modify(el) {
      if (el.classList.contains("hidden--fade")) {
        el.classList.add('fade-in-out-enter-active')
        el.classList.remove('fade-in-out-leave-active')
        console.log('fade da')
      }
      if (el.classList.contains("hidden--puff")) {
        el.classList.add('puff-center-enter-active')
        el.classList.remove('puff-center-leave-active')
        console.log('puff da')
      }
    }

    function revert(el) {
      if (el.classList.contains("hidden--fade")) {
        el.classList.remove('fade-in-out-enter-active')
        el.classList.add('fade-in-out-leave-active')
        console.log('fade weg')
      }
      if (el.classList.contains("hidden--puff")) {
        el.classList.remove('puff-center-enter-active')
        el.classList.add('puff-center-leave-active')
        console.log('puff weg')
      }
    }

    document.querySelectorAll('.hidden--fade').forEach((section) => {
      observer.observe(section)
    })

    document.querySelectorAll('.hidden--puff').forEach((section) => {
      observer.observe(section)
    })
  }
};
</script>