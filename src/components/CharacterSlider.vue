<template>
    <a-row type="flex" justify="center" style="height: 100vh">
        <a-col :span="24" style="height: 100%">
            <Transition name="fade-fast" mode="out-in">
                <a-row :key="slider[currentID].bg" :style="{ backgroundImage: 'url(' + slider[currentID].bg + ')' }" type="flex" justify="center" style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;">
                </a-row>
            </Transition>
            <a-row type="flex" justify="space-between" style="height: 100%">
                <a-col :span="11" style="height: 100%;">
                    <Transition name="fade-fast" mode="out-in">
                        <a-row :key="slider[currentID].headline" type="flex" justify="center" style="padding: 10em 5em; height: 100%">
                            <a-col :span="24">
                                <a-row type="flex" justify="center">
                                    <a-col class="margin--bottom" :span="23">
                                        <HeadlineComponent :content="slider[currentID].headline" type="sub" />
                                    </a-col>
                                    <a-col :span="12">
                                        <ImageComponent class="teaser--symbol margin---bottom" :overflow="true" imageWidth="30%" imageHeight="auto" :src="require('../assets/images/clans/' + slider[currentID].symbol + '')" />
                                    </a-col>
                                    <a-col :span="20">
                                        <p class="text--primarys text--left">
                                            {{ slider[currentID].bodytext }}
                                        </p>
                                    </a-col>
                                </a-row>
                            </a-col>
                        </a-row>
                    </Transition>
                </a-col>
                <a-col :span="12" style="height: 100%">
                    <Transition name="fade-in-out">
                        <a-row type="flex" justify="center" style="height: 100%">
                            <a-col :span="24" style="height: 100%">
                                <a-row type="flex" justify="center" style="height: 100%; align-items: end; padding-right: 7em;">
                                    <a-row type="flex" justify="center" style="width: 100%; height: 100%; position: absolute; align-items: center;">
                                        <a-col :span="17">
                                            <ImageComponent :key="slider[currentID].symbol" class="slider--symbol-bg" :overflow="true" imageWidth="100%" imageHeight="auto" :src="require('../assets/images/clans/' + slider[currentID].symbol + '')" />
                                        </a-col>
                                    </a-row>
                                    <a-row type="flex" justify="center" style="width: 100%; height: 100%; position: absolute; align-items: center;">
                                        <a-col :span="24">
                                            <a-row type="flex" justify="space-between">
                                                <a-col :span="1">
                                                    <LeftOutlined v-if="currentID != 0" class="slider--icons" @click="previousSlide" />
                                                </a-col>
                                                <a-col :span="1">
                                                    <RightOutlined v-if="currentID != slider.length-1" class="slider--icons" @click="nextSlide" />
                                                </a-col>
                                            </a-row>
                                        </a-col>
                                    </a-row>
                                    <a-col :span="24">
                                        <Transition name="fade-fast" mode="out-in">
                                            <ImageComponent :key="slider[currentID].image" :overflow="true" imageWidth="100%" imageHeight="auto" :src="require('../assets/images/clans/' + slider[currentID].image + '')" />
                                        </Transition>
                                    </a-col>
                                </a-row>
                            </a-col>
                        </a-row>
                    </Transition>
                </a-col>
            </a-row>
        </a-col>
    </a-row>
 </template>
 
 <script>
 import HeadlineComponent from '@/components/HeadlineComponent.vue';
 //import AnimatedScroll from "@/components/AnimatedScroll.vue";
 //import tempObject from '@/components/tempObject.vue';
 import ImageComponent from "@/components/ImageComponent.vue";

 import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';
 
 export default {
    name: 'CharacterSlider',
    components: {
        HeadlineComponent,
        ImageComponent,
        LeftOutlined,
        RightOutlined
    },
    data() {
        return {
            currentID: 0
        }
    },
    methods: {
        nextSlide() {
            if(this.currentID < this.slider.length-1) {
                this.currentID++
                
            }
        },
        previousSlide() {
            if(this.currentID != 0) {
                this.currentID--
            }
        }
    
    },
    props: {
        slider: {
            type: Array,
            required: true
      
        },
        content: {
           
        }
    }
 }
 </script>