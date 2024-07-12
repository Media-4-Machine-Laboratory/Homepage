<template>
    <div class="member">
        <div class="container">
            {{ member.name }}
        </div>
    </div>
</template>

<script>

export default {
    name: 'MemberView',
    props: {
        member: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    mounted() {
        console.log(this.member)
    }
}
</script>

<style scoped>
@import url("../assets/css/member.css");
</style>