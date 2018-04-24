<template>
    <div class="section">
        <h2 class="text-center">글 작성</h2>
        <div class="container" style="bord:1px">
            <form v-on:submit.prevent="submit(boardData)">
                <div class="row">
                    <div class="col-md-12">
                        <form class="form-horizontal" role="form">
                        <div class="form-group">
                            <div class="col-sm-2" style="width:100px">
                                <label class="control-label">제목</label>
                            </div>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="title"  v-model="boardData.title" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-2" style="width:100px">
                                <label class="control-label">이름</label>
                            </div>
                            <div class="col-sm-10" style="width:300px">
                                <input type="text" class="form-control" id="name"  v-model="boardData.name" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-2" style="width:100px">
                                <label class="control-label">날짜</label>
                            </div>
                            <div class="col-sm-10" style="width:300px">
                                <input type="date" class="form-control" id="date"  v-model="boardData.date" required>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div class="col-md-12">
                        <form>
                            <div style="padding-bottom:20px">
                                <label>내용</label>
                                <textarea class="form-control" rows="10"  v-model="boardData.content" required></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-2" style="width:100px">
                            <label for="file" class="control-label">첨부파일</label>
                        </div>
                        <div class="col-sm-10 btn-file" style="width:100px">
                            <input type="file" data-display-target="attachFile" v-on:change="boardData.file" required>
                        </div>
                    </div>
                </div>
                <div class="row text-center">
                    <button type="submit" class="btn btn-default" style="width: 100px;" @click=checkBoardData(boardData) >제출</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'board',
  data(){
        return {
            boardData:[
                {title:''},
                {name:''},
                {date:''},
                {content:''},
                {file:''},
            ]
        }
    },
    methods:{
        submit: function(boardData) {
            localStorage.setItem('title', boardData.title);
            localStorage.setItem('name', boardData.name);
            localStorage.setItem('date', boardData.date);
            localStorage.setItem('content', boardData.content);
            localStorage.setItem('file', boardData.file);
        },
        checkBoardData: function(boardData){
            if(boardData.title==null) {
                alert('제목을 입력하세요.');
            } else if(boardData.name==null){
                alert('작성자를 입력하세요.');
            } else if(boardData.date==null){
                alert('날짜를 입력하세요.');
            } else if(boardData.content==null){
                alert('내용을 입력하세요.');
            }
        }
    }
}
</script>

<style>
    div{
        text-align: left;
        margin-top: 10px;
    }
</style>