<template>
    <div class="container" style="bord:1px">
        <form class="form" v-on:submit.prevent="submit(userData)">
            <h3>회원정보수정</h3>
            <div class="text-center">
                <div class="col-md-12" style="margin-bottom:20px; margin-left:150px;" v-if="userData">
                <form class="form-horizontal">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-md-2"><label for="id">아이디: </label></div>
                            <div class="col-md-8 form-control" id="id" >{{userData.id}}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row" >
                            <div class="col-md-2"><label for="pwd">비밀번호: </label></div>
                            <input type="password" class="form-control" id="pwd" v-model="userData.pwd" required >
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row" >
                            <div class="col-md-2"><label class="" for="pwdRe">비밀번호 확인: </label></div>
                            <input type="password" class="form-control" id="pwdRe" v-model="userData.pwdRe" required >
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row" >
                            <div class="col-md-2"><label for="name">이름: </label></div>
                            <input type="text" class="form-control" id="usr" v-model="userData.name" required >
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="row" >
                            <div class="col-md-2"><label for="e-mail">이메일: </label></div>
                            <input type="email" class="form-control" id="email" v-model="userData.email" required >
                        </div>
                    </div>
                    
                </form>
            </div>
            <div class="row text-center">
                <button type="submit" class="btn btn-default" @click="checkUserData(userData);" >수정</button>
            </div>
            </div>
            
            
            
        </form>
    </div>
</template>

<script>
var store = localStorage;
export default {
    name:'join',
    data(){
        return {
            userData: this.getUserData()
        }
    },
    methods: {
        getUserData: function() {
            var num = store.getItem('loginNum');
            this.$http.get('http://localhost:8081/users/'+num, {'Access-Control-Allow-Origin': '*'})
            .then(response => {
                this.userData=response.data;
                console.log('success');
            }, error=>{
                console.log(error);
            });
        },
        submit: function() {
            var num = store.getItem('loginNum');
            this.$http.put('http://localhost:8081/users/'+num, {'Access-Control-Allow-Origin': '*'})
            .then(response => {
                console.log('success');
                this.$router.push({name:'BoardList'});
            }, error=>{
                console.log(error);
            });
        }, 
        checkUserData: function(userData) {
            if(userData.pwd!=userData.pwdRe) {
                alert("비밀번호와 비밀번호 확인 값이 일치하지 않습니다.");
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

