<template>
    <a-row type="flex" justif="start">
        <a-col :span="24">
            <a-row type="flex" justif="start" class="teaser--container">
                    <a-col style="height: 100%" v-for="(teaser, id) in teasers" :key="id" :span="teaser.span" class="teaser--col" :class="{ 'teaser--closed': teaser.closed}">
                        <tempObject style="height:100%" type="delay" animation="fade-in-out" :delay="teaser.delay">
                            <div class="teaser--image" :style="{ backgroundImage: 'url(' + teaser.image + ')' }">
                                <Transition name="fade-in-out">
                                    <a-row v-if="!teaser.open" class="teaser--info" type="flex" justify="center">
                                        <a-col :span="10">
                                            <ButtonComponent @click="closeTeaser(teaser.id)" content="Mehr erfahren"></ButtonComponent>
                                        </a-col>
                                    </a-row>
                                </Transition>
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

export default {
    name: 'ImageTeaser',
    components: {
        tempObject,
        ButtonComponent

    },
    data() {
        return {

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
        openTeaseraaa(id) {
            let filteredTeaser= [];
            for (let i= 0; i< this.teasers.length; i++) {
                if (this.teasers[i].id === id ) {
                    filteredTeaser= [...filteredTeaser, this.teasers[i]];
                }
                filteredTeaser[i].span = 24
                console.log('Span open' + filteredTeaser[i].span);
            }
            let closeTeaser= [];
            for (let i= 0; i< this.teasers.length; i++) {
                if (this.teasers[i].id !== id ) {
                    console.log('Hilfeeeee');
                    closeTeaser= [...closeTeaser, this.teasers[i]];
                }
                console.log('close teasers ' + closeTeaser.length);
            }
            for (let i= 0; i< closeTeaser.length; i++) {
                closeTeaser[i].span = 0;
                console.log('Span close' + closeTeaser[i].span);
            }
        },
        openTeaserss(id) {
            let filteredTeaser= [];
            for (let i= 0; i< this.teasers.length; i++) {
                if (this.teasers[i].id === id ) {
                    filteredTeaser= [...filteredTeaser, this.teasers[i]];
                }
                filteredTeaser[i].span = 24
                console.log('Span open' + filteredTeaser[i].span);
            }
            let closeTeaser= [];
            for (let i= 0; i< this.teasers.length; i++) {
                if (this.teasers[i].id !== id ) {
                    console.log('Hilfeeeee');
                    closeTeaser= [...closeTeaser, this.teasers[i]];
                }
                console.log('close teasers ' + closeTeaser.length);
            }
            for (let i= 0; i< closeTeaser.length; i++) {
                closeTeaser[i].span = 0;
                console.log('Span close' + closeTeaser[i].span);
            }
        },
        openTeaser(id) {
            setTimeout(function(id){
                this.openTeaser(id)
            }, 3000);
            let openTeaser = this.teasers.filter((teaser) => teaser.id === id);
            console.log("Open Teaser Span: " + openTeaser[0].span)
            openTeaser[0].span = 24
        },
        closeTeaser(id) {

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
            }, 2000);

        }
        
    },
    mounted() {

    }
}
</script>