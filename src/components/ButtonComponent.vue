<template>
    <div class="btn--data-container" @click="playSound(SFX)">
        <span class="btn--main">
            {{ content }}
        </span>
    </div>
 </template>
 
 <script>
 
 export default {
    name: 'ButtonComponent',
    components: {
    },
    data() {
        return {
        }
    },
    methods: {
        playSound(type) {
            if(type) {
                if( type === 'link') {
                    var sound = new Audio(require('../assets/audio/sounds/sound3.mp3'))
                    sound.play()
                }
            }
        }
    },
    props: {
        content: {
            type: String,
            required: false
        },
        SFX: {
            type: String,
            required: false,
            default: 'none'
        }
    }
 }
 </script>