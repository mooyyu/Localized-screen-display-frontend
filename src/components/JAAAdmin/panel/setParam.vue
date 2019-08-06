<template>
    <div class="setParam pb-lg-5 px-5">
        <div v-if="loaded" class="form-row mt-5 border border-top-0 rounded">
            <div class="input-group m-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">学院名称</span>
                </div>
                <input readonly :value="JAAStatus.xymc" type="text" class="form-control">
            </div>
            <div class="input-group m-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">最新年级</span>
                </div>
                <input v-model="JAAStatus.dqszj" type="text" class="form-control">
            </div>
            <div class="input-group m-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">学年</span>
                </div>
                <input v-model="JAAStatus.xn" type="text" class="form-control">
            </div>
            <div class="input-group m-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">学期</span>
                </div>
                <input v-model="JAAStatus.xq" type="text" class="form-control">
            </div>
            <div class="button my-2 w-100 d-flex justify-content-center">
                <button @click="updateData" class="btn btn-sm btn-outline-success" type="button">更新数据</button>
            </div>
        </div>

        <modal id="setParam" title="提示" :body="modalBody"></modal>
    </div>
</template>

<script>
    import modal from "@components/bootstrap/modal"
    import 'bootstrap/dist/js/bootstrap.min'
    import $ from 'jquery'

    export default {
        name: "setParam",
        components: {
            modal
        },
        data() {
            return {
                JAAStatus: null,
                loaded: false,
                modalBody: ''
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                this.global.axios.get(this.global.serverHost + '/backStage/getJAAStatus', {
                    withCredentials: true
                }).then(res => {
                    this.JAAStatus = res.data
                    this.JAAStatus.xq = this.JAAStatus.xq.toString()
                    this.loaded = true
                })
            },
            updateData() {
                if (this.checkData()) {
                    this.global.axios.post(this.global.serverHost + '/backStage/setJAAStatus', {
                        xymc: this.JAAStatus.xymc,
                        dqszj: this.JAAStatus.dqszj,
                        xn: this.JAAStatus.xn,
                        xq: this.JAAStatus.xq
                    }, {
                        withCredentials: true
                    }).then(() => {
                        this.getData()
                        this.modalBody = '更新成功'
                    })
                }
                $('div#setParamModal').modal('show')
            },
            checkData() {
                if (this.JAAStatus.dqszj.search(/^(19|20)\d{2}$/) === -1) {
                    this.modalBody = '请填写正确的最新年级';
                    return false
                }
                let xns = this.JAAStatus.xn.split('-')
                if (xns.length !== 2 ||
                    this.JAAStatus.xn.search(/^(19|20)\d{2}-(19|20)\d{2}$/) === -1 ||
                    xns[1] - xns[0] !== 1
                ) {
                    this.modalBody = '请填写正确的学年';
                    return false
                }
                if (this.JAAStatus.xq.search(/^[12]$/) === -1) {
                    this.modalBody = '请填写正确的学期';
                    return false
                }
                return true
            }
        }
    }
</script>

<style scoped>

</style>