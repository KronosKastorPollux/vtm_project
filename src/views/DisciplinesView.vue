<template>
    <div class="container--main">
        <a-row type="flex" justify="center" class="container--bg-gradient">
            <a-col :span="24">
                <BgVideo :video="require('../assets/videos/bg_animation.mp4')"></BgVideo>
                <a-row type="flex" justify="center" class="vh-100s" style="min-height: 80vh">
                    <a-col :span="24">
                        <AnimatedScroll animationScroll="hidden--fade" :threshold="1">
                            <PageIntroduction :headline="headline" :bodytext="bodytext"></PageIntroduction>
                        </AnimatedScroll>
                    </a-col>
                </a-row>
            </a-col>
            <a-col :span="24">
                <AnimatedScroll animationScroll="hidden--fade" :threshold="0.3">
                    <tempObject type="delay" animation="fade-in-out" :delay="2000">
                        <ItemCatalog :items="disciplines"/>
                    </tempObject>
                </AnimatedScroll>
            </a-col>
        </a-row>
    </div>
    </template>
    
    <script>
    import PageIntroduction from '@/components/PageIntroduction.vue';
    import tempObject from '@/components/tempObject.vue';
    import AnimatedScroll from "@/components/AnimatedScroll.vue";
    import BgVideo from '@/components/BgVideo.vue';
    import ItemCatalog from '@/components/ItemCatalog.vue';
    
    
    export default {
    name: 'SectsView',
    components: {
    tempObject,
    AnimatedScroll,
    BgVideo,
    PageIntroduction,
    ItemCatalog
},
    data() {
    return {
        headline: "Disziplinen",
        bodytext: "Als Disziplinen bezeichnet man übernatürliche Fähigkeiten von Kainiten. Jeder Clan verfügt über je 3 ihm eigene Disziplinen. Diese Clansdisziplinen werden auch als clanseigene Disziplinen bezeichnet. Alle anderen Disziplinen entsprechend als clansfremde. Die für einen Clan vorgegebenen Clansdisziplinen sind nicht veränderbar, ihre Veranlagung wird mit dem Blut des Clans weitergegeben. Disziplinen können körperliche, geistige oder mystische Kräfte beinhalten.",
        disciplines: [
            {
                id: 0,
                image: 'disciplines/auspex.webp',
                headline: 'Auspex',
                description: 'Beschreibung Auspex',
                category: 'mental',
                masquerade: false,
                clan: ['Toreador', 'Tremere', 'Malkavianer']
            },
            {
                id: 1,
                image: 'disciplines/thaumaturgy.webp',
                headline: 'Thaumaturgie',
                description: 'Beschreibung Thaumaturgie',
                category: 'mystical',
                masquerade: true,
                clan: ['Tremere']
            },
            {
                id: 2,
                image: 'disciplines/dominate.webp',
                headline: 'Beherrschung',
                description: 'Beschreibung Beherrschung',
                category: 'mental',
                masquerade: false,
                clan: ['Ventrue', 'Tremere', 'Lasombra']
            },
            {
                id: 3,
                image: 'disciplines/presence.webp',
                headline: 'Präsenz',
                description: 'Beschreibung Präsenz',
                category: 'mental',
                masquerade: false,
                clan: ['Toreador', 'Ventrue', 'Brujah']
            },
            {
                id: 4,
                image: 'disciplines/potence.webp',
                headline: 'Potenz',
                description: 'Beschreibung Potenz',
                category: 'physical',
                masquerade: true,
                clan: ['Brujah', 'Lasombra', 'Nosferatu']
            },
            {
                id: 5,
                image: 'disciplines/celerity.webp',
                headline: 'Geschwindigkeit',
                description: 'Beschreibung Geschwindigkeit',
                category: 'physical',
                masquerade: false,
                clan: ['Toreador', 'Brujah']
            }
        ],
        colSpan : 6
    }
    },
    methods: {
    },
    mounted() {
    }
    }
    </script>
    