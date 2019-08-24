<template>
    <div class="card-header bg-light px-0" :id="id">
        <h2 class="mb-0">
            <button class="btn btn-outline-light btn-block text-dark text-left" type="button" data-toggle="collapse" :data-target="'#' + collapse" aria-expanded="false" :aria-controls="collapse">
                {{name}} <i :class="icon"></i>
            </button>
        </h2>
    </div>
</template>

<script>
    export default {
        name: "asideCardHeader",
        props: {
            id: String,
            collapse: String,
            name: String,
            icon: String
        }
    }
</script>

<style scoped>
</style>