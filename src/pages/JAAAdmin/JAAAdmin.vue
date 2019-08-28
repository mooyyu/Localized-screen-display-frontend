<template>
    <div v-if="isLogin" class="JAAAdmin border-left border-right">
        <navbar></navbar>
        <div class="body pl-0 d-flex">
            <aside-bar></aside-bar>
            <main-panel :panel="selectedPanel"></main-panel>
        </div>
    </div>
</template>

<script>
    import navbar from '@components/JAAAdmin/navbar'
    import asideBar from '@components/JAAAdmin/asideBar'
    import mainPanel from '@components/JAAAdmin/mainPanel'

    export default {
        name: "JAAAdmin",
        components: {
            navbar, asideBar, mainPanel
        },
        data() {
            return {
                selectedPanel: 'showHello',
                isLogin: false
            }
        },
        mounted() {
            this.global.axios.get(this.global.serverHost + '/login/checkIsLogin', {
                withCredentials: true
            }).then(res => {
                if (res.data !== 'yes') {
                    window.location.href = './login.html'
                } else {
                    this.isLogin = true;
                }
            })
        },
        methods: {
            selectPanel(panelName) {
                this.selectedPanel = panelName
            }
        }
    }
</script>

<style scoped>
    div.JAAAdmin {
        width: 100vw;
        min-width: 900px;
        height: 100vh;
        overflow: hidden;
    }
    div.body {
        height: calc(100vh - 57px);
    }
    div {
        box-sizing: border-box;
    }
</style>