<template>
    <div class="member">
        <div class="container">
            {{ member }}
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