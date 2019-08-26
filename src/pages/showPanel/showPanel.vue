<template>
    <wide-screen-view v-if="overviewStatus.panelCode === 1" :module-code-list="overviewStatus.moduleCodeList" :key="overviewStatus.moduleCodeList"></wide-screen-view>
    <ctrl-screen-view v-else-if="overviewStatus.panelCode === 2" :module-code-list="overviewStatus.moduleCodeList" :key="overviewStatus.moduleCodeList"></ctrl-screen-view>
    <over-screen-view v-else-if="overviewStatus.panelCode === 3" :module-code-list="overviewStatus.moduleCodeList" :key="overviewStatus.moduleCodeList"></over-screen-view>
</template>

<script>
    import wideScreenView from "@components/panel/wideScreenView";
    import ctrlScreenView from "@components/panel/ctrlScreenView";
    import overScreenView from "@components/panel/overScreenView";
    export default {
        name: "showPanel",
        components: {
            wideScreenView, ctrlScreenView, overScreenView
        },
        data() {
            return {
                overviewStatus: {
                    panelCode: null,
                    moduleCodeList: null
                }
            }
        },
        mounted() {
            this.getOverviewStatus();
            setInterval(this.getOverviewStatus, 3000);
        },
        methods: {
            getOverviewStatus() {
                this.global.axios.get(this.global.serverHost + '/data/overviewStatus', {
                    withCredentials: true
                }).then(res => {
                    this.overviewStatus = res.data
                }).catch((e) => {
                    // eslint-disable-next-line no-console
                    console.info(e)
                })
            }
        }
    }
</script>

<style>
    div.show-panel {
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