<template>
    <div class="container" style="bord:1px">
        <form class="form" v-on:submit.prevent="submit(joinData)">
            <h3>회원가입</h3>
            <div class="form-inline">
                <label for="id">아이디: </label>
                <input type="text" class="form-control" id="id" v-model="joinData.id" required >
            </div>
            <div class="form-inline" >
                <label for="pwd">비밀번호: </label>
                <input type="password" class="form-control" id="pwd" v-model="joinData.pwd" required >
            </div>
            <div class="form-inline" >
                <label class="" for="pwdRe">비밀번호 확인: </label>
                <input type="password" class="form-control" id="pwdRe" v-model="joinData.pwdRe" required >
            </div>
            <div class="form-inline" >
                <label for="name">이름: </label>
                <input type="text" class="form-control" id="usr" v-model="joinData.name" required >
            </div>
            <div class="form-inline" >
                <label for="e-mail">이메일: </label>
                <input type="email" class="form-control" id="email" v-model="joinData.email" required >
            </div>
            <div class="row text-center">
                <button type="submit" class="btn btn-default" @click="checkJoinData(joinData, userData);" >가입</button>
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
                joinData:[]
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
            submit: function(joinData) {
                let req = {
                    "id":joinData.id,
                    "password":joinData.pwd,
                    "passwordRe":joinData.pwdRe,
                    "name":joinData.name,
                    "email":joinData.email
                }
                if(this.joinResult=="true"){
                    this.$http.post('http://localhost:8081/users/', req)
                    .then((response) => {
                        this.$router.push({name:'Home'});
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                }
            },
            checkJoinData: function(joinData, userData){
                this.joinResult=="false";
                if(userData.length > 0){
                    for(var i=0; i<userData.length; i++) {
                        if(joinData.id==userData[i].id){
                            alert("id 중복!!");
                            break;
                        }
                    }
                }

                if(joinData.pwd!=joinData.pwdRe){
                    alert('비밀번호가 일치하지 않습니다.');
                }

            }
        }
    }
</script>

<style>
    .form-control{
        margin-top: 10px;
        text-align: left;
    }
    label{
        text-align:left;
        width:100px;
    }
    .form{
        margin-top:50px;
    }
    #id, #pwd, #email, #usr, #pwdRe{
        width:40%;
    }
    button{
        margin-top:20px;
    }
</style>