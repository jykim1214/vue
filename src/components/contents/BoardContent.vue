<template>
    <div class="container">
        <form class="form" style="margin-top:20px;">
            <div id="row">
                <div class="col-md-12" style="margin-bottom:20px;" v-if="boardData">
                    <form class="form-horizontal">
                        <div class="row">
                            <div class="col-md-2">제목</div>
                            <div class="col-md-10 text-left" >{{boardData.title}}</div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">작성자</div>
                            <div class="col-md-2 text-left">{{boardData.name}}</div>
                            <div class="col-md-2">작성일</div>
                            <div class="col-md-2 text-left">{{boardData.date}}</div>
                            <div class="col-md-2">조회수</div>
                            <div class="col-md-2 text-left">123</div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 text-left" style="height:35px; border-bottom-width: 0.5px; ">내용</div>
                        </div>
                        <div class="row" style="border-top-style:solid; border-top-width:0.3px">
                            <img :src="boardData.attachFileImg" class="img-fluid" style="width:300px; height:200px;"/>
                            <div class="text-left" style="margin:10px; height:300px; border-style:none">{{boardData.content}}</div>
                        </div>
                    </form>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
var storage = localStorage;
export default {
    name: 'app',
    data: function() {
        return {
            boardData: this.getBoardData()
        }
    },
    methods:{
        getBoardData: function(){
            this.$http.get('http://localhost:8081/boards/', {'Access-Control-Allow-Origin': '*'})
            .then(response=>{
                var index = storage.getItem('index');
                console.log(index);
                this.boardData = response.data[index];
                console.log(this.boardData);
            }, error=>{
                console.log(error);
            });
        }
    }
}
</script>

<style>
.col-md-2, .col-md-8, .text-left{
    padding-top: 10px;
    border-bottom-style: solid; 
    border-bottom-width: 1px;
}
.col-md-2{
    height:35px; 
    background-color:pink;
}
.text-left{
    height:35px; 
    background-color:white;
}
.col-md-12{
    border-style:solid none solid none; 
    border-width:2px;
}
</style>


