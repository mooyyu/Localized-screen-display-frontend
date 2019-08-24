<template>
    <div class="leftPanel col row m-0">
        <div class="top row m-0 show-panel">
            <div class="chart h-100 col-6 m-0 p-0">
                <module v-if="curStatus === 0" :module-name="moduleList[0].module"></module>
                <module v-if="curStatus === 1" :module-name="moduleList[1].module"></module>
                <module v-if="curStatus === 2" :module-name="moduleList[2].module"></module>
            </div>
            <div class="chart h-100 col-6 m-0 p-0">
                <module v-if="curStatus === 0" :module-name="moduleList[1].module"></module>
                <module v-if="curStatus === 1" :module-name="moduleList[2].module"></module>
                <module v-if="curStatus === 2" :module-name="moduleList[0].module"></module>
            </div>
        </div>
        <div class="bottom show-panel">
            <div class="chart h-100">
                <module :module-name="moduleList[3].module"></module>
            </div>
        </div>
    </div>
</template>

<script>
    import module from "@components/chart/module";
    export default {
        name: "leftPanel",
        data() {
            return {
                curStatus: 0
            }
        },
        props: {
            moduleList: Array
        },
        components: {
            module
        },
        mounted() {
            setInterval(() => {this.curStatus = (this.curStatus + 1) % 3}, 10000)
        }
    }
</script>

<style scoped>
    div.top {
        height: 55%;
        width: 100%;
        left: 0;
        top: 0;
        border: 20px solid transparent;
        border-image: url("../../assets/border-image-1.png") 20 36;
    }

    div.show-panel::after {
        background-image: url("../../assets/background.jpg");
    }

    div.bottom {
        position: absolute;
        height: 45%;
        width: 100%;
        left: 0;
        top: 55%;
        border: 20px solid transparent;
        border-image: url("../../assets/border-image-1.png") 20 36;
    }

    div.chart div {
        min-height: 100%;
        max-height: 100%;
    }
</style>