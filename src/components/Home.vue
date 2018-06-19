<template>
  <div id="app">
      <app-detail></app-detail>
  </div>
</template>

<script>
import BoardList from './contents/BoardList'
export default {
  name: 'Home',
  components: {
    'app-detail': BoardList
  },
  data(){
    return {

    }
  }
}
</script>

<style>

</style>