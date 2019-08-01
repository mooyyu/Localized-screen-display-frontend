<template>
    <div class="setParam">
        <div class="form-group row">
            <label for="staticCollege" class="col-sm-2 col-form-label">学院名称</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="staticCollege" value="email@example.com">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">最新年级</label>
            <div class="col-sm-10">
                <input type="number" class="form-control" id="inputPassword" placeholder="Password">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "setParam"
    }
</script>

<style scoped>

</style>