<template>
<div class="container" style="border-style:solid 1px black">
    <h3 class="text-center" style="padding-bottom:20px">티켓 양도 글 작성</h3>
    <form class="form" v-on:submit.prevent="submit(boardData)">
        <div class="row" v-if="boardData">
            <div class="col-md-12">
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <div class="col-sm-2" style="width:100px">
                            <label class="control-label">제목</label>
                        </div>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" value="aaa" v-model="boardData.title" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-2" style="width:100px">
                            <label class="control-label">이름</label>
                        </div>
                        <div class="col-sm-10" style="width:300px">
                            <div type="text" class="form-control" id="name">{{id}}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-2" style="width:100px">
                            <label class="control-label">공연 일자</label>
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
                    </div>
                </form>
            </div>
            <div class="form-group">
                <div class="col-sm-2" style="width:100px">
                    <label for="file" class="control-label">첨부파일</label>
                </div>
                <div class="col-sm-10 btn-file" style="width:100px">
                    <input type="file" id="imageURL" data-display-target="attachFile" v-on:change="handleFileChange" accept="image/png">
                </div>
            </div>
        </div>
        <div class="row text-center">
            <button type="submit" class="btn btn-default" style="width: 100px;">수정</button>
        </div>
    </form>
</div>
</template>

<script>
var storage = localStorage;
export default {
  name: 'board',
  data(){
        return {
            id: storage.getItem('loginId'),
            image: '',
            boardData: this.getBoardData()        
        }
    },
    methods:{
        getBoardData: function() {
            this.$http.get('http://localhost:8081/boards/', {'Access-Control-Allow-Origin': '*'})
            .then(response=>{
                var index = storage.getItem('index');
                this.boardData = response.data[index];
                console.log(this.boardData);
            }, error=>{
                console.log(error);
            });
        },
        handleFileChange(e){
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
            };
            reader.readAsDataURL(file);
        },
        submit: function(boardData) {
            let req = {
                "title": boardData.title,
                "name": this.id,
                "date":boardData.date,
                "content":boardData.content,
                "attachFile":boardData.attachFile,
                "attachFileImg":boardData.attachFileImg
            }
            var num = storage.getItem('boardModify');
            this.$http.put('http://localhost:8081/boards/'+num, req)
            .then((response) => {
                this.$router.push({name:'BoardList'});
                console.log('success');
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>

<style>
    form{
        text-align: left;
    }
</style>