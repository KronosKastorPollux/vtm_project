<template>
    <a-row type="flex" justify="start">
        <a-col :span="24">
            <Transition name="slide-left">
            <a-row v-if="itemDetails" @click="toggleDetails">
                <a-col :span="24" style="background-color: red; height: 100vh">

                </a-col>
            </a-row>
            </Transition>
            <Transition name="slide-right">
            <a-row v-if="itemCatalog" type="flex" justif="start" :class="[handleHeightClass]">
                <a-col :xs="{ span: 24 }" :lg="{ span: 6 }" :xl="{ span: 6 }" id="sidebar" class="sidebar">
                    <a-row>
                        <a-col :span="24">
                            <a-row type="flex" justify="end">
                                <a-col :span="5" class="margin----bottom">
                                    <ButtonComponent content="X" @click="filterSidebar = !filterSidebar"/>
                                </a-col>
                            </a-row>
                        </a-col>
                    </a-row>
                    <a-row v-if="filterSidebar" type="flex" justify="center">
                        <a-col :span="24" class="margin---bottom">
                            <p class="headline--sub">Filter</p>
                        </a-col>
                        <a-col :span="22" class="margin--bottom">
                            <a-row type="flex" justify="center">
                                <a-col :span="18" class="margin-bottom">
                                    <p class="headline--small headline--align-start headline--no-border">Kategorien</p>
                                </a-col>
                            </a-row>
                            <a-row type="flex" justify="center">
                                <a-col :span="18">
                                    <a-row type="flex" justify="space-between" class="filter-checkbox" align="middle">
                                        <a-col :span="3">
                                            <input type="checkbox" id="mental" name="geistig" v-model="mental" @change="filterDisciplines">
                                        </a-col>
                                        <a-col :span="21" class="label">
                                            <label class="text--primary">geistig</label><br>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :span="18">
                                    <a-row type="flex" justify="space-between" class="filter-checkbox" align="middle">
                                        <a-col :span="3">
                                            <input type="checkbox" id="physical" name="körperlich" v-model="physical" @change="filterDisciplines">
                                        </a-col>
                                        <a-col :span="21" class="label">
                                            <label class="text--primary">körperlich</label><br>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :span="18">
                                    <a-row type="flex" justify="space-between" class="filter-checkbox" align="middle">
                                        <a-col :span="3">
                                            <input type="checkbox" id="mystical" name="mystisch" v-model="mystical" @change="filterDisciplines">
                                        </a-col>
                                        <a-col :span="21" class="label">
                                            <label class="text--primary">mystisch</label><br>
                                        </a-col>
                                    </a-row>
                                </a-col>
                            </a-row>
                        </a-col>
                        <a-col :span="22" class="margin--bottom">
                            <a-row type="flex" justify="center">
                                <a-col :span="18" class="margin-bottom">
                                    <p class="headline--small headline--align-start headline--no-border">Maskerade</p>
                                </a-col>
                            </a-row>
                            <a-row type="flex" justify="center">
                                <a-col :span="18">
                                    <a-row type="flex" justify="space-between" class="filter-checkbox" align="middle">
                                        <a-col :span="3">
                                            <input type="checkbox" id="danger" name="bedrohlich" v-model="danger" @change="filterDisciplines">
                                        </a-col>
                                        <a-col :span="21" class="label">
                                            <label class="text--primary">bedrohlich</label><br>
                                        </a-col>
                                    </a-row>
                                </a-col>
                                <a-col :span="18">
                                    <a-row type="flex" justify="space-between" class="filter-checkbox" align="middle">
                                        <a-col :span="3">
                                            <input type="checkbox" id="no-danger" name="unbedenklich" v-model="noDanger" @change="filterDisciplines">
                                        </a-col>
                                        <a-col :span="21" class="label">
                                            <label class="text--primary">unbedenklich</label><br>
                                        </a-col>
                                    </a-row>
                                </a-col>
                            </a-row>
                        </a-col>
                        <a-col :span="22" class="margin--bottom">
                            <a-row type="flex" justify="center">
                                <a-col :span="18" class="margin--bottom">
                                    <p class="headline--small headline--align-start headline--no-border">Clan</p>
                                </a-col>
                            </a-row>
                            <a-row type="flex" justify="center">
                                <a-col :span="18">
                                    <a-row type="flex" justify="space-between" class="filter-checkbox" align="middle">
                                        <a-col :span="24" class="filter-select">
                                            <select v-model="clan" name="clan" id="clan" @change="filterDisciplines">
                                                <option disabled value="">Wähle einen Clan</option>
                                                <option>Alle</option>
                                                <option>Tremere</option>
                                                <option>Toreador</option>
                                                <option>Ventrue</option>
                                                <option>Malkavianer</option>
                                                <option>Brujah</option>
                                                <option>Gangrel</option>
                                                <option>Nosferatu</option>
                                                <option>Lasombra</option>
                                            </select>
                                        </a-col>
                                    </a-row>
                                </a-col>
                            </a-row>
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :xs="{ span: 24 }" :lg="{ span: 18 }" :xl="{ span: 18 }" style="padding: 5%">
                    <a-row>
                        <a-col :xs="{ span: 12 }" :lg="{ span: 8 }" :xl="{ span: 8 }" :xxl="{ span: 6 }" v-for="(item, id) in filteredItems" :key="id">
                            <a-row>
                                <a-col :span="24" class="filter-item margin---bottom" @click="toggleDetails">
                                    <a-row type="flex" justify="center">
                                        <a-col :span="20">
                                            <ImageComponent class="image--disciplines" imageWidth="50%" imageHeight="auto" :src="require('../assets/images/' + item.image + '')"/>
                                        </a-col>
                                    </a-row>
                                    <a-row type="flex" justify="center">
                                        <a-col :span="22">
                                            <p class="headline--catalog-item">{{item.headline}}</p>
                                        </a-col>
                                    </a-row>
                                </a-col>
                            </a-row>
                        </a-col>
                    </a-row>
                </a-col>
            </a-row>
            </Transition>
        </a-col>
    </a-row>
