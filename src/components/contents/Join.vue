<template>
    <div class="container" style="bord:1px">
        <app-header></app-header>
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
            <button type="submit" class="btn btn-light" @click="checkJoinData(joinData)" >가입</button>
        </form>
        <app-footer></app-footer>
    </div>
</template>

<script>
    export default {
        name: 'Join',
        data(){
            return {
                joinData:[]
            }
        },
        methods:{
            submit: function(joinData) {
                /*localStorage.setItem('id', joinData.id);
                localStorage.setItem('pwd', joinData.pwd);
                localStorage.setItem('pwdRe', joinData.pwdRe);
                localStorage.setItem('name', joinData.name);
                localStorage.setItem('email', joinData.email);
                console.log('localStorage 저장!!');*/
                let req = {
                    "id":joinData.id,
                    "password":joinData.pwd,
                    "passwordRe":joinData.pwdRe,
                    "name":joinData.name,
                    "email":joinData.email
                }

                this.$http
                .post('http://localhost:8081/users/', req)
                .then((response) => {
                    console.log('success');
                })
                .catch((error) => {
                    console.log(error);
                });
            },
            checkJoinData: function(joinData){
                if(joinData.id==null) {
                    alert('id를 입력하세요.');
                } else if(joinData.pwd==null){
                    alert('비밀번호를 입력하세요.');
                } else if(joinData.pwdRe==null){
                    alert('비밀번호 확인 값을 입력하세요.');
                } else if(joinData.name==null){
                    alert('이름을 입력하세요.');
                } else if(joinData.email==null){
                    alert('이메일 주소를 입력하세요.');
                } else if(joinData.pwd!=joinData.pwdRe){
                    alert('비밀번호 확인 값이 일치하지 않습니다.');
                }
            }
        }
    }
</script>

<style>
.container{
    margin-top:20px;
}
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
        text-align:center;
    }
</style>