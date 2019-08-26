<template>
    <div v-if="loaded" class="ctrlScreenView px-4">
        <Header :height="parseInt('60')" title="信息学院实时数据展示"></Header>
        <div class="panel row">
            <div class="top-panel show-panel w-100">
                <college-overview :height="parseInt('70')"></college-overview>
            </div>
            <div class="center-panel show-panel w-100">
                <div class="chart">
                    <module :module-name="moduleList[cur].module"></module>
                </div>
            </div>
        </div>
        <message :height="parseInt('45')"></message>
    </div>
</template>

<script>
    import Header from "@components/publicModuleComp/Header";
    import message from "@components/publicModuleComp/message";
    import CollegeOverview from "@components/publicModuleComp/CollegeOverview";
    import module from "@components/chart/module";
    export default {
        name: "ctrlScreenView",
        props: {
            moduleCodeList: String
        },
        components: {
            Header, message, CollegeOverview, module
        },
        data() {
            return {
                loaded: false,
                moduleList: null,
                cur: 0
            }
        },
        mounted() {
            this.moduleList = this.global.moduleList.filter(item => this.moduleCodeList.split('-')[0].indexOf(item.id) > -1).sort((a, b) => this.moduleCodeList.indexOf(a.id) - this.moduleCodeList.indexOf(b.id))
            if (this.moduleList.length > 0) {
                this.loaded = true;
                setInterval(() => {
                    this.cur = (this.cur + 1) % this.moduleList.length
                }, 5000);
            }
        }
    }
</script>

<style lang="less" scoped>
    div.ctrlScreenView {
        width: 100vw;
        height: 100vh;
        background-image: url(../../assets/background.jpg);
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
        overflow: hidden;
        position: relative;
        div.panel {
            height: calc(100vh - 60px - 45px);
            position: relative;
            div.top-panel {
                position: relative;
                height: 70px;
                border: 5px solid transparent;
                border-image: url("../../assets/simple-border.png") 26;
                box-sizing: border-box;
            }
            div.center-panel {
                position: relative;
                margin-top: 10px;
                height: calc(100vh - 60px - 70px - 45px - 10px);
                border: 20px solid transparent;
                border-image: url("../../assets/border-image-1.png") 20 36;
            }
        }
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
        background-image: url("../../assets/background.jpg");
    }

    div.chart {
        width: 100%;
        height: 100%;
    }

    div.chart div {
        max-height: 100%;
        min-height: 100%;
    }
</style>