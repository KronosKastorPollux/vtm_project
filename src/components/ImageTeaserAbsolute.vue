<template>
    <a-row type="flex" justif="start">
        <a-col :span="24">
            <a-row type="flex" justif="start" class="teaser--container">
                    <a-col style="height: 100%; position: absolute;" v-for="(teaser, id) in teasers" :key="id" :span="teaser.span" :style="{'left' : ((100 / teasers.length)*(teaser.id)) + '%'}" class="teaser--col" :class="{ 'teaser--closed': teaser.closed, 'teaser--open': teaser.open}">
                        <tempObject style="height:100%" type="delay" animation="fade-in-out" :delay="teaser.delay">
                            <div class="teaser--image" :style="{ backgroundImage: 'url(' + teaser.image + ')' }">
                                <Transition name="fade-in-out">
                                    <a-row v-if="!teaser.open" class="teaser--info" type="flex" justify="center">
                                        <a-col :span="24">
                                            <a-row type="flex" justify="center">
                                                <a-col :span="12">
                                                    <ImageComponent class="teaser--symbol" :overflow="true" imageWidth="20%" imageHeight="auto" :src="require('../assets/images/sects/symbols/' + teaser.symbol + '')" />
                                                </a-col>
                                                <a-col class="margin--bottom" :span="23">
                                                    <h3 class="headline--teaser">
                                                        {{ teaser.headline }}
                                                    </h3>
                                                </a-col>
                                                <a-col :span="14">
                                                    <ButtonComponent SFX="link" @click="openTeaser(teaser.id)" content="Mehr erfahren"></ButtonComponent>
                                                </a-col>
                                            </a-row>
                                        </a-col>
                                    </a-row>
                                </Transition>
                                <tempObject style="height:100%" type="delay" animation="fade-in-out" :delay="3000">
                                    <a-row v-if="teaserContent" type="flex" justify="start" class="teaser--content-container">
                                        <a-col :span="12" class="teaser--content">
                                            <Transition name="fade-in-out">
                                                <a-row type="flex" justify="center" style="padding: 5em">
                                                    <a-col class="margin--bottom" :span="23">
                                                        <HeadlineComponent :content="teaser.headline" type="sub" :delay="2000" />
                                                    </a-col>
                                                    <a-col :span="12">
                                                        <tempObject style="height:100%" type="delay" animation="fade-in-out" :delay="2000">
                                                            <ImageComponent class="teaser--symbol margin--bottom" :overflow="true" imageWidth="15%" imageHeight="auto" :src="require('../assets/images/sects/symbols/' + teaser.symbol + '')" />
                                                        </tempObject>
                                                    </a-col>
                                                    <a-col :span="20">
                                                        <tempObject style="height:100%" type="delay" animation="fade-in-out" :delay="2000">
                                                            <p class="text--primarys text--left margin----bottom">
                                                                {{ teaser.bodytext }}
                                                            </p>
                                                        </tempObject>
                                                    </a-col>
                                                    <a-col :span="14">
                                                        <tempObject style="height:100%" type="delay" animation="fade-in-out" :delay="2000">
                                                            <ButtonComponent SFX="link" @click="closeTeaser(teaser.id)" content="Zurück"></ButtonComponent>
                                                        </tempObject>
                                                    </a-col>
                                                </a-row>
                                            </Transition>
                                        </a-col>
                                    </a-row>
                                </tempObject>
                            </div>
                        </tempObject>
                    </a-col>
            </a-row>
        </a-col>
    </a-row>
</template>

<script>

import tempObject from '@/components/tempObject.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import ImageComponent from "@/components/ImageComponent.vue";
import HeadlineComponent from '@/components/HeadlineComponent.vue';

export default {
    name: 'ImageTeaserAbsolute',
    components: {
        tempObject,
        ButtonComponent,
        ImageComponent,
        HeadlineComponent

    },
    data() {
        return {
            teaserContent: false
        }
    },
    props: {
        teasers: {
            type: Array,
            required: false
        },
        span: {
            type: Number,
            required: false,
            default: 6
        }
    },
    methods: {
        openTeaser(id) {

            let closeTeaser = this.teasers.filter((teaser) => teaser.id !== id);
            for (let i= 0; i< closeTeaser.length; i++) {
                closeTeaser[i].closed = true;
                console.log('Span close' + closeTeaser[i].span);
                setTimeout(() => {
                    closeTeaser[i].span = 0;
                }, 2000);
            }

            setTimeout(() => {
                let openTeaser = this.teasers.filter((teaser) => teaser.id === id);
                console.log("Open Teaser Span: " + openTeaser[0].span)
                openTeaser[0].open = true;
                openTeaser[0].span = 24
                this.teaserContent = true;
            }, 2000);

        },
        closeTeaser(id) {

            this.teaserContent = false;

            setTimeout(() => {
                let openTeaser = this.teasers.filter((teaser) => teaser.id === id);
                console.log("Open Teaser Span: " + openTeaser[0].span)
                openTeaser[0].open = false;
                openTeaser[0].span = 6
            }, 1700);

            setTimeout(() => {
                let closeTeaser = this.teasers.filter((teaser) => teaser.id !== id);
                for (let i= 0; i< closeTeaser.length; i++) {
                closeTeaser[i].span = 6;
                console.log('Span close' + closeTeaser[i].span);
                setTimeout(() => {
                    closeTeaser[i].closed = false;
                }, 1000);
            }
            }, 3000);
        }
        
    },
    mounted() {

    }
}
</script>