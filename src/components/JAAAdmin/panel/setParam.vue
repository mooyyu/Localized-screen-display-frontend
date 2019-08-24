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
                <button @click="updateParam" :disabled="buttonStatus" class="btn btn-sm btn-outline-success" type="button">更新参数</button>
                <button @click="updateParamAndData" :disabled="buttonStatus" class="btn btn-sm btn-outline-danger mx-2" type="button">更新参数&数据</button>
                <button @click="updateData" :disabled="buttonStatus" class="btn btn-sm btn-outline-primary" type="button">更新数据</button>
            </div>
        </div>

        <div class="alert alert-warning mt-2" role="alert">
            <h4 class="alert-heading">Tip!</h4>
            <ul>
                <li>此处数据指教务数据,参数也仅用于教务数据。有关学院信息、海院人物的数据无需在此处更新！！！</li>
                <li>教务信息一般每学期仅需更新一次,一般情况下直接点击<span class="badge badge-pill badge-danger">更新参数&数据</span>按钮即可.</li>
                <li>更新数据涉及大量数据操作,请勿短时间内重复多次点击按钮！！！</li>
            </ul>
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
                modalBody: '',
                buttonStatus: false
            }
        },
        mounted() {
            this.getParam()
        },
        methods: {
            getParam() {
                this.global.axios.get(this.global.serverHost + '/backStage/getJAAStatus', {
                    withCredentials: true
                }).then(res => {
                    this.JAAStatus = res.data
                    this.JAAStatus.xq = this.JAAStatus.xq.toString()
                    this.loaded = true
                })
            },
            updateParam() {
                if (this.checkParam()) {
                    this.buttonStatus = true;
                    this.global.axios.post(this.global.serverHost + '/backStage/setJAAStatus', {
                        xymc: this.JAAStatus.xymc,
                        dqszj: this.JAAStatus.dqszj,
                        xn: this.JAAStatus.xn,
                        xq: this.JAAStatus.xq
                    }, {
                        withCredentials: true
                    }).then(() => {
                        this.getParam();
                        this.modalBody = '参数更新成功'
                    }).catch(() => {
                        this.modalBody = '数据更新失败'
                    }).finally(() => {
                        $('div#setParamModal').modal('show')
                        this.buttonStatus = false
                    })
                }
            },
            updateData() {
                this.buttonStatus = true;
                this.global.axios.get(this.global.serverHost + '/backStage/updateDataFromRaw', {
                    withCredentials: true
                }).then(() => {
                    this.getParam();
                    this.modalBody = '数据更新成功'
                }).catch(() => {
                    this.modalBody = '数据更新失败'
                }).finally(() => {
                    $('div#setParamModal').modal('show')
                    this.buttonStatus = false
                })
            },
            updateParamAndData() {
                if (this.checkParam()) {
                    this.buttonStatus = true;
                    this.global.axios.post(this.global.serverHost + '/backStage/updateParamAndData', {
                        xymc: this.JAAStatus.xymc,
                        dqszj: this.JAAStatus.dqszj,
                        xn: this.JAAStatus.xn,
                        xq: this.JAAStatus.xq
                    }, {
                        withCredentials: true
                    }).then(() => {
                        this.getParam();
                        this.modalBody = '参数&数据更新成功'
                    }).catch(() => {
                        this.modalBody = '参数&数据更新失败'
                    }).finally(() => {
                        $('div#setParamModal').modal('show')
                        this.buttonStatus = false
                    })
                }
            },
            checkParam() {
                if (this.JAAStatus.dqszj.search(/^(19|20)\d{2}$/) === -1) {
                    this.modalBody = '请填写正确的最新年级';
                    $('div#setParamModal').modal('show')
                    return false
                }
                let xns = this.JAAStatus.xn.split('-')
                if (xns.length !== 2 ||
                    this.JAAStatus.xn.search(/^(19|20)\d{2}-(19|20)\d{2}$/) === -1 ||
                    xns[1] - xns[0] !== 1
                ) {
                    this.modalBody = '请填写正确的学年';
                    $('div#setParamModal').modal('show')
                    return false
                }
                if (this.JAAStatus.xq.search(/^[12]$/) === -1) {
                    this.modalBody = '请填写正确的学期';
                    $('div#setParamModal').modal('show')
                    return false
                }
                return true
            }
        }
    }
</script>

<style scoped>

</style>