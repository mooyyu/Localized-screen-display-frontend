<template>
    <div v-if="loaded" class="overview px-1">
        <div class="panel w-100 h-100">
            <Header :title="String('信息学院实时数据')"></Header>
            <div class="body row m-0">
                <left-panel :module-list="moduleList"></left-panel>
                <div class="centerPanel col-5">
                    <Main :module-list="moduleList"></Main>
                    <message></message>
                </div>
                <right-panel :module-list="moduleList"></right-panel>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@components/overview/Header'
    import Main from '@components/overview/Main'
    import message from '@components/overview/message'
    import leftPanel from '@components/overview/LeftPanel'
    import rightPanel from '@components/overview/RightPanel'

    export default {
        name: 'overView',
        props: {
            moduleCodeList: String
        },
        components: {
            Header, Main, message, leftPanel, rightPanel
        },
        data() {
            return {
                moduleList: null,
                loaded: false
            }
        },
        mounted() {
            this.moduleList = this.global.moduleList.sort((a, b) => this.moduleCodeList.indexOf(a.id) - this.moduleCodeList.indexOf(b.id))
            this.loaded = true
        }
    }
</script>

<style>
    div {
        box-sizing: border-box;
    }

    div.overview {
        width: 100vw;
        height: 100vh;
        background-image: url(../../assets/background.jpg);
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
        overflow: hidden;
        position: relative;
    }

    div.body {
        height: 90%;
        width: 100%;
    }

    div.show-panel {
        position: absolute;
        border-radius: 20px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        overflow: hidden;
        z-index: 1;
        background-position: center bottom;
        background-size: cover;
    }

    div.show-panel::after {
        content: '';
        position: absolute;
        background-position: center bottom;
        background-size: cover;
        background-attachment: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        filter: blur(10px);
        z-index: -1;
    }
</style>

