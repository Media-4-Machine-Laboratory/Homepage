<template>
    <div class="member">
        <div class="container">
            {{ name }}
        </div>
    </div>
</template>

<script>

export default {
    name: 'MemberView',
    data() {
        return {
            member: []
        }
    },
    mounted() {
        console.log(this.$route.query)
    }
}
</script>

<style scoped>
@import url("../assets/css/member.css");
</style>