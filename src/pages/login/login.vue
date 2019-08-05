<template>
    <div class="container">
        <div class="login m-auto mt-lg-5 p-lg-5 border">
            <div class="form-group row">
                <label for="inputId" class="text-right col-sm-3 col-form-label text-right">学号</label>
                <div class="col-sm-9">
                    <input v-model="loginInfo.admin" type="text" maxlength="20" class="form-control" id="inputId" placeholder="账号">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-3 col-form-label text-right">密码</label>
                <div class="col-sm-9">
                    <input v-model="loginInfo.password" type="password" class="form-control" id="inputPassword" placeholder="Password">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputVCode" class="col-sm-3 col-form-label text-right">验证码</label>
                <div class="col-sm-9 input-group">
                    <div class="input-group-prepend">
                        <img :src="serverHost + '/getVCode'" alt="vcode">
                    </div>
                    <input v-model="loginInfo.vcode" type="text" class="form-control" id="inputVCode" placeholder="VCode・检验大小写">
                </div>
            </div>
            <div class="w-100 text-center">
                <button @click="submit" type="button" class="btn btn-outline-dark btn-sm">登录</button>
            </div>
        </div>

        <modal id="login" title="登录提示" :body="modalBody"></modal>
    </div>
</template>

<script>
    import modal from '@components/bootstrap/modal'
    import $ from 'jquery'
    export default {
        name: "login",
        data() {
            return {
                serverHost: this.global.serverHost,
                loginInfo: {
                    admin: '',
                    password: '',
                    vcode: ''
                },
                modalBody: ''
            }
        },
        components: {
            modal
        },
        methods: {
            submit() {
                this.global.axios.get(this.serverHost + '/login', {
                    params: {
                        xh: this.loginInfo.xh,
                        password: this.loginInfo.password,
                        vcode: this.loginInfo.vcode
                    },
                    withCredentials: true
                }).then(res => {
                    if (res.data === 'success') {
                        window.location.href = './EMCenter'
                    } else {
                        this.modalBody = res.data
                        $('div#loginModal').modal('show')
                    }
                })
            }
        }
    }
</script>

<style scoped>
    div.login {
        width: 600px;
    }
</style>