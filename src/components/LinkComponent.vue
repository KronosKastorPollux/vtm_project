<template>
    <a-row type="flex" justify="center" @click="playSound">
        <a-col :span="24" class="margin--bottom">
            <Transition name="fade-in-out">
                <router-link class="link--main" :to="path">
                    <slot/>
                </router-link>
            </Transition>
        </a-col>
    </a-row>
 </template>
 
 <script>
 
 export default {
    name: 'LinkComponent',
    components: {
    },
    data() {
        return {
        }
    },
    methods: {
        playSound() {
            var sound = new Audio(require('../assets/audio/sounds/sound3.mp3'))
            sound.play()
        }
    },
    props: {
        path: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false
        }
    }
 }
 </script>