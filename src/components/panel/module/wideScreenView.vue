<template>
    <div v-if="loaded" class="wideScreenView px-4">
        <Header :height="parseInt('60')" title="信息学院实时数据展示"></Header>
        <div class="panel row">
            <div class="left-panel col-5 pl-1 pr-0">
                <college-overview :height="parseInt('70')"></college-overview>
                <div class="left-center-panel show-panel w-100">
                    <div class="chart">
                        <module :module-name="moduleList[cur.left].module"></module>
                    </div>
                </div>
            </div>
            <div class="right-panel col-7">
                <div class="right-top-panel w-100 show-panel">
                    <div class="chart">
                        <module :module-name="moduleList[cur.right+3].module"></module>
                    </div>
                </div>
                <div class="right-bottom-panel w-100 show-panel">
                    <module :module-name="moduleList[7].module"></module>
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
        name: "wideScreenView",
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
                cur: {
                    left: 0,
                    right: 0
                }
            }
        },
        mounted() {
            this.moduleList = this.global.moduleList.sort((a, b) => this.moduleCodeList.indexOf(a.id) - this.moduleCodeList.indexOf(b.id));
            this.loaded = true;
            setInterval(() => {
                this.cur.left = (this.cur.left + 1) % 3
            }, 12000);
            setInterval(() => {
                this.cur.right = (this.cur.right + 1) % 4
            }, 7000)
        }
    }
</script>

<style lang="less" scoped>
    div.wideScreenView {
        width: 100vw;
        height: 100vh;
        background-image: url(../../../assets/background.jpg);
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
        overflow: hidden;
        position: relative;
        div.panel {
            height: calc(100vh - 60px - 45px);
            div.left-panel {
                div.left-center-panel {
                    margin-top: 10px;
                    height: calc(100% - 70px - 10px);
                    border: 20px solid transparent;
                    border-image: url("../../../assets/border-image-1.png") 20 36;
                }
            }
            div.right-panel {
                div.right-top-panel {
                    margin-bottom: 10px;
                    height: calc(70% - 10px);
                    border: 20px solid transparent;
                    border-image: url("../../../assets/border-image-1.png") 20 36;
                }
                div.right-bottom-panel {
                    position: absolute;
                    top: 70%;
                    height: calc(30% - 5px);
                    border: 5px solid transparent;
                    border-image: url("../../../assets/simple-border.png") 26;
                    box-sizing: border-box;
                }
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
        background-image: url("../../../assets/background.jpg");
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