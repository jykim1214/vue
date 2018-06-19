<template>
<div class="container" style="bord:1px">
    <h2 class="text-center">글 작성</h2>
    <form class="form" v-on:submit.prevent="submit(boardData)">
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
                        <textarea class="form-control" rows="10"  v-model="boardData.content" required>
                        </textarea>
                        <img :src="image" style="width:100px; height:100px;"/>
                    </div>
                </form>
            </div>
            <div class="form-group">
                <div class="col-sm-2" style="width:100px">
                    <label for="file" class="control-label">첨부파일</label>
                </div>
                <div class="col-sm-10 btn-file" style="width:100px">
                    <input type="file" id="imageURL" data-display-target="attachFile" v-on:change="handleFileChange" accept="image/*">
                </div>
            </div>
        </div>
        <div class="row text-center">
            <button type="submit" class="btn btn-default" style="width: 100px;" @click="toggle()">작성하기</button>
        </div>
    </form>
</div>
</template>

<script>
export default {
  name: 'board',
  data(){
        return {
            image: '',
            boardData:[]        
        }
    },
    methods:{
        handleFileChange(e){
            console.log(e.target.files[0].name);
            this.boardData.attachFile = e.target.files[0].name;
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;
            
            reader.onload = (e) => {
                vm.image = e.target.result;
                this.boardData.attachFileImg = vm.image;
                console.log(window.localStorage);
            };
            reader.readAsDataURL(file);
        },
        submit: function(boardData) {
            let req = {
                "title":boardData.title,
                "name":boardData.name,
                "date":boardData.date,
                "content":boardData.content,
                "attachFile":boardData.attachFile,
                "attachFileImg":boardData.attachFileImg
            }
            
            this.$http.post('http://localhost:8081/boards/', req)
                .then((response) => {
                    console.log('success');
                    console.log(boardData);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        toggle: function(){
            window.location.href ='./#/list';
        }
    }
}
</script>

<style>
    .container{
        margin-top:70px;
    }
    form{
        text-align: left;
    }
</style>