<template>
    <div class="collegeOverview w-100 h-100 row text-center">
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
            this.global.axios.get(this.global.serverHost + '/data/collegeOverview', {
                withCredentials: true
            }).then(res => {
                this.COData = res.data
            })
        }
    }
</script>

<style scoped>
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
</style>