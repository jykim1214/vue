<template>
  <div id="app">
      <app-header></app-header>
      <app-detail></app-detail>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Login from './contents/Login'
export default {
  name: 'Home',
  components: {
    'app-detail': Login
  },
  data(){
    return {

    }
  }
}
</script>

<style>

</style>