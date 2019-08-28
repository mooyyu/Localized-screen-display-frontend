<template>
    <div class="container">
        <div class="login mx-auto mt-5 p-lg-5 border">
            <div class="form-group row">
                <label for="inputId" class="text-right col-3 col-form-label text-right">用户</label>
                <div class="col-9">
                    <input v-model="loginInfo.user" type="text" maxlength="20" class="form-control" id="inputId" placeholder="账号">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-3 col-form-label text-right">密码</label>
                <div class="col-9">
                    <input v-model="loginInfo.password" type="password" class="form-control" id="inputPassword" placeholder="Password">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputVCode" class="col-3 col-form-label text-right">验证码</label>
                <div class="col-9 input-group">
                    <div class="input-group-prepend">
                        <img :src="serverHost + '/login/getVCode'" alt="vcode">
                    </div>
                    <input v-model="loginInfo.vcode" type="text" class="form-control" id="inputVCode" placeholder="VCode・不检验大小写">
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
    import Md5 from "@components/utils/md5";
    import modal from '@components/bootstrap/modal'
    import 'bootstrap/dist/js/bootstrap.min'
    import $ from 'jquery'
    export default {
        name: "login",
        data() {
            return {
                serverHost: this.global.serverHost,
                loginInfo: {
                    user: '',
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
                if (this.loginInfo.user.length <= 0 ||
                    this.loginInfo.password.length <= 0 ||
                    this.loginInfo.vcode.length <= 0
                ) {
                    this.modalBody = "请将信息填写完整。";
                    $('div#loginModal').modal('show');
                    return
                }
                this.global.axios.post(this.serverHost + '/login/checkLogin', {
                        user: this.loginInfo.user,
                        password: Md5.createMd5(this.loginInfo.password),
                        vcode: this.loginInfo.vcode
                    }, {
                        withCredentials: true
                    }).then(res => {
                        if (res.data === "success") {
                            this.modalBody = "登录成功。";
                            $('div#loginModal').on('hidden.bs.modal', () => {
                                window.location.href = "./"
                            })
                        } else if (res.data === "vcode_error") {
                            this.modalBody = "验证码错误。";
                            $('div#loginModal').on('hidden.bs.modal', () => {
                                window.location.reload()
                            })
                        } else {
                            this.modalBody = "用户名或密码错误。"
                        }
                    }).catch(e => {
                        // eslint-disable-next-line no-console
                        console.info(e)
                    }).finally(() => {
                        $('div#loginModal').modal('show')
                })
            }
        }
    }
</script>

<style scoped>
    div.login {
        width: 100vw;
        max-width: 600px;
    }
</style>