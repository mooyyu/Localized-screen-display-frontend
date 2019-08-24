<template>
    <college-info-large v-if="moduleName === 'CollegeInfoLarge'"></college-info-large>
    <college-info-small v-else-if="moduleName === 'CollegeInfoSmall'"></college-info-small>
    <college-trend v-else-if="moduleName === 'CollegeTrend'"></college-trend>
    <profession-overview v-else-if="moduleName === 'ProfessionOverview'"></profession-overview>
    <profession-overview-vertical v-else-if="moduleName === 'ProfessionOverviewVertical'"></profession-overview-vertical>
    <hanging v-else-if="moduleName === 'Hanging'"></hanging>
    <popular-elective v-else-if="moduleName === 'PopularElective'"></popular-elective>
    <z-y-hanging-distribution v-else-if="moduleName === 'ZYHangingDistribution'"></z-y-hanging-distribution>
    <b-j-hanging-distribution v-else-if="moduleName === 'BJHangingDistribution'"></b-j-hanging-distribution>
    <stu-source-distribution v-else-if="moduleName === 'StuSourceDistribution'"></stu-source-distribution>
</template>

<script>
    import CollegeInfoLarge from "@components/chart/info/CollegeInfoLarge";
    import CollegeInfoSmall from "@components/chart/info/CollegeInfoSmall";
    import CollegeTrend from "@components/chart/overview/CollegeTrend";
    import ProfessionOverview from "@components/chart/overview/ProfessionOverview";
    import professionOverviewVertical from "@components/chart/overview/professionOverviewVertical";
    import Hanging from "@components/chart/overview/Hanging";
    import PopularElective from "@components/chart/overview/PopularElective";
    import ZYHangingDistribution from "@components/chart/overview/ZYHangingDistribution";
    import BJHangingDistribution from "@components/chart/overview/BJHangingDistribution";
    import StuSourceDistribution from "@components/chart/overview/StuSourceDistribution";

    export default {
        name: "module",
        props: {
            moduleName: String
        },
        components: {
            CollegeInfoLarge,
            CollegeInfoSmall,
            CollegeTrend,
            ProfessionOverview,
            professionOverviewVertical,
            Hanging,
            PopularElective,
            ZYHangingDistribution,
            BJHangingDistribution,
            StuSourceDistribution
        }
    }
</script>

<style scoped>

</style>