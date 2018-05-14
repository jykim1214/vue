<template>
  <div id="app">
      <app-detail></app-detail>
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