<template>
    <div class="collegeInfo pb-lg-5 px-5">
        <template v-for="(item, index) in collegeInfo">
            <div :key="'collegeInfo-' + index" :id="item.id" class="form-row mt-5 border border-top-0 rounded">
                <div class="input-group mx-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text">标题</span>
                    </div>
                    <input v-model="item.title" type="text" class="form-control">
                </div>
                <div class="input-group mx-2 mt-1">
                    <div class="input-group-prepend">
                        <span class="input-group-text">内容</span>
                    </div>
                    <textarea v-model="item.intro" class="form-control" rows="5" aria-label="With textarea"></textarea>
                </div>
                <div class="button my-2 w-100 d-flex justify-content-center">
                    <button @click="updateData(index)" class="btn btn-sm btn-outline-success mr-1" type="button">更新数据</button>
                    <button @click="deleteData(item.id)" class="btn btn-sm btn-outline-danger ml-1" type="button">删除数据</button>
                </div>
            </div>
        </template>

        <button type="button" @click="addData" class="btn btn-outline-dark btn-block my-4">添加新数据</button>

        <modal id="updateCollegeInfo" title="更新数据" :body="modalBody"></modal>
    </div>
</template>

<script>
    import modal from "@components/bootstrap/modal"
    import 'bootstrap/dist/js/bootstrap.min'
    import $ from 'jquery'

    export default {
        name: "excellentTea",
        components: {
            modal
        },
        data() {
            return {
                modalBody: '',
                collegeInfo: []
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData() {
                this.global.axios.get(this.global.serverHost + '/backStage/getCollegeInfo', {
                    withCredentials: true
                }).then(res => {
                    this.collegeInfo = res.data
                })
            },
            updateData(idx) {
                if (this.checkUpdateData(this.collegeInfo[idx].title, this.collegeInfo[idx].intro)) {
                    this.global.axios.post(this.global.serverHost + '/backStage/updateCollegeInfo', {
                        id: this.collegeInfo[idx].id,
                        title: this.collegeInfo[idx].title,
                        intro: this.collegeInfo[idx].intro
                    }, {
                        withCredentials: true
                    }).then(() => {
                        this.getData()
                        this.modalBody = '更新成功'
                        $('div#updateCollegeInfoModal').modal('show')
                    })
                } else {
                    $('div#updateCollegeInfoModal').modal('show')
                }
            },
            checkUpdateData(title, intro) {
                if (title === null || title.length === 0) {
                    this.modalBody = '请填写标题'
                    return false
                } else if (intro === null || intro.length === 0) {
                    this.modalBody = '请填写内容'
                    return false
                } else if (intro.length > 500) {
                    this.modalBody = '内容长度不得超过500个字'
                    return false
                } else if (title.length > 10) {
                    this.modalBody = '标题长度不得超过10个字'
                    return false
                }
                return true
            },
            deleteData(id) {
                this.global.axios.get(this.global.serverHost + '/backStage/deleteCollegeInfo', {
                    params: {
                        id: id
                    },
                    withCredentials: true
                }).then(() => {
                    this.getData()
                })
            },
            addData() {
                this.global.axios.get(this.global.serverHost + '/backStage/addCollegeInfo', {
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