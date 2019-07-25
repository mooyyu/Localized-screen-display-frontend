<template>
    <div class="leftPanel col row m-0">
        <div class="left show-panel">
            <div class="chart h-50">
                <hanging></hanging>
            </div>
            <div class="chart h-50">
                <popular-elective></popular-elective>
            </div>
        </div>
        <div class="right pl-3">
            <stu-info></stu-info>
        </div>
    </div>
</template>

<script>
    import popularElective from '@components/chart/overview/PopularElective'
    import Hanging from '@components/chart/overview/Hanging'
    import stuInfo from '@components/overview/StuInfo'
    export default {
        name: "leftPanel",
        components: {
            popularElective, Hanging, stuInfo
        }
    }
</script>

<style scoped>
    div.left {
        height: 100%;
        width: 60%;
        left: 0;
        top: 0;
        border: 20px solid transparent;
        border-image: url("../../assets/border-image-1.png") 20 36;
    }

    div.show-panel::after {
        background-image: url("../../assets/background.jpg");
    }

    div.right {
        position: absolute;
        height: 100%;
        width: 40%;
        left: 60%;
        top: 0;
    }

    div.chart div {
        min-height: 100%;
        max-height: 100%;
    }
</style>