<template>
    <div class="container">
        <form class="form" style="margin-top:20px;">
            <div id="row">
                <div class="col-md-12" style="margin-bottom:20px;">
                    <form class="form-horizontal">
                        <div class="row">
                            <div class="col-md-2">제목</div>
                            <div class="col-md-10 text-left">제목쓰기</div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">작성자</div>
                            <div class="col-md-2 text-left">123</div>
                            <div class="col-md-2">작성일</div>
                            <div class="col-md-2 text-left">123</div>
                            <div class="col-md-2">조회수</div>
                            <div class="col-md-2 text-left">123</div>
                        </div>
                    </form>
                </div>
                <form>
                    <div class="col-sm-12" style="border-style:none;">
                        <div class="row">
                            <div class="col-xs-1">내용</div>
                        </div>
                        <div class="row">
                            <img src="https://www.w3schools.com/images/picture.jpg" class="img-fluid">
                            <textarea class="form-control" rows="10"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.container{
    margin-top: 60px;
}
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


