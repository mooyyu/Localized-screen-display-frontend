<template>
    <div class="showHello text-center m-auto">
        <div class="alert alert-light mt-lg-5" role="alert">
            <h1 class="alert-heading display-1">Hello!</h1>
            <p>欢迎<i class="fa fa-child"></i>来到信息学院大屏展示后台管理系统。<br>该版本为预览版，如果你发现任何bug<i class="fa fa-bug">或者有意向参与本项目的开发<i class="fa fa-code">,请联系邮箱<i class="fa fa-mail-forward">mooyyu#outlook.com(#替换为@)。</i></i></i></p>
            <hr>
            <p class="mb-0">一言 hitokoto.</p>
            <blockquote class="blockquote text-center">
                <p class="mb-0">{{hitokoto.msg}}</p>
                <footer class="blockquote-footer">出自 <cite title="Source Title">{{hitokoto.source}}</cite></footer>
            </blockquote>
        </div>
    </div>
</template>

<script>
    export default {
        name: "showHello",
        data() {
            return {
                hitokoto: {
                    msg: '',
                    source: ''
                }
            }
        },
        mounted() {
            this.global.axios.get('https://v1.hitokoto.cn').then(res => {
                this.hitokoto.msg = res.data.hitokoto
                this.hitokoto.source = res.data.from
            })
        }
    }
</script>

<style scoped>

</style>