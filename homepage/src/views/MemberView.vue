<template>
    <div class="member">
        <div class="container">
            <div class="row">
                <div class="member-sidebar col-lg-3">
                    <div class="member-profile-box align-items-center">
                        <img class="member-profile" :src="member.image_url" />
                        <div class="member-name">
                            <p class="h3">{{ member.last_name }} {{ member.first_name }}</p>
                        </div>
                    </div>
                    <hr/>
                    <div class="member-email">
                        <p class="h6"><i class="far fa-envelope"></i> {{ member.email }}</p>
                    </div>
                    <div class="member-cv">
                        <p class="h6"><a href="#">CV / Resume</a></p>
                    </div>
                    <hr/>
                    <div class="member-social-box">
                        <p class="h5">Social</p>
                        <!--<div v-for="s in member.social" :key="s.name">
                            {{ s }}
                            <div v-if="s.link !== 'none'">
                                here
                                <p class="h6 text-uppercase"><a :href="`{s.link}`" style="color:black"><i class="fab" :class="fa-$s.name"></i>{{ s.name }}</a></p>
                            </div>
                        </div>-->
                    </div>
                </div>
                <div class="v-line3 col-lg-2"></div>
                <div class="member-main col-lg-7"></div>
            </div>
        </div>
    </div>
</template>

<script>

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
                name: _interest.item[i1].name,
                link: _interest.item[i1].link
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
                link: _project.item[i4].link
            }
            project.push(project_)
        }

        var educational_background = []
        for (var i5 in _educational_background.item) {
            var educational_background_ = {
                name: _educational_background.item[i5].name,
                link: _educational_background.item[i5].link
            }
            educational_background.push(educational_background_)
        }

        var career = []
        for (var i6 in _career.item) {
            var career_ = {
                name: _career.item[i6].name,
                link: _career.item[i6].link
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
            cv_url: this.$route.query.cv_url,
            interest: interest,
            social: social,
            project: project,
            description: description,
            educational_background: educational_background,
            career: career
        }

        this.member = member_
        console.log(this.member)
    }
}
</script>

<style scoped>
@import url("../assets/css/member.css");
</style>