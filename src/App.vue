<template>
  <div id="app">
    <router-view/>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from './components/TabBar.vue';

export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
