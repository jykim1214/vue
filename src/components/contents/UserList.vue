<template>
    <div class="container">
        <div id="list">
        <h3>회원 정보</h3>
        </div>
        
        <table class="table table-striped table-bordered table-hover">
            <thead>
            <tr>
                <th>아이디</th>
                <th>비밀번호</th>
                <th>이름</th>
                <th>이메일</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in joinData" v-bind:key="user.key">
                <td>{{user.id}}</td>
                <td>{{user.password}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
            </tr>
            
            </tbody>
        </table>
        
        <ul class="pagination" style="text-align:center">
            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">5</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </div>
</template>

<script>
export default {
  name:'app',
  data: function() {
      return {
          joinData: this.getUserList()
      }
  },
  methods:{
      getUserList: function(){
            this.$http.get('http://localhost:8081/users/')
            .then(result => {
                console.log('-----------result-------');
                console.log(result);
            }, response => {
                console.log('----------------- response --------------------------');
                console.log(response);
                this.joinData=response.data._embedded.users;
                console.log('success');
            }, error=>{
                console.log(error);
            });
      }
  }
}
</script>

<style>
.container{
    margin-top:70px;
}
    #container {
      width: 80%;
      margin: 0 auto;     /* 가로로 중앙에 배치 */
      padding-top: 10%;   /* 테두리와 내용 사이의 패딩 여백 */
    }
    #list {
      text-align: center;
    }
    table{
        margin-top: 20px;
    }
    .table > thead > tr > th {
      text-align: center;
    }
    .table > tbody > tr > td {
      text-align: center;
    }
    .table > tbody > tr > #title {
      text-align: left;
    }
    #write {
      text-align: right;
    }
</style>
