<template>
  <div id="app">
    <m-header></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/mHeader/mHeader'
export default {
  name: 'App',
  components: {
    MHeader
  }
}
</script>

<style lang="scss">
#app{
  width: 1200px;
  margin: 0 auto;
}
</style>
