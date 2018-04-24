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
                <label class="" for="pwd">비밀번호 확인: </label>
                <input type="password" class="form-control" id="pwdre" v-model="joinData.pwdre" required >
            </div>
            <div class="form-inline" >
                <label for="name">이름: </label>
                <input type="text" class="form-control" id="usr" v-model="joinData.name" required >
            </div>
            <div class="form-inline" >
                <label for="e-mail">이메일: </label>
                <input type="email" class="form-control" id="email" v-model="joinData.email" required >
            </div>
            <button type="button" class="btn btn-light" style="margin-top:20px; text-align:center" @click=checkJoinData(joinData) >가입</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Join',
        data(){
            return {
                joinData:[
                    {id:''},
                    {pwd:''},
                    {pwdre:''},
                    {name:''},
                    {email:''},
                ]
            }
        },
        methods:{
            submit: function(joinData) {
                localStorage.setItem('id', joinData.id);
                localStorage.setItem('pwd', joinData.pwd);
                localStorage.setItem('pwdre', joinData.pwdre);
                localStorage.setItem('name', joinData.name);
                localStorage.setItem('email', joinData.email);
                console.log('localStorage 저장!!');
            },
            checkJoinData: function(joinData){
                if(joinData.id==null) {
                    alert('id를 입력하세요.');
                } else if(joinData.pwd==null){
                    alert('비밀번호를 입력하세요.');
                } else if(joinData.pwdre==null){
                    alert('비밀번호 확인 값을 입력하세요.');
                } else if(joinData.name==null){
                    alert('이름을 입력하세요.');
                } else if(joinData.email==null){
                    alert('이메일 주소를 입력하세요.');
                } else if(joinData.pwd!=joinData.pwdre){
                    alert('비밀번호 확인 값이 일치하지 않습니다.');
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
    #id, #pwd, #email, #usr, #pwdre{
        width:40%;
    }
</style>