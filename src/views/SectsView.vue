<template>
<div class="container--main">
    <a-row type="flex" justify="center" class="container--bg-gradient">
        <a-col :span="24">
            <BgVideo :video="require('../assets/videos/bg_animation.mp4')"></BgVideo>
            <a-row type="flex" justify="center" class="vh-100s" style="min-height: 70vh">
                <a-col :span="24">
                    <AnimatedScroll animationScroll="hidden--fade" :threshold="1">
                        <PageIntroduction :headline="headline" :bodytext="bodytext"></PageIntroduction>
                    </AnimatedScroll>
                </a-col>
            </a-row>
        </a-col>
        <a-col :span="24">
            <AnimatedScroll animationScroll="hidden--fade" :threshold="0.5">
                <tempObject type="delay" animation="fade-in-out" :delay="2000">
                    <ImageTeaserAbsolute :teasers="teasers" :span="colSpan" />
                </tempObject>
            </AnimatedScroll>
        </a-col>
    </a-row>
</div>
</template>

<script>
import PageIntroduction from '@/components/PageIntroduction.vue';
import tempObject from '@/components/tempObject.vue';
import ImageTeaserAbsolute from '@/components/ImageTeaserAbsolute.vue';
import AnimatedScroll from "@/components/AnimatedScroll.vue";
//import ImageComponent from "@/components/ImageComponent.vue";
import BgVideo from '@/components/BgVideo.vue';


export default {
name: 'SectsView',
components: {
    ImageTeaserAbsolute,
    tempObject,
    AnimatedScroll,
    BgVideo,
    PageIntroduction
},
data() {
return {
    headline: "Sekten",
    bodytext: "Eine Sekte ist eine soziale Organisation von Vampiren, die in der Regel aus mehreren Clans besteht, die eine Liga oder einen Bund bilden. Jede Sekte hat ein Dogma und ein Ziel, das ihre Mitglieder zu erreichen versuchen. Einige werden von ihrem Erschaffer bei ihrer Aufnahme in eine Sekte aufgenommen; andere wählen eine Gruppe, wenn sie umziehen oder entlassen werden. Selbst die unsozialsten Vampire finden irgendwann einen Grund, sich einem Kollektiv anzuschließen, und sei es nur, um ihre eigenen Interessen zu schützen. Die wichtigsten Sekten der modernen Nächte sind die Camarilla und der Sabbat, während die Anarchen eine weniger bedeutende Sekte bilden. Zusätzlich zu diesen Abteilungen gibt es einige bekannte sektenlose Abteilungen. Die bekanntesten sind die unabhängigen Clans.",
    teasers: [
        {
            id: 0,
            image: require('../assets/images/sects/camarilla_hg.jpg'),
            symbol: 'symbol_camarilla.webp',
            headline: 'Camarilla',
            span: 6,
            closed: false,
            open: false,
            delay: 2000,
            bodytext: 'Die Camarilla ist die am besten organisierte Vampirsekte, ein elitärer Club, der Traditionen und die Kontrolle der sterblichen Bevölkerung hinter den Kulissen bevorzugt. In ihren Domänen setzen sie sechs große Traditionen durch, darunter vor allem die Maskerade. Alle Clans haben eine individuelle Präsenz im Elfenbeinturm, obwohl eine ausgewählte Gruppe von Säulenclans den Kern der Mitgliedschaft ausmacht. Einst hieß die Camarilla alle Kindreds willkommen, die ihre Gesetze befolgten, aber die jüngsten Ereignisse haben die Führung veranlasst, exklusivere Mitgliedschaftsregeln zu erlassen. Anarchen, Caitiff und dünnblütige Vampire sind in der Sekte nicht zugelassen.'
        },
        {
            id: 1,
            image: require('../assets/images/sects/anarchen_hg.jpg'),
            symbol: 'symbol_anarchen.webp',
            headline: 'Anarchen',
            span: 6,
            closed: false,
            open: false,
            delay: 3000,
            bodytext: 'Die Anarchen ärgern sich besonders über den privilegierten Status, den die Ältesten in der Camarilla und anderen Vampirsekten innehaben; wenn die Ältesten in einer Gesellschaft von Unsterblichen die meiste Macht haben, ist das Los der Neugeborenen nicht gerade glücklich. Die meisten Anarchen respektieren die Maskerade und einige der anderen Traditionen, auch wenn sie die Vampire, die sie durchsetzen, oder das System, das von ihnen profitiert, nicht respektieren. Die Anarchen werden von den Mitgliedern der Camarilla  nicht als eigene Fraktion betrachtet, aber im Gegensatz zum Sabbat werden sie toleriert.'

        },
        {
            id: 2,
            image: require('../assets/images/sects/sabbat_hg.jpg'),
            symbol: 'symbol_sabbat.webp',
            headline: 'Sabbat',
            span: 6,
            closed: false,
            open: false,
            delay: 4000,
            bodytext: 'Der Sabbat stellt einen von zwei großen Machtblöcken der kainitischen Gesellschaft der Neuzeit dar. Offziell gehören nur zwei Clans dieser teuflischen Sekte an, da sie sich von aller Menschlichkeit abgewandt haben und die anderen Clans diesen höllischen Pfad, der sie früher oder später immer in die ewige Verdammnis führt, meist scheuen. Dennoch gibt es erstaunlich viele Mitglieder anderer Clans, die den Weg dieser Sekte wählen. Diese Kainiten sind als Antitribu bekannte Anticlans. Der Sabbat agiert stets offen, gewalttätig und aggressiv, denn seine Mitglieder leben das Tier, das in ihnen schlummert vollkommen aus. Der Sabbat hat sich demnach fast vollständig vom Pfad der Menschlichkeit abgewandt und folgt oftmals anderen Leitbildern, die um ein vielfaches monströser sind. Der ewige Feind des Sabbat ist die Camarilla.'
        },
        {
            id: 3,
            image: require('../assets/images/sects/unabhaenige_hg.jpg'),
            symbol: 'symbol_independent.webp',
            headline: 'Unabhängige',
            span: 6,
            closed: false,
            open: false,
            delay: 5000,
            bodytext: 'Unabhängige Clans sind große vampirische Clans, die keiner der kainitischen Sekten angehören. Die Gründe für die Unabhängigkeit der einzelnen Clans sind unterschiedlich: das Streben nach Autonomie, fehlendes Interesse oder sogar Verachtung gegenüber den Sekten. Trotz ihrer Unabhängigkeit sind die meisten dieser Clans bereit, mit den Sekten zusammenzuarbeiten, zumindest innerhalb ihrer Territorien, sofern dies sinnvoll ist. '
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
