<template>
    <div class="nav m-0 p-0 w-100">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent w-100 d-flex">
            <a class="navbar-brand">
                <img src="../../assets/jmi_overview_logo.png" height="50" class="d-block align-top mr-3" alt="jmi_logo">
            </a>
            <span class="milky ml-auto">信息学院实时数据展示</span>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
    div.nav {
        height: 80px;
        overflow: hidden;
    }

    nav {
        height: 100%;
    }

    span.milky {
        font-family:"microsoft yahei", "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;;
        font-size: 40px;
        line-height: 80px;
        color: #120056;
        text-shadow: 0 8px 9px #6b8ec4, 0 -2px 1px #495dff;
        font-weight: bold;
    }
</style>