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
    props: {
        member: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    mounted() {
        console.log(this.$route.params)
    }
}
</script>

<style scoped>
@import url("../assets/css/member.css");
</style>