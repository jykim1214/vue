<template>
    <div class="container">
       
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
            <tr v-for="(boards, index) in boardData" v-bind:key="boards.key" @click="toggle(index)">
                <td>{{index+1}}</td>
                <td>{{boards.title}}</td>
                <td>{{boards.name}}</td>
                <td>{{boards.date}}</td>
                <td>0</td>
            </tr>
            </tbody>
        </table>
        <div id="write">
            <a href="./#/write">글쓰기</a>
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
var storage = localStorage;
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
                this.boardData = response.data;
                console.log('success');
            }, error=>{
                console.log(error);
            });
        },
        toggle: function(index){
            storage.setItem('index', index);
            this.$router.push({name:'BoardContent'});
            return index;
        }
    }
}
</script>

<style>
    #container {
      width: 80%;
      margin: 0 auto;     /* 가로로 중앙에 배치 */
      padding-top: 10%;   /* 테두리와 내용 사이의 패딩 여백 */
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
