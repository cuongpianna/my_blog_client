<template>
  <div>
    <router-view/>
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
