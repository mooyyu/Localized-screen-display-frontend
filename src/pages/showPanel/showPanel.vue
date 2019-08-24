<template>
    <over-view v-if="overviewStatus.panelCode === 1" :module-code-list="overviewStatus.moduleCodeList" :key="overviewStatus.moduleCodeList"></over-view>
    <ctrl-view v-else-if="overviewStatus.panelCode === 2" :module-code-list="overviewStatus.moduleCodeList" :key="overviewStatus.moduleCodeList"></ctrl-view>
</template>

<script>
    import ctrlView from "@components/panel/ctrlView";
    import overView from "@components/panel/overView";
    export default {
        name: "showPanel",
        components: {
            ctrlView, overView
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
            setInterval(this.getOverviewStatus, 1500);
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

<style scoped>

</style>