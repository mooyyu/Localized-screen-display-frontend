<template>
    <div v-if="loaded" class="mainPanel p-2">
        <div class="chart">
            <module :module-name="moduleList[cur].module"></module>
        </div>
    </div>
</template>

<script>
    import module from "@components/chart/module";

    export default {
        name: "mainPanel",
        components: {
            module
        },
        props: {
            moduleList: Array
        },
        data() {
            return {
                loaded: false,
                cur: 0
            }
        },
        mounted() {
            if (this.moduleList.length > 0) {
                this.loaded = true;
                setInterval(() => {
                    this.cur = (this.cur + 1) % this.moduleList.length
                }, 3000)
            }
        }
    }
</script>

<style scoped>
    div.mainPanel {
        height: calc(100vh - 57px - 80px - 80px);
        width: 100%;
        /*width: calc(100vw - 260px);*/
    }

    div.mainPanel div.chart {
        width: 100%;
        height: 100%;
        border: 20px solid transparent;
        border-image: url("../../assets/border-image-1.png") 20 36;
    }

    div.mainPanel div.chart div {
        min-height: 100%;
        max-height: 100%;
    }
</style>