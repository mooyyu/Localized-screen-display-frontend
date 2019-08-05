<template>
    <div class="nav m-0 p-0 w-100">
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom fixed-top">
            <a @click="selectPanel('showHello')" class="navbar-brand">
                <img src="../../assets/jmi_logo.png" height="30" class="d-inline-block align-top mr-3" alt="jmi_logo">
                信息学院大屏展示后台管理系统
            </a>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "navbar",
        data() {
            return {
            }
        },
        mounted() {
        },
        methods: {
            selectPanel(panelName) {
                this.$parent.selectPanel(panelName)
            }
        }
    }
</script>

<style scoped>
    div.nav {
        height: 57px;
    }
    nav a {
        cursor: pointer;
    }
</style>