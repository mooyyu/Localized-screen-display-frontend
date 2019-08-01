<template>
    <div class="mainPanel border-bottom">
        <show-hello v-if="panel === 'showHello'"></show-hello>
        <set-param v-else-if="panel === 'setParam'"></set-param>
        <excellent-tea v-else-if="panel === 'excellentTea'"></excellent-tea>
        <excellent-stu v-else-if="panel === 'excellentStu'"></excellent-stu>
    </div>
</template>

<script>
    import showHello from "@components/JAAAdmin/panel/showHello"
    import setParam from "@components/JAAAdmin/panel/setParam"
    import excellentStu from "@components/JAAAdmin/panel/excellentStu"
    import excellentTea from "@components/JAAAdmin/panel/excellentTea"

    export default {
        name: "mainPanel",
        components: {
            showHello, setParam, excellentTea, excellentStu
        },
        props: {
            panel: String
        }
    }
</script>

<style scoped>
    div.mainPanel {
        height: calc(100vh - 57px);
        width: calc(100vw - 260px);
        overflow-y: scroll;
    }
</style>