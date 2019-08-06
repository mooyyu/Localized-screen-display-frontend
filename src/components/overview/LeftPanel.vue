<template>
    <div class="leftPanel col row m-0">
        <div class="top row m-0 show-panel">
            <div v-if="curStatus === 0" class="chart h-100 col-6 m-0 p-0">
                <hanging></hanging>
            </div>
            <div v-else-if="curStatus === 1" class="chart h-100 col-6 m-0 p-0">
                <popular-elective></popular-elective>
            </div>
            <div v-else-if="curStatus === 2" class="chart h-100 col-6 m-0 p-0">
                <stu-source-distribution></stu-source-distribution>
            </div>
            <div v-if="curStatus === 2" class="chart h-100 col-6 m-0 p-0">
                <hanging></hanging>
            </div>
            <div v-else-if="curStatus === 0" class="chart h-100 col-6 m-0 p-0">
                <popular-elective></popular-elective>
            </div>
            <div v-else-if="curStatus === 1" class="chart h-100 col-6 m-0 p-0">
                <stu-source-distribution></stu-source-distribution>
            </div>
        </div>
        <div class="bottom show-panel">
            <div class="chart h-100">
                <zy-hanging-distribution></zy-hanging-distribution>
            </div>
        </div>
    </div>
</template>

<script>
    import popularElective from '@components/chart/overview/PopularElective'
    import Hanging from '@components/chart/overview/Hanging'
    import ZyHangingDistribution from "@components/chart/overview/ZYHangingDistribution"
    import StuSourceDistribution from "@components/chart/overview/StuSourceDistribution"
    export default {
        name: "leftPanel",
        data() {
            return {
                curStatus: 0
            }
        },
        components: {
            popularElective, Hanging, ZyHangingDistribution, StuSourceDistribution
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