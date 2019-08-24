<template>
    <div class="asideBar h-100 pr-0">
        <div class="idx">
            <div class="accordion h-100 bg-light border-right" id="accordion">
                <div class="card rounded-0 border-0 bg-light">
                    <aside-card-header id="headingOne" name="系统设定" icon="fa fa-gears" collapse="collapseOne"></aside-card-header>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <ul :class="cardBodyClass">
                            <li @click="selectPanel('setParam')" :class="liClass">参数&数据 <i class="fa fa-database"></i></li>
                        </ul>
                    </div>
                </div>
                <div class="card border-right-0 bg-light">
                    <aside-card-header id="headingTwo" name="学院信息" icon="fa fa-institution" collapse="collapseTwo"></aside-card-header>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <ul :class="cardBodyClass">
                            <li @click="selectPanel('collegeInfo')" :class="liClass">学院介绍 <i class="fa fa-info-circle"></i></li>
                            <li @click="selectPanel('developmentPath')" :class="liClass">发展历程 <i class="fa fa-line-chart"></i></li>
                        </ul>
                    </div>
                </div>
                <div class="card border-right-0 bg-light">
                    <aside-card-header id="headingThree" name="海院人物" icon="fa fa-mortar-board" collapse="collapseThree"></aside-card-header>
                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <ul :class="cardBodyClass">
                            <li @click="selectPanel('excellentTea')" :class="liClass">优秀教师</li>
                            <li @click="selectPanel('excellentStu')" :class="liClass">学生榜样</li>
                            <li @click="selectPanel('excellentFri')" :class="liClass">杰出校友</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="info border w-100 text-center text-muted">
            <small>jmi©2019<br>mooyyu Beta 0.26</small>
        </div>
    </div>
</template>

<script>
    import asideCardHeader from "@components/bootstrap/asideCardHeader";
    export default {
        name: "asideBar",
        components: {
            asideCardHeader
        },
        data() {
            return {
                liClass: "list-group-item py-lg-2 pr-0 ml-1",
                cardBodyClass: "card-body list-group list-group-flush p-0"
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