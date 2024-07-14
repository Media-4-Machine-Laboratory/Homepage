<template>
    <div class="publication">
        <!-- Tabs navs Start -->
        <ul class="nav nav-tabs nav-justified mb-3" id="publication-nav" role="tablist">
            <li class="nav-item" role="presentation">
                <a
                data-mdb-tab-init
                class="nav-link active"
                id="paper-tab"
                href="#paper-tab"
                role="tab"
                aria-controls="paper-tab"
                aria-selected="true">
                    Paper
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a
                data-mdb-tab-init
                class="nav-link active"
                id="conference-tab"
                href="#conference-tab"
                role="tab"
                aria-controls="conference-tab"
                aria-selected="false">
                    Conference
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a
                data-mdb-tab-init
                class="nav-link active"
                id="activation-tab"
                href="#activation-tab"
                role="tab"
                aria-controls="activation-tab"
                aria-selected="false">
                    Activation
                </a>
            </li>
        </ul>
        <!-- Tabs navs End -->
        <!-- Tabs Content Start -->
        <div class="tab-content" id="publication-content">
            <div class="tab-pane fade show active" id="paper-tab" role="tabpanel" aria-labelledby="paper-tab">
            </div>
        </div>
    </div>
</template>

<script>
import publications from '../assets/publication.json'
import { Tab, initMDB} from 'mdb-ui-kit'

export default {
    name: "PublicationView",
    data() {
        return {
            paper: [],
            conference: [],
            activation: []
        }
    },
    mounted() {
        this.getPublicationData()
        initMDB({ Tab })
    },
    methods: {
        getPublicationData() {
            this.paper = []
            this.conference = []
            this.activation = []

            var paper = publications[0]
            var conference = publications[1]
            var activation = publications[2]
            console.log(paper)
            console.log(conference)
            console.log(activation)
        }
    }
}
</script>

<style scoped>
    @import url('../assets/css/publication.css');
</style>