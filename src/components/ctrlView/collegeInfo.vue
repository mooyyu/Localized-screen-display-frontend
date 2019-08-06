<template>
    <div v-if="loaded" class="collegeInfo p-lg-5 text-white">
        <div class="display-4 px-lg-3 border border-top-0 mb-2 rounded">
            {{collegeInfo[index].title}}
        </div>
        <div class="rounded px-lg-3 pt-lg-3 border border-bottom-0">
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
                    setInterval(this.updateIdx, 5000)
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
    p {
        white-space: pre-wrap;
    }
</style>