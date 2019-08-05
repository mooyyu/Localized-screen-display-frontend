<template>
    <div class="mainPanel border-bottom">
        <show-hello v-if="panel === 'showHello'"></show-hello>
        <set-param v-else-if="panel === 'setParam'"></set-param>
        <college-info v-else-if="panel === 'collegeInfo'"></college-info>
        <development-path v-else-if="panel === 'developmentPath'"></development-path>
    </div>
</template>

<script>
    import showHello from "@components/JAAAdmin/panel/showHello"
    import setParam from "@components/JAAAdmin/panel/setParam"
    import collegeInfo from "@components/JAAAdmin/panel/collegeInfo"
    import developmentPath from "@components/JAAAdmin/panel/developmentPath"

    export default {
        name: "mainPanel",
        components: {
            showHello, setParam, collegeInfo, developmentPath
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