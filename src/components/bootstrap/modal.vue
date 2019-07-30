<template>
    <div class="modal fade" :id="id + 'Modal'" tabindex="-1" role="dialog" :aria-labelledby="id + 'ModalLabel'" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" :id="id + 'ModalLabel'">{{ title }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    {{ body }}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-dark" data-dismiss="modal">Close</button>
                    <button v-if="confirm === true" @click="confirmed" type="button" class="btn btn-outline-danger">确认</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "modal",
        props: {
            id: String,
            title: String,
            body: String,
            confirm: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            confirmed() {
                this.$parent.confirmed()
            }
        }
    }
</script>

<style scoped>
</style>