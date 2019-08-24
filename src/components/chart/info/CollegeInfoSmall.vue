<template>
    <div v-if="loaded" class="collegeInfo text-white">
        <div class="title border border-top-0 mb-2 rounded">
            {{collegeInfo[index].title}}
        </div>
        <div class="rounded pt-3 border border-bottom-0">
            <p>{{collegeInfo[index].intro}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "collegeInfo",
        data() {
            return {
                collegeInfo: [],
                loaded: false,
                index: 0
            }
        },
        mounted() {
            this.global.axios.get(this.global.serverHost + '/data/collegeInfo', {
                withCredentials: true
            }).then(res => {
                this.collegeInfo = res.data
                if (this.collegeInfo.length !== 0) {
                    this.loaded = true
                    setInterval(this.updateIdx, 3000)
                }
            })
        },
        methods: {
            updateIdx() {
                this.index = (this.index + 1) % this.collegeInfo.length
            }
        }
    }
</script>

<style scoped>
    div.collegeInfo {
        overflow-y: scroll;
    }
    div.title {
        font-size: 3vh;
    }
    p {
        white-space: pre-wrap;
        font-size: 1.7vh;
    }
</style>