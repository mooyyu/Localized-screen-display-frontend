<!--suppress ALL -->
<template>
    <div class="hello">
        <div>
            <a class="text-center text-dark display-4 bg-info p-5" href="./login.html">登录</a>
            <a class="text-center text-dark display-4 bg-primary p-5" href="./ctrlPanel.html">控制</a>
        </div>
        <div>
            <a class="text-center text-dark display-4 bg-danger p-5" href="./JAAAdmin.html">后台</a>
            <a class="text-center text-dark display-4 bg-warning p-5" href="./showPanel.html">展示</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style lang="less" scoped>
    div.hello {
        div {
            width: 100vw;
            height: 50vh;
            a {
                display: inline-block;
                box-sizing: border-box;
                width: 50%;
                height: 100%;
                writing-mode: vertical-lr;
                writing-mode: tb-lr;
                text-decoration: underline;
            }
        }
    }
</style>