<template>
    <div class="asideBar h-100 pr-0">
        <div class="idx border-right">
            <ul class="list-group list-group-flush">
                <li @click="selectPanel('setParam')" class="list-group-item">参数设定 <i class="fa fa-edit"></i></li>
                <li @click="selectPanel('collegeInfo')" class="list-group-item">学院介绍 <i class="fa fa-info-circle"></i></li>
                <li @click="selectPanel('developmentPath')" class="list-group-item">发展历程 <i class="fa fa-line-chart"></i></li>
            </ul>
        </div>
        <div class="info border w-100 text-center text-muted">
            <small>jmi©2019<br>mooyyu Beta 0.26</small>
        </div>
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
            selectPanel(panelName) {
                this.$parent.selectPanel(panelName)
            }
        }
    }
</script>

<style scoped>
    div.asideBar {
        width: 260px;
    }
    div.idx {
        height: calc(100vh - 114px);
        overflow-y: scroll;
    }
    div.info {
        height: 57px;
    }
    ul li {
        cursor: pointer;
    }
</style>