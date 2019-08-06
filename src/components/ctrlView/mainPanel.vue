<template>
    <div class="mainPanel p-2">
        <div class="chart">
            <template v-if="chartName === 'collegeTrend'">
                <college-trend></college-trend>
            </template>
            <template v-else-if="chartName === 'professionOverview'">
                <profession-overview-vertical></profession-overview-vertical>
            </template>
            <template v-else-if="chartName === 'popularElective'">
                <popular-elective></popular-elective>
            </template>
            <template v-else-if="chartName === 'hanging'">
                <hanging></hanging>
            </template>
            <template v-else-if="chartName === 'stuSourceDistribution'">
                <stu-source-distribution></stu-source-distribution>
            </template>
            <template v-else-if="chartName === 'ZYHangingDistribution'">
                <zy-hanging-distribution></zy-hanging-distribution>
            </template>
            <template v-else-if="chartName === 'BJHangingDistribution'">
                <bj-hanging-distribution></bj-hanging-distribution>
            </template>
            <template v-else-if="chartName === 'collegeInfo'">
                <college-info></college-info>
            </template>
        </div>
    </div>
</template>

<script>
    import CollegeTrend from "@components/chart/overview/CollegeTrend"
    import ProfessionOverviewVertical from "@components/chart/overview/professionOverviewVertical"
    import PopularElective from "@components/chart/overview/PopularElective"
    import Hanging from "@components/chart/overview/Hanging"
    import StuSourceDistribution from "@components/chart/overview/StuSourceDistribution"
    import ZyHangingDistribution from "@components/chart/overview/ZYHangingDistribution"
    import BjHangingDistribution from "@components/chart/overview/BJHangingDistribution"

    import collegeInfo from "@components/ctrlView/collegeInfo"

    export default {
        name: "mainPanel",
        components: {
            CollegeTrend,
            ProfessionOverviewVertical,
            PopularElective,
            Hanging,
            StuSourceDistribution,
            ZyHangingDistribution,
            BjHangingDistribution,
            collegeInfo
        },
        props: {
            chartName: String
        }
    }
</script>

<style scoped>
    div.mainPanel {
        height: calc(100vh - 57px - 80px - 80px);
        width: calc(100vw - 260px);
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