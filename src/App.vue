<template>
  <div id="app">
    <Layout>
      <router-view/>
    </Layout>
  </div>
</template>

<script>
  import Layout from "@/layouts";
  export default {
    name: 'App',
    components: {
      Layout
		}
  }
</script>

<style lang="scss">
  @import "./style/reset.scss";
  @import "./style/common.scss";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
