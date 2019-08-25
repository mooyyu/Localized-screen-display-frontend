<template>
    <div :style="'height:'+height+'px;'" class="collegeOverview w-100 row m-0 p-1 text-center">
        <div class="dock col h-100">
            <p class="text-danger">{{COData.zyul}}</p>
            <small class="text-white">专业</small>
        </div>
        <div class="dock col h-100">
            <p class="text-warning">{{COData.bjul}}</p>
            <small class="text-white">班级</small>
        </div>
        <div class="dock col h-100">
            <p class="text-success">{{COData.jsrs}}</p>
            <small class="text-white">教师</small>
        </div>
        <div class="dock col h-100">
            <p class="text-info">{{COData.xsrs}}</p>
            <small class="text-white">学生</small>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CollegeOverview",
        props: {
            height: Number
        },
        data() {
            return {
                COData: {
                    zyul: 0,
                    bjul: 0,
                    xsrs: 0,
                    jsrs: 0
                }
            }
        },
        mounted() {
            this.getData();
            setInterval(this.getData, 12600000)
        },
        methods: {
            getData() {
                this.global.axios.get(this.global.serverHost + '/data/collegeOverview', {
                    withCredentials: true
                }).then(res => {
                    this.COData = res.data
                })
            }
        }
    }
</script>

<style scoped>
    div.collegeOverview {
        border: 5px solid transparent;
        border-image: url("../../assets/simple-border.png") 26;
        box-sizing: border-box;
    }

    div.dock p {
        font-size: 36px;
        line-height: 32px;
        font-family: "Courier New",cursive;
        margin: 0;
    }

    div.dock small {
        font-size: 13px;
        line-height: 5px;
    }
</style>