<template>
    <div v-if="loaded" class="stuInfo h-100 w-100">
        <template v-for="item in [0,1,2,3,4]">
            <div :key="'mask' + item" class="mask pb-2 row m-0">
                <div class="avatar col-4 p-0">
                    <img class="d-block w-100" :src="stuInfo[maskList[item]].avatar" alt="avatar">
                </div>
                <div class="col-8 pr-0 w-100 h-100 text-white">
                    <h4>{{stuInfo[maskList[item]].title}}</h4>
                    <hr>
                    <p>{{stuInfo[maskList[item]].name}}<br>{{stuInfo[0].bjmc}}</p>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "StuInfo",
        data() {
            return {
                loaded: false,
                stuInfo: null,
                maskList: [0,1,2,3,4,5]
            }
        },
        mounted() {
            this.global.axios.get(this.global.serverHost + '/info/excellentStu', {
                withCredentials: true
            }).then(res => {
                this.stuInfo = res.data
                this.loaded = true
                setInterval(this.updateMask, 2000)
            })
        },
        methods: {
            updateMask() {
                this.maskList = this.maskList.map(item => (item + 1) % 10)
            }
        }
    }
</script>

<style scoped>
    div.mask {
        width: 100%;
        height: 20%;
        background-image: url("../../assets/mask.png");
        background-repeat: no-repeat;
        border: 5px solid transparent;
        border-left: none;
        border-bottom: none;
        border-image: url("../../assets/simple-border.png") 26;
        overflow: hidden;
    }
</style>