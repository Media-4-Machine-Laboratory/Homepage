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
                        <div v-for="s in member.social" :key="s.name">
                            <div v-if="s.link !== 'none'">
                                here
                                <p class="h6 text-uppercase"><a :href="`{s.link}`" style="color:black"><i class="fab" :class="fa-$s.name"></i>{{ s.name }}</a></p>
                            </div>
                        </div>
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
        this.member = this.$route.query
    }
}
</script>

<style scoped>
@import url("../assets/css/member.css");
</style>