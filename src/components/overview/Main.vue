<template>
    <div class="main">
        <div class="statistic show-panel row text-center">
            <div class="dock col h-100">
                <p class="text-danger">54</p>
                <small class="text-white">专业</small>
            </div>
            <div class="dock col h-100">
                <p class="text-warning">123</p>
                <small class="text-white">班级</small>
            </div>
            <div class="dock col h-100">
                <p class="text-success">89</p>
                <small class="text-white">教师</small>
            </div>
            <div class="dock col h-100">
                <p class="text-info">989</p>
                <small class="text-white">学生</small>
            </div>
            <div class="dock col h-100">
                <p class="text-primary">13</p>
                <small class="text-white">奖项</small>
            </div>
        </div>
        <div class="contain show-panel row">
            <div class="chart pb-1 col-6">
                <div class="chartTitle text-center">
                    <span>信息学院XXXXXXX图</span>
                </div>
                <div class="chartBody">
                    <radar-demo></radar-demo>
                </div>
            </div>
            <div class="chart pb-1 col-6">
                <div class="chartTitle text-center">
                    <span>信息学院XXXXXXX图</span>
                </div>
                <div class="chartBody">
                    <polar-demo></polar-demo>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RadarDemo from '../chart/overview/RadarDemo'
    import PolarDemo from '../chart/overview/PolarDemo'

    export default {
        name: 'app',
        components: {
            RadarDemo, PolarDemo
        }
    }
</script>

<style scoped>
    div.main {
        height: 90%;
        position: relative;
    }

    div.statistic {
        position: absolute;
        height: 16%;
        width: 96%;
        left: 2%;
        top: 2%;
        border: 5px solid transparent;
        border-image: url("../../assets/simple-border.png") 26;
    }

    div.dock p {
        font-size: 6vh;
        line-height: 5vh;
        font-family: "Courier New",cursive;
        margin: 2vh 0 0 0;
    }

    div.dock small {
        font-size: 3vh;
        line-height: 1vh;
    }

    div.contain {
        height: 80%;
        width: 100%;
        left: 0;
        top: 20%;
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

    div.chartTitle {
        height: 10%;
    }

    div.chartTitle span {
        background-color: #13275e;
        color: #c8f7fa;
        font-size: 3vh;
    }

    div.chartBody {
        height: 90%;
    }

    div.chartBody div {
        max-height: 100%;
        min-height: 100%;
    }
</style>