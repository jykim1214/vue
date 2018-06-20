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
                            <div class="col-md-2">공연 일자</div>
                            <div class="col-md-2 text-left">{{boardData.date}}</div>
                            <div class="col-md-2">조회수</div>
                            <div class="col-md-2 text-left">0</div>
                        </div>
                        <div class="row">
                            <div class="col-md-2" style="height:355px;">내용</div>
                            <div class="col-mn-10">
                                <img :src="boardData.attachFileImg" class="col-mn-10 text-left img-fluid" style="width:300px; height:200px;"/>
                                <div class="text-left" style="margin:10px; height:100px; border-style:none">{{boardData.content}}</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </form>
        <div class="text-right" v-if="boardData">
            <button class="btn btn-default" v-if="boardData.name == id" @click="boardModify(boardData)"> 수정 </button>
            <button class="btn btn-default" v-if="boardData.name == id" @click="boardDelete(boardData)"> 삭제 </button>
        </div>
        <!-- 댓글 -->
        <form class="form" style="padding-bottom:30px;" v-on:submit.prevent="submit(commentData)">
            <div class="row" >
                <div class="col-md-12" style="border-style:none;">
                    <div class="text-left" style="border-style:none; padding-bottom:50px"><h4> 댓글 달기 </h4></div>
                    <form class="form">
                        <div class="row">
                            <div class="col-md-12" style="border-style:solid none none none;" v-if="boardData">
                                <div class="row" style="border-style:none none solid none; border-width:1px;" v-for="(comment, index) in boardData.comments" v-bind:key="comment.key">
                                    <div class="col-md-2" style="border-style:none; background-color:white;">{{comment.name}} </div>
                                    <div class="col-md-8 text-left" style="border-style:none"> {{comment.comment}} </div>
                                    <div class="col-mn-2 text-center">
                                        <button class="btn btn-link" v-if="comment.name == id"> 수정 </button>
                                        <button class="btn btn-link" v-if="comment.name == id" @click="deleteComment(index)"> 삭제 </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="row">
                        <div class="col-md-2" style="border-style:none; background-color:white;">
                            <div class="form-control" style="background-color:#F2F2F2">{{id}}</div>
                        </div>
                        <div class="col-md-8" style="border-style:none">
                            <input type="text" class="form-control" placeholder="comment" style="background-color:#F2F2F2" v-model="commentData.comment" required>
                        </div>
                        <div class="col-md-2" style="border-style:none; background-color:white;">
                            <button type="submit"  class="btn btn-default">등록</button>
                        </div>
                    </div>
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
            id: storage.getItem('loginId'),
            boardData: this.getBoardData(),
            commentData:[]
        }
    },
    methods:{
        getBoardData: function(){
            this.$http.get('http://localhost:8081/boards/', {'Access-Control-Allow-Origin': '*'})
            .then(response=>{
                var index = storage.getItem('index');
                this.boardData = response.data[index];
                this.$forceUpdate();
            }, error=>{
                console.log(error);
            });
        },
        submit: function(commentData){
            let req = {
                "board":this.boardData.num,
                "name":this.id,
                "comment": this.commentData.comment,
                "date": this.commentData.date
            }
            
            this.$http.post('http://localhost:8081/comments/', req)
                .then((response) => {
                    console.log('success');
                })
                .catch((error) => {
                    console.log(error);
                });
                window.location.reload(true);
        },
        boardModify: function(boardData) {
            var num = this.boardData.num;
            storage.setItem('boardModify', num);
            this.$router.push({name:'BoardModify'});
        },
        boardDelete: function(boardData) {
            for(var i=0; i<boardData.comments.length; i++){
                this.$http.delete('http://localhost:8081/comments/'+this.boardData.comments[i].num)
                 .then(response=> {
                     this.$router.push({name:'BoardList'});
                },
                error=>{
                    console.log(error);
                });
            }
            
            var num = this.boardData.num;
            this.$http.delete('http://localhost:8081/boards/'+num)
            .then(response => {
                console.log('delete success');
            }, error => {
                console.log('error');
            });
            
        },
        deleteComment: function(index){
            this.$http.delete('http://localhost:8081/comments/'+this.boardData.comments[index].num)
            .then( response => {
                window.location.reload(true);
            },error=>{
                console.log(error);
            });
            
        }
    }
}
</script>

<style>
.col-md-2, .col-md-8, .text-left, .col-md-10{
    padding-top: 10px;
    border-bottom-style: solid; 
    border-bottom-width: 1px;
}
.col-md-2{
    height:35px; 
    background-color:rgb(255, 218, 225);
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


