<template>
<div class="container">
    <form v-on:submit.prevent="submit(loginData)">
        <div class="col-md-12">
            <div class="row">
                <label style="font-size:20px;">로그인</label>
            </div>
            <form class="form-horizontal" role="form">
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
                        <button type="submit" class="btn btn-default" @click="checkJoinData(loginData, userData);"><a href="./#/list" >로그인</a></button>
                        <button type="submit" class="btn btn-default"><a href="./#/join">회원가입</a></button>
                    </div>
                </div>
            </form>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: 'Join',
    data(){
        return {
            userData:this.getUserList(),
            loginData:[]
            }
        },
        methods:{
            getUserList: function(userData){
                this.$http.get('http://localhost:8081/users/', {'Access-Control-Allow-Origin': '*'})
                .then(response => {
                    this.userData=response.data._embedded.users;
                }, error=>{
                    console.log(error);
                });
            },
            submit: function(loginData) {
                let req = {
                    "id":loginData.id,
                    "password":loginData.pwd
                }

                this.$http
                .post('http://localhost:8081/logins/', req)
                .then((response) => {
                    console.log('success');
                })
                .catch((error) => {
                    console.log(error);
                });
            },
            checkJoinData: function(loginData, userData){
                for(var i=0; i<userData.length; i++) {
                    if(loginData.id==userData[i].id){
                        alert("id 중복!!");
                        break;
                    } else if(loginData.password==userData[i].password) {
                        alert("Password error!!");
                        break;
                    }
                }

                if(joinData.pwd!=joinData.pwdRe){
                    alert('비밀번호 확인 값이 일치하지 않습니다.');
                }
            }
        }
    }
</script>

<style>
.row{
    margin-top: 80px;
    margin-bottom: 20px;
}
</style>

