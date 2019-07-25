<template>
    <div class="overview px-1">
        <div class="panel">
            <college-overview></college-overview>
        </div>
    </div>
</template>

<script>
    import collegeOverview from '@components/overview/CollegeOverview'

    export default {
        name: 'test',
        components: {
            collegeOverview
        }
    }
</script>

<style>
    div {
        box-sizing: border-box;
    }

    div.overview {
        width: 100vw;
        height: 100vh;
        background-image: url(../../assets/background.jpg);
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
        overflow-x: scroll;
        overflow-y: hidden;
        position: relative;
    }

    div.show-panel {
        position: absolute;
        border-radius: 20px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5);
        overflow: hidden;
        z-index: 1;
        background-position: center bottom;
        background-size: cover;
    }

    div.show-panel::after {
        content: '';
        position: absolute;
        background-position: center bottom;
        background-size: cover;
        background-attachment: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        filter: blur(10px);
        z-index: -1;
    }
</style>

