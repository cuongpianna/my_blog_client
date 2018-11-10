<template>
  <div>
    <router-view v-title="title"/>
  </div>
</template>

<script>
    import AppHeader from "../../components/app-header";
    export default {
        name: "MainLayout",
        components: {AppHeader}

    }
</script>
<style scoped>

</style>
