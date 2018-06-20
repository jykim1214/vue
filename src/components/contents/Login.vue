<template>
<div class="container">
    <form class="form" >
        <div class="col-md-12">
            <div class="row">
                <label style="font-size:20px; vertical-align:center;">로그인</label>
            </div>
            <form class="form-horizontal" role="form" v-on:submit.prevent="submit(loginData)">
                <div class="form-group">
                    <div class="col-sm-2">
                        <label for="inputEmail3" class="control-label">ID</label>
                    </div>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="id" placeholder="ID" v-model="loginData.id" required >
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-2">
                        <label for="inputPassword3" class="control-label">Password</label>
                    </div>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="pwd" placeholder="Password" v-model="loginData.password" required >
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12" style="text-align:center">
                        <button type="submit" class="btn btn-default" @click="checkLoginData(loginData, userData);">로그인</button>
                        <button type="submit" class="btn btn-default"><a href="./#/join">회원가입</a></button>
                    </div>
                </div>
            </form>
        </div>
    </form>
</div>
</template>

<script>
var storage = localStorage;
export default {
    name: 'Join',
    data(){
        return {
            loginresult: "error",
            userData:this.getUserList(),
            loginData:[]
        }
    },
    methods:{
        getUserList: function(userData){
            this.$http.get('http://localhost:8081/users/', {'Access-Control-Allow-Origin': '*'})
            .then(response => {
                this.userData=response.data;
            }, error=>{
                console.log(error);
            });
        },
        submit: function(loginData) {
            if(this.loginresult=="success"){
                storage.setItem('loginId', this.loginData.id);
                storage.setItem('loginPw', this.loginData.password);
                this.$router.push({name:'Home'});    
            } else {
                alert('아이디와 비밀번호가 일치하지 않습니다.');
            }
        },
        checkLoginData: function(loginData, userData){
            this.loginresult="error";

            for(var i=0; i<userData.length; i++) {
                if(loginData.id==userData[i].id && loginData.password==userData[i].password){
                    console.log('login 성공!!');
                    storage.setItem('loginNum', this.userData[i].index);
                    this.loginresult="success";
                    break;
                } else {
                    console.log('login 실패!!');
                }
            }
        }
    }
}
</script>

<style>
.row{
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>

