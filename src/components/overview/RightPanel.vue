<template>
    <div v-if="curStatus !== 0" class="rightPanel col p-0">
        <div class="top show-panel">
            <div class="chart pb-1">
                <profession-overview></profession-overview>
            </div>
        </div>
        <div class="bottom">
            <div class="chart pb-1">
                <college-info></college-info>
            </div>
        </div>
    </div>
    <div v-else class="rightPanel col p-0">
        <div class="show-panel all">
            <div class="chart pb-1">
                <bj-hanging-distribution></bj-hanging-distribution>
            </div>
        </div>
    </div>
</template>

<script>
    import professionOverview from '@components/chart/overview/ProfessionOverview'
    import CollegeInfo from '@components/overview/CollegeInfo'
    import BjHangingDistribution from "@components/chart/overview/BJHangingDistribution"
    export default {
        name: "RightPanel",
        components: {
            professionOverview, CollegeInfo, BjHangingDistribution
        },
        data() {
            return {
                curStatus: 0
            }
        },
        mounted() {
            setInterval(() => {this.curStatus = (this.curStatus + 1) % 6}, 10000)
        }
    }
</script>

<style scoped>
    div.top {
        width: 100%;
        height: 55%;
        top: 0;
        left: 0;
        border: 20px solid transparent;
        border-image: url("../../assets/border-image-1.png") 20 36;
    }

    div.bottom {
        position: absolute;
        width: 100%;
        height: 42%;
        left: 0;
        bottom: 0;
        background-image: url("../../assets/mask.png");
        background-repeat: no-repeat;
        background-size: cover;
        border: 5px solid transparent;
        border-right: none;
        border-image: url("../../assets/simple-border.png") 26;
    }

    div.all {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 20px solid transparent;
        border-image: url("../../assets/border-image-1.png") 20 36;
    }

    div.show-panel::after {
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