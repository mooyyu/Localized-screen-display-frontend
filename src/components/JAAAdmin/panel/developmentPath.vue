<template>
    <div class="developmentPath pb-lg-5 px-5">
        <template v-for="(item, index) in developmentPath">
            <div :key="'developmentPath-' + index" :id="item.id" class="form-row mt-5 border border-top-0 rounded">
                <div class="input-group col-md-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">年份</span>
                    </div>
                    <input v-model="item.year" type="number" step="1" min="1970" class="form-control">
                </div>
                <div class="input-group col-md-9">
                    <div class="input-group-prepend">
                        <span class="input-group-text">取得成就</span>
                    </div>
                    <input v-model="item.info" type="text" class="form-control">
                </div>
                <div class="button my-2 w-100 d-flex justify-content-center">
                    <button @click="updateData(index)" class="btn btn-sm btn-outline-success mr-1" type="button">更新数据</button>
                    <button @click="deleteData(item.id)" class="btn btn-sm btn-outline-danger ml-1" type="button">删除数据</button>
                </div>
            </div>
        </template>
        <button type="button" @click="addData" class="btn btn-outline-dark btn-block my-4">添加新数据</button>

        <modal id="updateDevelopmentPath" title="更新数据" :body="modalBody"></modal>
    </div>
</template>

<script>
    import modal from "@components/bootstrap/modal"
    import 'bootstrap/dist/js/bootstrap.min'
    import $ from 'jquery'

    export default {
        name: "developmentPath",
        components: {
            modal
        },
        data() {
            return {
                developmentPath: [],
                modalBody: ''
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                this.global.axios.get(this.global.serverHost + '/backStage/getDevelopmentPath', {
                    withCredentials: true
                }).then(res => {
                    this.developmentPath = res.data
                })
            },
            updateData(idx) {
                if (this.checkUpdateData(this.developmentPath[idx].year, this.developmentPath[idx].info)) {
                    this.global.axios.post(this.global.serverHost + '/backStage/updateDevelopmentPath', {
                        id: this.developmentPath[idx].id,
                        year: this.developmentPath[idx].year,
                        info: this.developmentPath[idx].info
                    }, {
                        withCredentials: true
                    }).then(() => {
                        this.getData()
                        this.modalBody = '更新成功'
                        $('div#updateDevelopmentPathModal').modal('show')
                    })
                } else {
                    $('div#updateDevelopmentPathModal').modal('show')
                }
            },
            checkUpdateData(year, info) {
                if (year.search(/^(19|20)\d{2}$/) === -1) {
                    this.modalBody = '请填写正确的年份'
                    return false
                } else if (info === null || info.length === 0) {
                    this.modalBody = '请填写内容'
                    return false
                } else if (info.length > 50) {
                    this.modalBody = '内容长度不得超过50个字'
                    return false
                }
                return true
            },
            deleteData(id) {
                this.global.axios.get(this.global.serverHost + '/backStage/deleteDevelopmentPath', {
                    params: {
                        id: id
                    },
                    withCredentials: true
                }).then(() => {
                    this.getData()
                })
            },
            addData() {
                this.global.axios.get(this.global.serverHost + '/backStage/addDevelopmentPath', {
                    withCredentials: true
                }).then(() => {
                    this.getData()
                })
            }
        }
    }
</script>

<style scoped>

</style>