</template>

<script>
import ImageComponent from "@/components/ImageComponent.vue";
import ButtonComponent from "./ButtonComponent.vue";

export default {
    name: 'ItemCatalog',
    components: {
        ImageComponent,
        ButtonComponent
    },
    data() {
        return{
            handleHeightClass: 'vh-100',
            filterSidebar: true,
            mental: true,
            physical: true,
            mystical: true,
            danger: true,
            noDanger: true,
            clan: 'Alle',
            currentFilter: [
                'mental',
                'physical'
            ],
            filteredItems: this.items,
            filterMental: [],
            filterPhysical: [],
            filterMystical: [],
            filterDanger: [],
            filterNoDanger: [],
            filterClan: '',
            filterNew: [],
            itemDetails: false,
            itemCatalog: true,
        }
    },
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    mounted() {
        this.handleResize()
        window.addEventListener('resize', this.handleResize)
    },
    unmounted() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize() {
            this.handleHeightClass = window.matchMedia('(max-width: 768px)').matches
            ? '' : 'vh-100'
        },
        toggleDetailss() {
            if(this.itemCatalog) {
                this.itemDetails = true
                this.itemCatalog = false
                
            } else if(this.itemDetails) {
                this.itemDetails = false
                this.itemCatalog = true
            }
        },
        toggleDetails() {
            if(this.itemCatalog) {
                this.itemCatalog = false
                setTimeout(() => {
                    this.itemDetails = true
                }, 1000);
                
            } else if(this.itemDetails) {
                this.itemDetails = false
                setTimeout(() => {
                    this.itemCatalog = true
                }, 1000);
            }
        },
        filterCategories(filter, category) {
            console.log('Filter vorher: ' + this.currentFilter)
            if(filter === true) {
                this.currentFilter.push(category)
                //console.log(category + ' rein ' + this.currentFilter)
            } else {
                var index = this.currentFilter.indexOf(category);
                var deletedFilter = this.currentFilter.splice(index, 1);
            }
            console.log('Filter nacher: ' + this.currentFilter)
            this.currentFilter.forEach((element) => {
                console.log('element : ' + element)
                //this.filteredItems.filter(item => item.category.includes(element))
                //return this.filteredItems.includes(element)
                //var betterWords = this.filteredItems.filter(item => { return this.filteredItems.includes(element); })
                //console.log('gefiltert' + element + this.filteredItems.includes(element));
                //var betterWords = this.filteredItems.filter(item => { return this.filteredItems.forEach((itemX) => {
                    //itemX.category.includes(element); 
                //}
                //)})
                //console.log(betterWords)
                const newItems = this.filteredItems.filter((item) => console.log('ItemCategory: ' + item.category))
                const newItems2 = this.filteredItems.filter((item) => item.category.includes(element))
                console.log('newItems von ' + element + ':' + newItems2.length)
            } 
            )
            console.log('fertig')

        },
        filterDisciplines() {
            this.filteredItems = this.items
            this.filterMental = []
            this.filterPhysical = []
            this.filterMystical = []
            this.filterDanger = []
            this.filterNoDanger = []
            if(this.mental) {
               this.filterMental = this.items.filter((item) => item.category === 'mental')
               console.log('filter mental')
            }
            if(this.physical) {
                this.filterPhysical = this.items.filter((item) => item.category === 'physical')
               console.log('filter physical')
            }
            if(this.mystical) {
                this.filterMystical= this.items.filter((item) => item.category === 'mystical')
               console.log('filter mystical')
            }
            this.filteredItems = [...this.filterMental, ...this.filterPhysical, ...this.filterMystical]
            console.log('gefilterte Items: ' + this.filteredItems.length)

            if(this.danger) {
                this.filterDanger = this.filteredItems.filter(item => item.masquerade)
            }
            if(this.noDanger) {
                this.filterNoDanger = this.filteredItems.filter(item => !item.masquerade)
            }
            this.filteredItems = [...this.filterDanger, ...this.filterNoDanger]

            if(this.clan !== 'Alle') {
                this.filteredItems = this.filteredItems.filter(item => item.clan.includes(this.clan))
                console.log('Clanfilter ein')
            }

            console.log('ausgewählter Clan: ' + this.clan)

        }
    },
    computed: {
        filterCategory() {
            if(this.mental) {
                var filterMental = this.items.filter(item => item.category === 'mental')
            }
            if(!this.mental) {
                var filterMental = this.items.filter(item => item.category !== 'mental')
            }
            if(this.physical) {
                var filterPhysical = this.items.filter(item => item.category === 'physical')
            }
            if(!this.physical) {
                var filterPhysical = this.items.filter(item => item.category !== 'physical')
            }
            //this.items.push(...filter+filterPhysical)
            return this.items
        }
    }
}

</script>