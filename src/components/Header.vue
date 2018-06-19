<template>
  <div class="header">
    <div class="navbar-default navbar-static-top" style="background-color: rgb(153, 204, 255);">
      <div class="section">
        <div id="navbar-ex-collapse" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-left">
            <li style="padding-left:100px;">
              <a href="./#/" style="color:white;">HOME</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li style="padding-right:100px;">
              <a href="./#/Login" style="color:white;">Log-in</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="section">
      <div style="background-color: rgb(153, 204, 255); padding-top:10px; padding-bottom:30px;">
        <img src="../assets/head.png" style="width:800px; height:100px;"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'header',
  data: function(){
    logInfo:"Log-in"
  },
  methods: function(){

  }
  
}
</script>

<style>
</style>

