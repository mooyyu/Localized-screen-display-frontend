<template>
    <div class="asideBar h-100 pr-0">
        <ul class="list-group list-group-flush text-white text-nowrap pr-2 pb-lg-3">
            <li @click="selectChart('collegeTrend')" class="list-group-item">学院建设趋势</li>
            <li @click="selectChart('professionOverview')" class="list-group-item">专业发展情况</li>
            <li @click="selectChart('popularElective')" class="list-group-item">最受欢迎选修课</li>
            <li @click="selectChart('hanging')" class="list-group-item">课程挂科率排名图</li>
            <li @click="selectChart('stuSourceDistribution')" class="list-group-item">生源地分布图</li>
            <li @click="selectChart('ZYHangingDistribution')" class="list-group-item">各专业挂科分布图</li>
            <li @click="selectChart('BJHangingDistribution')" class="list-group-item">各班级挂科分布图</li>
            <li @click="selectChart('collegeInfo')" class="list-group-item">学院介绍</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "asideBar",
        components: {
        },
        data() {
            return {
            }
        },
        methods: {
            selectChart(chartName) {
                this.$parent.selectChart(chartName)
            }
        }
    }
</script>

<style scoped>
    div.asideBar {
        width: 260px;
    }

    ul {
        height: 100%;
        width: 100%;
        overflow-y: scroll;
    }

    ul li {
        background-color: transparent;
        background-image: url("../../assets/mask.png");
        background-repeat: no-repeat;
        background-size: cover;
        line-height: 60px;
        padding: 30px 0 0 50px;
        cursor: pointer;
        font-size: 20px;
        color: #d8d8d8;
        text-shadow: 2px 2px 0 rgb(64, 64, 64), 2px -2px 0 rgb(22, 47, 56);
    }
</style>