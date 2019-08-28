<template>
    <div v-if="loaded" class="overScreenView px-2">
        <Header :with-clock="true" :height="parseInt('60')" title="信息学院实时数据展示"></Header>
        <div class="panel row">
            <div class="left-panel col col-3-5">
                <div class="left-top-panel show-panel w-100">
                    <div class="chart">
                        <module :module-name="moduleList[cur.left].module"></module>
                    </div>
                </div>
                <div class="left-bottom-panel show-panel w-100">
                    <div class="chart">
                        <module :module-name="moduleList[3].module"></module>
                    </div>
                </div>
            </div>
            <div class="center-panel col-5">
                <div class="center-top-panel show-panel w-100">
                    <college-overview :height="parseInt('70')"></college-overview>
                </div>
                <div class="center-center-panel show-panel w-100">
                    <div class="chart">
                        <module :module-name="moduleList[4].module"></module>
                    </div>
                </div>
                <div class="center-bottom-panel w-100">
                    <message :height="parseInt('45')"></message>
                </div>
            </div>
            <div class="right-panel col col-3-5">
                <template  v-if="cur.right">
                    <div class="right-top-panel w-100 show-panel">
                        <div class="chart">
                            <module :module-name="moduleList[5].module"></module>
                        </div>
                    </div>
                    <div class="right-bottom-panel w-100 show-panel">
                        <module :module-name="moduleList[6].module"></module>
                    </div>
                </template>
                <template v-else>
                    <div class="right-full-panel w-100 show-panel">
                        <div class="chart">
                            <module :module-name="moduleList[7].module"></module>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "@components/publicModuleComp/Header";
    import message from "@components/publicModuleComp/message";
    import CollegeOverview from "@components/publicModuleComp/CollegeOverview";
    import module from "@components/chart/module";
    export default {
        name: "overScreenView",
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
                    right: true
                }
            }
        },
        mounted() {
            this.moduleList = this.global.moduleList.sort((a, b) => this.moduleCodeList.indexOf(a.id) - this.moduleCodeList.indexOf(b.id));
            this.loaded = true;
            setInterval(() => {
                this.cur.left = (this.cur.left + 1) % 3
            }, 5000);
            setInterval(() => {
                this.cur.right = !this.cur.right
            }, 3000)
        }
    }
</script>

<style lang="less" scoped>
    div.overScreenView {
        width: 100vw;
        height: 100vh;
        background-image: url(../../assets/background.jpg);
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
        overflow: hidden;
        position: relative;

        div.panel {
            height: calc(100vh - 60px);
            div.col-3-5 {
                flex: 0 0 29.166666%;
                max-width: 29.166666%;
            }
            div.left-panel {
                div.left-top-panel {
                    position: relative;
                    height: calc(100vh * 0.55 - 60px * 0.55);
                    border: 20px solid transparent;
                    border-image: url("../../assets/border-image-1.png") 20 36;
                }
                div.left-bottom-panel {
                    position: relative;
                    height: calc(100vh * 0.45 - 60px * 0.45);
                    border: 20px solid transparent;
                    border-image: url("../../assets/border-image-1.png") 20 36;
                }
            }
            div.center-panel {
                div.center-top-panel {
                    position: relative;
                    height: 70px;
                    border: 5px solid transparent;
                    border-image: url("../../assets/simple-border.png") 26;
                }
                div.center-center-panel {
                    position: relative;
                    margin-top: 10px;
                    height: calc(100vh - 60px - 70px - 10px - 45px);
                    border: 20px solid transparent;
                    border-image: url("../../assets/border-image-1.png") 20 36;
                }
            }
            div.right-panel {
                div.right-top-panel {
                    position: relative;
                    margin-bottom: 10px;
                    height: calc(100vh * 0.65 - 60px * 0.65 - 10px);
                    border: 20px solid transparent;
                    border-image: url("../../assets/border-image-1.png") 20 36;
                }
                div.right-bottom-panel {
                    position: relative;
                    height: calc(100vh * 0.35 - 60px * 0.35 - 5px);
                    border: 5px solid transparent;
                    border-image: url("../../assets/simple-border.png") 26;
                }
                div.right-full-panel {
                    position: relative;
                    height: calc(100vh - 60px);
                    border: 20px solid transparent;
                    border-image: url("../../assets/border-image-1.png") 20 36;
                }
            }
        }
    }
</style>