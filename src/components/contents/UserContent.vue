<template>
    <div class="container">
        <form class="form">
            <div class="row">
                <h3 class="text-center">회원정보</h3>
                <div class="col-md-12 " style="margin-bottom:20px; margin-left:80px;" v-if="userData">
                    <form class="form-horizontal">
                        <div class="row">
                            <div class="col-md-2" style="height:50px">아이디</div>
                            <div class="col-md-8 text-left"><div class="form-control text-left">{{userData.id}}</div></div>
                        </div>
                        <div class="row" >
                            <div class="col-md-2" style="height:50px">비밀번호</div>
                            <div class="col-md-8 text-left"><div class="form-control text-left">{{userData.password}}</div></div>
                        </div>
                        <div class="row" >
                            <div class="col-md-2" style="height:50px">비밀번호 확인</div>
                            <div class="col-md-8 text-left"><div class="form-control text-left">{{userData.passwordRe}}</div></div>
                        </div>
                        <div class="row" >
                            <div class="col-md-2" style="height:50px">이름</div>
                            <div class="col-md-8 text-left"><div class="form-control text-left">{{userData.name}}</div></div>
                        </div>
                        <div class="row" >
                            <div class="col-md-2" style="height:50px">이메일</div>
                            <div class="col-md-8 text-left"><div class="form-control text-left">{{userData.email}}</div></div>
                        </div>
                        <div class="row text-center">
                            <button type="submit" class="btn btn-default" @click="userInfoModify(userData);" >수정</button>
                            <button type="submit" class="btn btn-default" @click="userInfoDelete(userData);" >삭제</button>
                        </div>
                    </form>
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
        userInfoModify: function(userData) {
            this.$router.push({name:'UserModify'});
        },
        userInfoDelete: function(userData){
            var num = store.getItem('loginNum');
            this.$http.delete('http://localhost:8081/users/'+num)
            .then(response => {
                console.log('delete user data');
                storage.removeItem('loginId');
                storage.removeItem('loginPw');
                this.$router.push({name:'Home'});
            }, error=> {
                console.log(error);
            })
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
    button{
        margin-top:20px;
    }
</style>

