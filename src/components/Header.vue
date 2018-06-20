<template>
  <div class="header">
    <div class="navbar-default navbar-static-top" style="background-color: rgb(153, 204, 255);">
      <div class="section">
        <div id="navbar-ex-collapse" class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-left">
            <li style="padding-left:100px;">
              <div class="navbar-brand"><a href="./#/" style="color:white;">HOME</a></div>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <div class="navbar-brand" style="color:white;" @click="logInfor(logInfo)">{{logInfo}}</div>
            </li>
            <li style="padding-right:100px;">
              <div class="navbar-brand" style="color:white;" v-if="logInfo==='Logout'" @click="userInfo()">회원정보</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="section">
      <div style="background-color: rgb(153, 204, 255); padding-top:10px; padding-bottom:30px;">
        <a href="./#/"><img src="../assets/header.png" style="width:800px; height:100px;"/></a>
      </div>
    </div>
  </div>
</template>

<script>
var storage = localStorage;
export default {
  name:'Header',
  data: function(){
    return {
      logInfo:"Logout"
    }
  },
  methods: {
    createmethod: function(){
      var id = storage.getItem('loginId');
      var pw = storage.getItem('loginPw');
      
      if(id!=null && pw!=null) {
        this.logInfo = "Logout";
      } else {
        this.logInfo = "Login";
      }
    },
    logInfor: function(logInfo) {
      this.logInfo="Login";
      var id = storage.getItem('loginId');
      var pw = storage.getItem('loginPw');
      
      if(id!=null && pw!=null){
        this.logInfo="Logout";
        storage.removeItem('loginId');
        storage.removeItem('loginPw');
        this.$router.push({name:'Home'});
      } else {
        this.logInfo="Login";
        this.$router.push({name:'Login'});
      }
    },
    userInfo: function(){
      var id = storage.getItem('loginId');
      var pw = storage.getItem('loginPw');

      if(id!=null && pw!=null){
        this.$router.push({name:'UserContent'});
      } else {
        this.logInfo="Login";
        this.$router.push({name:'Login'});
      }
    }
  }  
}
</script>

<style>

</style>

