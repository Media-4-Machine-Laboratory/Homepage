<template>
    <div class="memberview"></div>
</template>

<script>

export default {
    name: 'MemberView',
    mounted() {
        console.log(this.$route.query)
    }
}
</script>