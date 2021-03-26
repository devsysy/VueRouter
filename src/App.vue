<template>
  <div id="app">
    <p>Hello Router</p>
    <router-link to="/foo">go to foo!</router-link>
    <router-link to="/bar">go to bar!</router-link>
    <router-view />
  </div>
</template>
<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
}
</style>
