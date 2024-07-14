<template>
    <div class="publication">
        <!-- Tabs navs -->
        <ul class="nav nav-tabs nav-justified mb-3" id="ex1" role="tablist">
        <li class="nav-item" role="presentation">
            <a
            data-mdb-tab-init
            class="nav-link active"
            id="ex3-tab-1"
            href="#ex3-tabs-1"
            role="tab"
            aria-controls="ex3-tabs-1"
            aria-selected="true"
            >Paper</a
            >
        </li>
        <li class="nav-item" role="presentation">
            <a
            data-mdb-tab-init
            class="nav-link"
            id="ex3-tab-2"
            href="#ex3-tabs-2"
            role="tab"
            aria-controls="ex3-tabs-2"
            aria-selected="false"
            >Conference</a
            >
        </li>
        <li class="nav-item" role="presentation">
            <a
            data-mdb-tab-init
            class="nav-link"
            id="ex3-tab-3"
            href="#ex3-tabs-3"
            role="tab"
            aria-controls="ex3-tabs-3"
            aria-selected="false"
            >Activation</a
            >
        </li>
        </ul>
        <!-- Tabs navs -->

        <!-- Tabs content -->
        <div class="tab-content" id="ex2-content">
            <!-- Paper Start -->
            <div
                class="tab-pane fade show active"
                id="ex3-tabs-1"
                role="tabpanel"
                aria-labelledby="ex3-tab-1"
            >
                <div class="paper-title">
                    <p class="h3">Paper</p>
                </div>
                <div class="paper-content">
                    <table class="table table-hover align-middle mb-0 bg-white">
                        <thead class="table-dark">
                            <tr>
                                <th>No.</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Year</th>
                                <th>Jounal</th>
                                <th>Cite</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(p, p_idx) in paper.list" :key="p.name">
                                <td>
                                    <div class="d-flex align-item-center">
                                        {{ paper.list.length-p_idx }}
                                    </div>
                                </td>
                                <td>
                                    <div class="fw-bold">
                                        {{ p.name }}
                                    </div>
                                </td>
                                <td>
                                    <div class="">
                                        {{ p.author }}
                                    </div>
                                </td>
                                <td>
                                    <div class="">
                                        {{ p.year }}
                                    </div>
                                </td>
                                <td>
                                    <div v-for="j in p.jounal.split(',')" :key="j">
                                        <div v-if="j==='KCI'">
                                            <span class="badge badge-secondary rounded-pill d-inline">{{ j }}</span>
                                        </div>
                                        <div v-else-if="j==='SCI'">
                                            <span class="badge badge-warning rounded-pill d-inline">{{ j }}</span>
                                        </div>
                                        <div v-else>
                                            <span class="badge badge-primary rounded-pill d-inline">{{ j }}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <button type="button" class="btn btn-link btn-rounded btn-small fw-bold" data-mdb-ripple-color="dark" @click="onNewPage(p.cite)">
                                            <i class="fas fa-up-right-from-square"></i> Go to See
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- Paper End -->
            <!-- Conference Start -->
            <div
                class="tab-pane fade"
                id="ex3-tabs-2"
                role="tabpanel"
                aria-labelledby="ex3-tab-2"
            >
                <div class="conference-title">
                    <p class="h3">Conference</p>
                </div>
                <div class="conference-content">
                    <table class="table table-hover align-middle mb-0 bg-white">
                        <thead class="table-dark">
                            <tr>
                                <th>No.</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Year</th>
                                <th>Jounal</th>
                                <th>Cite</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(c, c_idx) in conference.list" :key="c.name">
                                <td>
                                    <div class="d-flex align-item-center">
                                        {{ conference.list.length-c_idx }}
                                    </div>
                                </td>
                                <td>
                                    <div class="fw-bold">
                                        {{ c.name }}
                                    </div>
                                </td>
                                <td>
                                    <div class="">
                                        {{ c.author }}
                                    </div>
                                </td>
                                <td>
                                    <div class="">
                                        {{ c.year }}
                                    </div>
                                </td>
                                <td>
                                    <div v-for="j2 in c.jounal.split(',')" :key="j2">
                                        <div v-if="j2==='KCI'">
                                            <span class="badge badge-secondary rounded-pill d-inline">{{ j2 }}</span>
                                        </div>
                                        <div v-else-if="j2==='SCI'">
                                            <span class="badge badge-warning rounded-pill d-inline">{{ j2 }}</span>
                                        </div>
                                        <div v-else>
                                            <span class="badge badge-primary rounded-pill d-inline">{{ j2 }}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <button type="button" class="btn btn-link btn-rounded btn-small fw-bold" data-mdb-ripple-color="dark" @click="onNewPage(c.cite)">
                                            <i class="fas fa-up-right-from-square"></i> Go to See
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- Conference End -->
            <!-- Activation Start -->
            <div
                class="tab-pane fade"
                id="ex3-tabs-3"
                role="tabpanel"
                aria-labelledby="ex3-tab-3"
            >
                <div class="conference-title">
                    <p class="h3">Activation</p>
                </div>
            </div>
            <!-- Activation End -->
        </div>
        <!-- Tabs content -->
    </div>
</template>

<script>
import { Tab, Popover, initMDB} from 'mdb-ui-kit'
import publications from '../assets/publication.json'

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
        initMDB({ Tab, Popover })
        this.getPublicationData()
    },
    methods: {
        getPublicationData() {
            this.paper = []
            this.conference = []
            this.activation = []

            this.paper = publications[0]
            this.sconference = publications[1]
            this.activation = publications[2]
        },
        onNewPage: function(link) {
            window.open(link, "_blink")
        }
    }
}
</script>

<style scoped>
    @import url('../assets/css/publication.css');
</style>