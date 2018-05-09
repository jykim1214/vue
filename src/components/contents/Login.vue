<template>
<div class="container">
    <form>
        <div class="col-md-12">
            <div class="row">
                <label style="font-size:20px;">로그인</label>
            </div>
            <form class="form-horizontal" role="form">
                <div class="form-group">
                    <div class="col-sm-2">
                        <label for="inputEmail3" class="control-label">ID</label>
                    </div>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="id" placeholder="ID">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-2">
                        <label for="inputPassword3" class="control-label">Password</label>
                    </div>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="pwd" placeholder="Password">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-12" style="text-align:center">
                        <button type="submit" class="btn btn-default"><a href="./#/list">로그인</a></button>
                        <button type="submit" class="btn btn-default"><a href="./#/join">회원가입</a></button>
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
.row{
    margin-top: 80px;
    margin-bottom: 20px;
}
</style>

