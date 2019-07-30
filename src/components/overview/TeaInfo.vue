<template>
    <div v-if="loaded" class="teaInfo row pt-2 pl-2 text-white">
        <div class="col-3">
            <h2>优秀教师</h2>
            <img class="d-block w-100" :src="teaList[curTea].avatar" alt="avatar">
        </div>
        <div class="col-9">
            <h2>{{teaList[curTea].name}}</h2>
            <hr>
            <p>{{teaList[curTea].intro}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeaInfo",
        data() {
            return {
                teaList: null,
                curTea: 0,
                loaded: false
            }
        },
        mounted() {
            this.global.axios.get(this.global.serverHost + '/info/excellentTea', {
                withCredentials: true
            }).then(res => {
                this.teaList = res.data
                this.loaded = true
                setInterval(this.updateTea, 5000)
            })
        },
        methods: {
            updateTea() {
                this.curTea = (this.curTea + 1) % this.teaList.length
            }
        }
    }
</script>

<style scoped>

</style>