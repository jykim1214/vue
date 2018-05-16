<template>
    <div class="container">
        <div id="list">
        <h3>게시판</h3>
        </div>
        
        <table class="table table-striped table-bordered table-hover">
            <thead>
            <tr>
                <th style="width:5%;">번호</th>
                <th style="width:65%;">제목</th>
                <th style="width:10%;">작성자</th>
                <th style="width:10%;">날짜</th>
                <th style="width:10%;">조회수</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="board in boardData">
                <td>{{board.num}}</td>
                <td>{{board.title}}</td>
                <td>{{board.name}}</td>
                <td>{{board.date}}</td>
            </tr>
            </tbody>
        </table>
        <div id="write">
            <a href="./#/board">글쓰기</a>
        </div>
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
          boardData: this.getBoardData()
      }
  },
  methods:{
      getBoardData: function(){
          this.$http.get('http://localhost:8081/boards/')
          .then(response => {
              this.boardData=response.data._embedded.board;
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
    margin-top:50px;
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
