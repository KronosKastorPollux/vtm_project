<template>
    <a-row type="flex" justify="center" class="vh-100s" style="min-height: 70vh;">
        <a-col :span="24">
            <a-row type="flex" justify="center">
                <a-col :span="14">
                    <HeadlineComponent :content="headline" type="page" :delay="2000" />
                </a-col>
                <a-col :span="15" style="margin-bottom: 10%">
                    <tempObject type="delay" animation="fade-in-out" :delay="3000">
                        <p v-html="bodytext" class="text--primarys text--white text--left">
                        </p>
                    </tempObject>
                </a-col>
            </a-row>
        </a-col>
    </a-row>
 </template>
 
 <script>
import HeadlineComponent from '@/components/HeadlineComponent.vue';
import tempObject from '@/components/tempObject.vue';
//import BgVideo from '@/components/BgVideo.vue';
 
 export default {
    name: 'PageIntroduction',
    components: {
        HeadlineComponent,
        tempObject
    },
    data() {
        return {
        }
    },
    methods: {
    },
    props: {
        headline: {
            type: String,
            required: true
        },
        bodytext: {
            type: String,
            required: false
        }
    }
 }
 </script>