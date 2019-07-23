<template>
    <div class="rightPanel col p-0">
        <div class="top show-panel">
            <div class="chart pb-1">
                <div class="chartTitle text-center">
                    <span>信息XXXXXXXXXX图</span>
                </div>
                <div class="chartBody">
                    <scatter-demo></scatter-demo>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="chart pb-1">
                <div class="chartTitle text-center">
                    <span>历年学生数量和取得奖项图</span>
                </div>
                <div class="chartBody">
                    <stu-and-awards-over-years></stu-and-awards-over-years>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import StuAndAwardsOverYears from '../chart/overview/StuAndAwardsOverYears'
    import ScatterDemo from '../chart/overview/ScatterDemo'
    export default {
        name: "RightPanel",
        components: {
            StuAndAwardsOverYears, ScatterDemo
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

    div.show-panel::after {
        background-image: url("../../assets/background.jpg");
    }

    div.chart {
        width: 100%;
        height: 100%;
    }

    div.chartTitle {
        height: 15%;
    }
    
    div.chartTitle span {
        background-color: #13275e;
        color: #c8f7fa;
        font-size: 3vh;
    }

    div.chartBody {
        height: 85%;
    }

    div.chartBody div {
        max-height: 100%;
        min-height: 100%;
    }
</style>