<template>
    <div class="member">
        <div class="container">
            <div class="row">
                <div class="member-sidebar col-lg-4">
                    <div class="member-profile">
                        <img :src="member.image_url" />
                    </div>
                </div>
                <div class="member-main col-lg-8"></div>
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