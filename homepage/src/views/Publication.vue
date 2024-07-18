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
                <div class="activation-content">
                    <div class="container">
                        <a @click="topFunction()" class="back-to-top-button btn btn-floating text-white btn-lg" id="back-to-top-button" data-mdb-ripple-init style="background-color: #f44336;">Back to top</a>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="card Lab-desc">
                                    <div class="card-body">
                                        <div class="d-flex justify-content-center">
                                            <img src="../assets/main_assets/logo-small.png" style="width: 10vw; height: 14vh;"/>
                                        </div>
                                        <br>
                                        <div class="d-flex justify-content-center">
                                            <p class="title h3"><span class="fw-bold">M</span>edia-<span class="fw-bold">F</span>or-<span class="fw-bold">M</span>achine-<span class="fw-bold">L</span>aboratory</p>
                                        </div>
                                        <br>
                                        <div style="text-align: center;">
                                            <p style="font-weight: 800; font-family: 'Pretendard-Regular';">Welcome to our activation page! <br>Here, we share updates on our activities, including stories about the topics we study and research, our paper publications, and participation in conferences.<br>Dive in and explore the diverse range of our endeavors!</p>
                                        </div>
                                    </div>
                                </div>
                                <br><br>
                                <div class="card proj-desc">
                                    <div class="card-header">
                                        <p class="h3" style="font-family: 'Pretendard-Regular';">Our current activities...</p>
                                    </div>
                                    <div class="card-body">
                                        <div style="text-align: left;">
                                            <p class="h4 fw-bold" style="font-family: 'Pretendard-Regular';">Title</p>
                                            <p style="font-weight: 800; font-family: 'Pretendard-Regular';">description</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8" style="padding-left: 5%;">
                                <div class="content-1 row">
                                    <div class="col-md-4 thumbnail-box">
                                        <img src="../assets/main_assets/logo-small.png" />
                                    </div>
                                    <div class="col-md-8 content-box" style="padding-left: 5%;">
                                        <div class="content-title" style="text-align: left;">
                                            <p class="h1 fw-bold" style="font-family: 'Pretendard-Regular';">Title</p>
                                            <br>
                                            <p class="h5" style="font-weight: 800; font-family: 'Pretendard-Regular';">description</p>
                                        </div>
                                        <br>
                                        <div class="content-button" style="text-align: left;">
                                            <button type="button" class="btn btn-primary text-white" data-mdb-ripple-init>Keep Reading</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
        },
        topFunction: function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>

<style scoped>
    @import url('../assets/css/publication.css');
</style>