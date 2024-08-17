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
            bodytext: 'Die Malkavianer oder Clan des Mondes sind einer der Clans, die zu den modernen Zeiten der Camarilla angehören. Sie sind vor allem bekannt dafür, dass alle seine Mitglieder unheilbar geisteskrank sind, weshalb viele Kainiten ihnen misstrauen. Die weiseren unter ihnen allerdings erkennen in den Malkavianern wertvolle Berater, da diese mit einer seherischen Gabe gesegnet sind.'
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
            bodytext: 'Die Gangrel streifen durch die Wildnis genauso wie durch den Großstadtdschungel, und kein anderer Vampirclan kann es mit ihrer Fähigkeit aufnehmen, in jeder Umgebung zu überleben und zu gedeihen. Sie sind oft sehr territorial und verfügen über Fähigkeiten der Gestaltveränderung. Gangrels neigen dazu, sich weniger um Äußerlichkeiten und Status zu kümmern als um Taten und Leistungen.'
        },
        {
            id: 1,
            bg: require('../assets/images/clans/toreador/toreador_nur_hg.jpg'),
            image: 'toreador/toreador.png',
            symbol: 'toreador/toreador_symbol.svg',
            headline: 'Toreador',
            closed: false,
            open: false,
            delay: 2000,
            bodytext: 'Die Toreador sind für ihr verführerisches Wesen, ihr fesselndes Auftreten und ihre eloquente Anmut bis hin zur Besessenheit bekannt. Sie nehmen Künstler und Liebhaber in ihre Reihen auf und versuchen immer wieder, ihre eigenen abgestumpften Herzen zu rühren. Mit ihrer übernatürlichen Anmut und ihrem Charme sind die Diven immer auf der Suche nach dem nächsten Nervenkitzel und hinterlassen ein Sammelsurium von ausrangierten Liebhabern und Opfern.'
        },
        {
            id: 1,
            bg: require('../assets/images/clans/ventrue/ventrue_nur_hg.png'),
            image: 'ventrue/ventrue.png',
            symbol: 'ventrue/ventrue_symbol.svg',
            headline: 'Ventrue',
            closed: false,
            open: false,
            delay: 2000,
            bodytext: 'Nur wenige Vampire sind so erhaben und aristokratisch wie die Ventrue, die sich selbst für die wahren Erben der Welt halten und für die einzigen Wesen, die würdig sind, sie zu kontrollieren und zu beeinflussen. Ventrue bekleiden fast immer Machtpositionen - Politiker, Richter, Aristokraten, einflussreiche Geschäftsleute. Ihre Machtgier ermutigt sie dazu immer mehr auf Kosten anderer zu erreichen. Für sie zählt nur eines: Macht und diejenigen, die sie ausüben.'
        },
        {
            id: 1,
            bg: require('../assets/images/clans/nosferatu/nosferatu_nur_hg.png'),
            image: 'nosferatu/nosferatu.png',
            symbol: 'nosferatu/nosferatu_symbol.svg',
            headline: 'Nosferatu',
            closed: false,
            open: false,
            delay: 2000,
            bodytext: 'Die Clansschwäche der Nosferatu ist diejenige, die am besten sichtbar ist – der Fluch Kains deformiert ihren Körper, macht sie unansehnlich, zwingt sie, eine Existenz im Schatten zu führen, verborgen vor den Menschen – denn schon ihr Anblick bricht die Maskerade. Sie sind bekannt dafür, ruhig und rational zu sein und Informationen und Geheimnisse zu hüten und zu verkaufen.'
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
