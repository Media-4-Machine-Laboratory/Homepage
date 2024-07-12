<template>
    <div class="members">
        <!-- Tabs navs -->
        <div class="members-bg"></div>
        <div class="members-tabs">
            <ul class="nav nav-tabs nav-justified mb-3" id="members1" role="tablist">
                <li class="nav-item" role="presentation">
                    <a data-mdb-tab-init class="nav-link active" id="members1-tab1" href="#members1-tabs1" role="tab" aria-controls="members1-tabs1" aria-selected="true" style="color: black; font-weight: bold; font-size: 18px;">Professor</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a data-mdb-tab-init class="nav-link" id="members1-tab2" href="#members1-tabs2" role="tab" aria-controls="members1-tabs2" aria-selected="false" style="color: black; font-weight: bold; font-size: 18px;">Graduate</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a data-mdb-tab-init class="nav-link" id="members1-tab3" href="#members1-tabs3" role="tab" aria-controls="members1-tabs3" aria-selected="false" style="color: black; font-weight: bold; font-size: 18px;">Undergraduate</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a data-mdb-tab-init class="nav-link" id="members1-tab4" href="#members1-tabs4" role="tab" aria-controls="members1-tabs4" aria-selected="false" style="color: black; font-weight: bold; font-size: 18px;    ">Alumni</a>
                </li>
            </ul>
        </div>

        <!-- Tabs content -->
        <div class="tab-content" id="members1-content">
            <br>
            <!-- Tabs Professor -->
            <div class="tab-pane fade show active" id="members1-tabs1" role="tabpanel" aria-labelledby="members1-tab1">
                <div class="members-container container-fuild">
                    <div class="members-title">
                        <h2 class="member-title">Professor</h2>
                    </div>
                    <hr/>
                    <div v-for="item in members_professor" :key="item.name">
                        <div v-if="item.position==='professor'">
                            <!-- Main Info Start -->
                            <div class="main-info row d-flex justify-content-center">
                                <!-- Image -->
                                <div class="col-4 col-lg-4">
                                    <div>
                                        <img :src="item.image_url" class="img-fluid shadow-2-strong" style="margin-left: 10%; width: 100%;" />
                                    </div>
                                </div>
                                <!-- Information Start -->
                                <div class="col-8 col-lg-8">
                                    <br>
                                    <p class="member-name h2 text-uppercase fw-bold">{{ item.last_name }} {{ item.first_name }}</p>
                                    <br>
                                    <div class="member-info">
                                        <div class="office row">
                                            <p class="office h5 col-3">
                                                    <i class="fas fa-house"></i> <span>Office</span>
                                            </p>
                                            <p class="office h5 col-9">
                                                <i class="fas fa-circle-chevron-right"></i> <span style="color: gray; font-size: 14px; align-items: center;">630, Enginnering 5th building(S06), Dong-A University</span>
                                            </p>
                                        </div>
                                        <br>
                                        <div class="email row">
                                            <p class="email h5 col-3">
                                                <i class="far fa-envelope"></i>&nbsp; <span>Email</span>
                                            </p>
                                            <p class="email h5 col-9">
                                                <i class="fas fa-circle-chevron-right"></i> <span style="color: gray; font-size: 14px; align-items: center;">{{ item.email }}</span>
                                            </p>
                                        </div>
                                        <br>
                                        <div class="email row">
                                            <p class="email h5 col-3">
                                                <i class="fas fa-briefcase"></i>&nbsp; <span>Position</span>
                                            </p>
                                            <p class="email h5 col-9">
                                                <i class="fas fa-circle-chevron-right"></i> <span style="color: gray; font-size: 14px; align-items: center;">Associate Professor</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <!-- Information End -->
                                <hr/>
                            </div>
                            <!-- Main Info End -->
                            <!-- Education Background Start -->
                            <div class="education_background row d-flex justify-content-center">
                                <div class="col-4">
                                    <p class="h2">Education</p>
                                </div>
                                <div class="col-2 v-line"></div>
                                <div class="col-6">
                                    <ul class="list-group list-group-light" v-for="i in item.educational_background" :key="i.name">
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <div class="fw-bold">{{ i.name }}</div>
                                                <div class="text-muted">{{ i.start_year }} - {{ i.end_year }}</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Education Background End -->
                            <!-- Career Start -->
                            <hr/>
                            <br>
                            <div class="career row d-flex justify-content-center">
                                <div class="col-4">
                                    <p class="h2">Career</p>
                                </div>
                                <div class="col-1 v-line"></div>
                                <div class="col-7">
                                    <ul class="timeline" v-for="i in item.career" :key="i.name">
                                        <li :style="{'--accent-color': i.color}">
                                            <div class="date">{{ i.start_year }} - {{ i.end_year }}</div>
                                            <div class="title">{{ i.name }}</div>
                                            <div class="descr">{{ i.desc }}</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- Career End -->
                            <br>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Tabs Graduate -->
            <div class="tab-pane fade" id="members1-tabs2" role="tabpanel" aria-labelledby="members1-tab2">
                <div class="members-container container-fuild">
                    <div class="members-title">
                        <h2 class="member-title">Graduate School</h2>
                    </div>
                    <hr/>
                    <!-- Member Item Start -->
                    <div>
                        <div class="row">
                            <div class="col-6" v-for="item in members_graduate" :key="item.name">
                                <a @click="setRouterMember(item)">
                                    <div class="card">
                                        <div class="card-body d-flex justify-content-between">
                                            <div class="row">
                                                <!-- Member Image -->
                                                <div class="col-4">
                                                    <img :src="item.image_url" class="img-fluid shadow-2-strong" style="width: 100%;"/>
                                                </div>
                                                <!-- Member Information -->
                                                <div class="col-6">
                                                    <div>
                                                        <h3 class="fw-bold" style="color:#124559">Master Course</h3>
                                                    </div>
                                                    <hr/>
                                                    <div class="member-information-graduate-name">
                                                        <h3 class="fw-bold text-uppercase" style="color: #000000">{{ item.last_name }} {{ item.first_name }}</h3>
                                                        <p class="text-muted"><i class="far fa-envelope"></i> {{ item.email }}</p>
                                                    </div>
                                                </div>
                                                <div class="member-information-graduate-badge col-2">
                                                    <!-- Member's Project -->
                                                    <div v-for="i in item.interest" :key="i.name">
                                                        <span class="badge rounded-pill badge-success">{{ i.name }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- Member Item End -->
                </div>
            </div>
            <!-- Tabs Undergraduate -->
            <div class="tab-pane fade" id="members1-tabs3" role="tabpanel" aria-labelledby="members1-tab3">
                <div class="members-container container-fuild">
                    <div class="members-title">
                        <h2 class="member-title">Undergraduate</h2>
                    </div>
                    <hr/>
                    <!-- Member Item Start -->
                    <div>
                        <div class="row">
                            <div class="col-6" v-for="item in members_undergraduate" :key="item.name">
                                <a @click="setRouterMember(item)">
                                    <div class="card">
                                        <div class="card-body d-flex justify-content-between">
                                            <div class="row">
                                                <!-- Member Image -->
                                                <div class="col-4">
                                                    <img :src="item.image_url" class="img-fluid shadow-2-strong" style="width: 100%;"/>
                                                </div>
                                                <!-- Member Information -->
                                                <div class="col-6">
                                                    <div>
                                                        <h3 class="fw-bold" style="color:#124559">Undergraduate</h3>
                                                    </div>
                                                    <hr/>
                                                    <div class="member-information-graduate-name">
                                                        <h3 class="fw-bold text-uppercase" style="color: #000000">{{ item.last_name }} {{ item.first_name }}</h3>
                                                        <p class="text-muted"><i class="far fa-envelope"></i> {{ item.email }}</p>
                                                    </div>
                                                </div>
                                                <div class="member-information-graduate-badge col-2">
                                                    <!-- Member's Project -->
                                                    <div v-for="i in item.interest" :key="i.name">
                                                        <span class="badge rounded-pill badge-success">{{ i.name }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- Member Item End -->
                </div>
            </div>
            <!-- Tabs Alumni -->
            <div class="tab-pane fade" id="members1-tabs4" role="tabpanel" aria-labelledby="members1-tab4">
                <div class="members-container container-fuild">
                    <div class="members-title">
                        <h2 class="member-title">Alumni</h2>
                    </div>
                    <hr/>
                    <!-- Member Item Start -->
                    <div>
                        <div class="row">
                            <div class="col-6" v-for="item in members_alumni" :key="item.name">
                                <a @click="setRouterMember(item)">
                                    <div class="card">
                                        <div class="card-body d-flex justify-content-between">
                                            <div class="row">
                                                <!-- Member Image -->
                                                <div class="col-4">
                                                    <img :src="item.image_url" class="img-fluid shadow-2-strong" style="width: 100%;"/>
                                                </div>
                                                <!-- Member Information -->
                                                <div class="col-6">
                                                    <div>
                                                        <h3 class="fw-bold" style="color:#124559">Alumni</h3>
                                                    </div>
                                                    <hr/>
                                                    <div class="member-information-graduate-name">
                                                        <h3 class="fw-bold text-uppercase" style="color: #000000">{{ item.last_name }} {{ item.first_name }}</h3>
                                                        <p class="text-muted"><i class="far fa-envelope"></i> {{ item.email }}</p>
                                                    </div>
                                                </div>
                                                <div class="member-information-graduate-badge col-2">
                                                    <!-- Member's Project -->
                                                    <div v-for="i in item.interest" :key="i.name">
                                                        <span class="badge rounded-pill badge-success">{{ i.name }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- Member Item End -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Tab, initMDB } from 'mdb-ui-kit';
import member from '@/assets/members.json';

export default {
  name: 'MembersView',
  data() {
    return {
        members_professor: [],
        members_graduate: [],
        members_undergraduate: [],
        members_alumni: [],
        num_professor: 0,
        num_graduate: 0,
        num_undergraduate: 0,
        num_alumni: 0
    }
  },
  mounted() {
    initMDB({ Tab });
    this.getMembersData()
  },
  methods: {
    getMembersData() {
        this.members_professor = []
        this.members_graduate = []
        this.members_undergraduate = []
        this.members_alumni = []
        var members_professor = []
        var members_graduate = []
        var members_undergraduate = []
        var members_alumni = []
        for (var m in member) {
            var member_ = {
                name: member[m].name,
                first_name: member[m].first_name,
                last_name: member[m].last_name,
                email: member[m].email,
                position: member[m].positions,
                interest: member[m].interest,
                image_url: require(`../assets/member_picture/${member[m].image_url}`),
                cv_url: member[m].cv_url && require(`../assets/member_cv/${member[m].cv_url}`),
                description: member[m].description,
                project: member[m].project,
                educational_background: member[m].educational_background,
                career: member[m].career
            };

            if (member[m].positions == 'professor') {
                members_professor.push(member_)
                this.num_professor++
            }
            if (member[m].positions == 'graduate') {
                members_graduate.push(member_)
                this.num_graduate++
            }
            if (member[m].positions == 'undergraduate') {
                members_undergraduate.push(member_)
                this.num_undergraduate++
            }
            if (member[m].positions == 'alumni') {
                members_alumni.push(member_)
                this.num_alumni++
            }
        }
        this.members_professor = members_professor;
        this.members_graduate = members_graduate;
        this.members_undergraduate = members_undergraduate;
        this.members_alumni = members_alumni;
    },
    setRouterMember(item) {
        this.$router.push(
            {
                name: 'member',
                query: {
                    name: item.name,
                    first_name: item.first_name,
                    last_name: item.last_name,
                    email: item.email,
                    position: item.positions,
                    interest: item.interest,
                    image_url: item.image_url,
                    cv_url: item.cv_url,
                    description: item.description,
                    project: item.project,
                    educational_background: item.educational_background,
                    career: item.career
                }
            }
        );
    }
  }
}
</script>

<style scoped>
@import url("../assets/css/members.css");
</style>