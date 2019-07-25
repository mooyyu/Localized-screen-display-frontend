<template>
    <div class="main">
        <div class="statistic show-panel">
            <college-overview></college-overview>
        </div>
        <div class="contain show-panel">
            <div class="chart">
                <college-trend></college-trend>
            </div>
        </div>
    </div>
</template>

<script>
    import collegeTrend from '@components/chart/overview/CollegeTrend'
    import collegeOverview from '@components/overview/CollegeOverview'

    export default {
        name: 'app',
        components: {
            collegeTrend, collegeOverview
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

    div.chart div {
        max-height: 100%;
        min-height: 100%;
    }
</style>