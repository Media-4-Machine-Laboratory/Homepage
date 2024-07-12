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
                    <div>
                        <div v-for="item in members_" :key="item.name">
                            <!-- Main Info Start -->
                            <div class="main-info row d-flex justify-content-center">
                                <!-- Image -->
                                <div class="col-4 col-lg-4">
                                    <div v-if="item.postion='professor'">
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
                                    <div class="information" v-for="i in item.educational_background" :key="i.name">
                                        <p>{{ i.name }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Tabs Graduate -->
            <div class="tab-pane fade" id="members1-tabs2" role="tabpanel" aria-labelledby="members1-tab2">
                Tab2 Content
            </div>
            <!-- Tabs Undergraduate -->
            <div class="tab-pane fade" id="members1-tabs3" role="tabpanel" aria-labelledby="members1-tab3">
                Tab3 Content
            </div>
            <!-- Tabs Alumni -->
            <div class="tab-pane fade" id="members1-tabs4" role="tabpanel" aria-labelledby="members1-tab4">
                Tab4 Content
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
        members_: [],
    }
  },
  mounted() {
    initMDB({ Tab });
    this.getMembersData()
  },
  methods: {
    getMembersData() {
        var members_ = []
        member.forEach(function(m) {
            var _member = {
                name: m.name,
                first_name: m.first_name,
                last_name: m.last_name,
                email: m.email,
                image_url: require(`../assets/member_picture/${m.image_url}`),
                cv_url: m.cv_url && require(`../assets/member_cv/${m.cv_url}`),
                description: m.description,
                position: m.position,
                project: m.project,
                educational_background: m.educational_background,
                career: m.career
            };
            members_.push(_member)
        });
        console.log(members_)
        this.members_ = members_
    }
  }
}
</script>

<style scoped>
@import url("../assets/css/members.css");
</style>