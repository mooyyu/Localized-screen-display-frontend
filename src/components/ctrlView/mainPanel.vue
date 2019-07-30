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
        </div>
    </div>
</template>

<script>
    import CollegeTrend from "@components/chart/overview/CollegeTrend"
    import ProfessionOverviewVertical from "@components/chart/overview/professionOverviewVertical"
    import PopularElective from "@components/chart/overview/PopularElective"
    import Hanging from "@components/chart/overview/Hanging"

    export default {
        name: "mainPanel",
        components: {
            CollegeTrend, ProfessionOverviewVertical, PopularElective, Hanging
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