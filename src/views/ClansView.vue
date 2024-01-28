<template>
<div class="container--main">
    <a-row type="flex" justify="center" class="container--bg-gradient">
        <a-col :span="24" class="margin---bottom">
            <BgVideo :video="require('../assets/videos/bg_animation.mp4')"></BgVideo>
            <AnimatedScroll animationScroll="hidden--fade" :threshold="1">
                <PageIntroduction :headline="headline" :bodytext="bodytext"></PageIntroduction>
            </AnimatedScroll>
        </a-col>
        <a-col :span="24">
            <AnimatedScroll animationScroll="hidden--fade" :threshold="0.8">
                <tempObject type="delay" animation="fade-in-out" :delay="2000">
                    <CharacterSlider :slider="slider" />
                </tempObject>
            </AnimatedScroll>
        </a-col>
    </a-row>
</div>
</template>

<script>
import PageIntroduction from '@/components/PageIntroduction.vue';
//import HeadlineComponent from '@/components/HeadlineComponent.vue';
import tempObject from '@/components/tempObject.vue';
import CharacterSlider from '@/components/CharacterSlider.vue';
import AnimatedScroll from "@/components/AnimatedScroll.vue";
//import ImageComponent from "@/components/ImageComponent.vue";
import BgVideo from '@/components/BgVideo.vue';


export default {
name: 'SectsView',
components: {
    CharacterSlider,
    tempObject,
    AnimatedScroll,
    PageIntroduction,
    BgVideo
},
data() {
return {
    headline: "Clan",
    bodytext: "Als Clan bezeichnet man eine Gruppe von Vampiren, die das gleiche Blut teilen und einen Vorsintflutlichen vorweisen können. Das Blut führt dazu, dass Angehörige eines Clans eine bestimmte Schwäche miteinander teilen und dass ihnen das Lernen bestimmter Disziplinen leichter fällt als anderen.",
    slider: [
        {
            id: 0,
            bg: require('../assets/images/clans/tremere/tremere_nur_hg.jpg'),
            image: 'tremere/tremere.png',
            symbol: 'tremere/tremere_symbol.svg',
            headline: 'Tremere',
            closed: false,
            open: false,
            delay: 2000,
            bodytext: 'In der kurzen Zeit seit ihrer Gründung haben die Tremere unglaubliche Fortschritte in der vampirischen Gesellschaft gemacht und sind wohl der mächtigste Clan in den modernen Nächten. Das liegt nicht zuletzt an ihrer strengen Hierarchie, ihrer Geheimniskrämerei und ihrer Beherrschung der Blutmagie, der so genannten Thaumaturgie, die bei den anderen Kainiten Misstrauen, Furcht und Respekt hervorruft. Die Hexenmeister sind eine Säule der Camarilla und einer ihrer Hauptverteidiger. Manche gehen sogar so weit, sie als Weiterentwicklung des Vampirismus zu bezeichnen, und verweisen auf ihre extreme Vielseitigkeit in der Blutmagie und das Fehlen eines echten Clanfluchs. Die Letzten Nächte halten jedoch viele Dinge für die Tremere bereit, und je mächtiger sie werden, desto mehr Feinde sammeln sich an - und in ihrem Streben nach Macht haben die Tremere mehr Feinde angehäuft als die meisten anderen.'
        },
        {
            id: 1,
            bg: require('../assets/images/clans/malkavianer/malkavianer_nur_hg.png'),
            image: 'malkavianer/malkavianer.png',
            symbol: 'malkavianer/malkavianer_symbol.svg',
            headline: 'Malkavianer',
            closed: false,
            open: false,
            delay: 2000,
            bodytext: 'Die Camarilla ist die am besten organisierte Vampirsekte, ein elitärer Club, der Traditionen und die Kontrolle der sterblichen Bevölkerung hinter den Kulissen bevorzugt. In ihren Domänen setzen sie sechs große Traditionen durch, darunter vor allem die Maskerade. Alle Clans haben eine individuelle Präsenz im Elfenbeinturm, obwohl eine ausgewählte Gruppe von Säulenclans den Kern der Mitgliedschaft ausmacht. Einst hieß die Camarilla alle Kindreds willkommen, die ihre Gesetze befolgten, aber die jüngsten Ereignisse haben die Führung veranlasst, exklusivere Mitgliedschaftsregeln zu erlassen. Anarchen, Caitiff und dünnblütige Vampire sind in der Sekte nicht zugelassen.'
        },
        {
            id: 1,
            bg: require('../assets/images/clans/gangrel/gangrel_nur_hg.png'),
            image: 'gangrel/gangrel.png',
            symbol: 'gangrel/gangrel_symbol.svg',
            headline: 'Gangrel',
            closed: false,
            open: false,
            delay: 2000,
            bodytext: 'Die Camarilla ist die am besten organisierte Vampirsekte, ein elitärer Club, der Traditionen und die Kontrolle der sterblichen Bevölkerung hinter den Kulissen bevorzugt. In ihren Domänen setzen sie sechs große Traditionen durch, darunter vor allem die Maskerade. Alle Clans haben eine individuelle Präsenz im Elfenbeinturm, obwohl eine ausgewählte Gruppe von Säulenclans den Kern der Mitgliedschaft ausmacht. Einst hieß die Camarilla alle Kindreds willkommen, die ihre Gesetze befolgten, aber die jüngsten Ereignisse haben die Führung veranlasst, exklusivere Mitgliedschaftsregeln zu erlassen. Anarchen, Caitiff und dünnblütige Vampire sind in der Sekte nicht zugelassen.'
        },
        {
            id: 1,
            bg: require('../assets/images/clans/toreador/toreador_nur_hg.jpg'),
            image: 'toreador/toreador.png',
            symbol: 'tremere/tremere_symbol.svg',
            headline: 'Toreador',
            closed: false,
            open: false,
            delay: 2000,
            bodytext: 'Die Camarilla ist die am besten organisierte Vampirsekte, ein elitärer Club, der Traditionen und die Kontrolle der sterblichen Bevölkerung hinter den Kulissen bevorzugt. In ihren Domänen setzen sie sechs große Traditionen durch, darunter vor allem die Maskerade. Alle Clans haben eine individuelle Präsenz im Elfenbeinturm, obwohl eine ausgewählte Gruppe von Säulenclans den Kern der Mitgliedschaft ausmacht. Einst hieß die Camarilla alle Kindreds willkommen, die ihre Gesetze befolgten, aber die jüngsten Ereignisse haben die Führung veranlasst, exklusivere Mitgliedschaftsregeln zu erlassen. Anarchen, Caitiff und dünnblütige Vampire sind in der Sekte nicht zugelassen.'
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
