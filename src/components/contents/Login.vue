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
                this.userData=response.data;
            }, error=>{
                console.log(error);
            });
        },
        submit: function(loginData) {
            let req = {
                "id":loginData.id,
                "password":loginData.pwd
            }

            this.$http.post('http://localhost:8081/logins/', req)
            .then((response) => {
                this.$router.push({name:'BoardList'});
            })
            .catch((error) => {
                console.log(error);
            });
        },
        checkLoginData: function(loginData, userData){
            for(var i=0; i<userData.length; i++) {
                if(loginData.id==userData[i].id&&loginData.password==userData[i].password){
                    //
                    break;
                } else {
                        
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

