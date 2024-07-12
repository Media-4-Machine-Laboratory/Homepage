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
                    <div class="member-cv">
                        <a href="#">CV / Resume</a>
                    </div>
                </div>
                <div class="v-line col-lg-2"></div>
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