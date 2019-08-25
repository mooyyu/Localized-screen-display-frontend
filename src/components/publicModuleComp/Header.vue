<template>
    <div :style="'height:'+height+'px;'" class="nav m-0 p-0 w-100">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent w-100 d-flex">
            <a class="navbar-brand">
                <img src="../../assets/jmi_overview_logo.png" :height="height/3*2" class="d-block align-top mr-3" alt="jmi_logo">
            </a>
            <span :style="'font-size:'+height/2+'px;line-height:'+height+'px;'" class="milky ml-auto">{{title}}</span>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            height: Number,
            title: String
        }
    }
</script>

<style scoped>
    div.nav {
        overflow: hidden;
    }

    nav {
        height: 100%;
    }

    span.milky {
        font-family:"microsoft yahei", "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;;
        color: #120056;
        text-shadow: 0 8px 9px #6b8ec4, 0 -2px 1px #495dff;
        font-weight: bold;
    }
</style>