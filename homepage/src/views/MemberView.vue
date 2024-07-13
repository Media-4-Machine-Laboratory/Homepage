<template>
    <div class="member">
        <div class="container">
            <div class="row">
                <!-- Sidebar Start -->
                <div class="member-sidebar col-lg-3">
                    <!-- Profile -->
                    <div class="member-profile-box align-items-center">
                        <img class="member-profile" :src="member.image_url" />
                        <div class="member-name">
                            <p class="h3">{{ member.last_name }} {{ member.first_name }}</p>
                        </div>
                    </div>
                    <hr/>
                    <!-- Email -->
                    <div class="member-email">
                        <p class="h6"><i class="far fa-envelope"></i> {{ member.email }}</p>
                    </div>
                    <br>
                    <!-- Interest -->
                    <div class="member-interest row">
                        <div class="col" v-for="i in member.interest" :key="i.name">
                            <span class="badge rounded-pill badge-success">{{ i.name }}</span>
                        </div>
                    </div>
                    <br>
                    <!-- CV -->
                    <div class="member-cv">
                        <p class="h6"><a @click="openPDF(member.cv_url.item)"><i class="fas fa-link"></i> CV / Resume</a></p>
                    </div>
                    <hr/>
                    <!-- Social -->
                    <div class="member-social-box">
                        <p class="h5">Social</p>
                        <div v-for="s in member.social" :key="s.name">
                            <div v-if="s.link !== 'none'">
                                <p class="h6 text-uppercase"><a @click="onClickRedirect(s.link)" style="color:black"><i class="fab" :class="{'fa-linkedin': s.name === 'linkedin', 'fa-github': s.name === 'github'}"></i> {{ s.name }}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Sidebar End -->
                <div class="v-line3 col-lg-2"></div>
                <!-- Main Start -->
                <div class="member-main col-lg-7">
                    <h2 style="text-align: left;">Projects</h2>
                    <details class="info" v-for="project in member.project" :key="project.name">
                        <summary>{{ project.name }}</summary>
                        <p>{{ project.description }}</p>
                    </details>
                </div>
                <!-- Main End -->
            </div>
        </div>
    </div>
</template>

<script>
import { Collapse, initMDB } from 'mdb-ui-kit';

export default {
    name: 'MemberView',
    data() {
        return {
            member: {}
        }
    },
    mounted() {
        var member_ = {}

        var _interest = JSON.parse(this.$route.query.interest)
        var _social = JSON.parse(this.$route.query.social)
        var _description = JSON.parse(this.$route.query.description)
        var _project = JSON.parse(this.$route.query.project)
        var _educational_background = JSON.parse(this.$route.query.educational_background)
        var _career = JSON.parse(this.$route.query.career)

        var interest = []
        for (var i1 in _interest.item) {
            var interest_ = {
                name: _interest.item[i1].name
            }
            interest.push(interest_)
        }

        var social = []
        for (var i2 in _social.item) {
            var social_ = {
                name: _social.item[i2].name,
                link: _social.item[i2].link
            }
            social.push(social_)
        }

        var description = []
        for (var i3 in _description.item) {
            var description_ = {
                name: _description.item[i3].name,
                link: _description.item[i3].link
            }
            description.push(description_)
        }

        var project = []
        for (var i4 in _project.item) {
            var project_ = {
                name: _project.item[i4].name,
                description: _project.item[i4].description
            }
            project.push(project_)
        }

        var educational_background = []
        for (var i5 in _educational_background.item) {
            var educational_background_ = {
                name: _educational_background.item[i5].name,
                start_year: _educational_background.item[i5].start_year,
                end_year: _educational_background.item[i5].end_year,
            }
            educational_background.push(educational_background_)
        }

        var career = []
        for (var i6 in _career.item) {
            var career_ = {
                name: _career.item[i6].name,
                desc: _career.item[i6].desc,
                start_year: _career.item[i6].start_year,
                end_year: _career.item[i6].end_year,
                color: _career.item[16].color
            }
            career.push(career_)
        }

        member_ = {
            name: this.$route.query.name,
            first_name: this.$route.query.first_name,
            last_name: this.$route.query.last_name,
            email: this.$route.query.email,
            position: this.$route.query.position,
            image_url: this.$route.query.image_url,
            cv_url: JSON.parse(this.$route.query.cv_url),
            interest: interest,
            social: social,
            project: project,
            description: description,
            educational_background: educational_background,
            career: career
        }

        this.member = member_
        initMDB({ Collapse })
    },
    methods: {
        onClickRedirect: function(link) {
            window.open(link, "_blank")
        },
        openPDF: function(url) {
            window.open(url.default, '_blank')
        }
    }
}
</script>

<style scoped>
@import url("../assets/css/member.css");
</style>