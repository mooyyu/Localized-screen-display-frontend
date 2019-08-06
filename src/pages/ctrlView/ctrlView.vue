<template>
    <div class="ctrlView border-left border-right">
        <nav-bar></nav-bar>
        <div class="body pl-0 d-flex">
            <aside-bar></aside-bar>
            <div class="show pr-2">
                <div class="intro">
                    <college-overview></college-overview>
                </div>
                <main-panel :chart-name="selectedChart"></main-panel>
                <div class="footer">
                    <message></message>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navBar from '@components/ctrlView/navbar'
    import asideBar from '@components/ctrlView/asideBar'
    import mainPanel from '@components/ctrlView/mainPanel'
    import CollegeOverview from "@components/ctrlView/collegeOverview"
    import message from "@components/ctrlView/message"
    export default {
        name: "ctrlView",
        components: {
            navBar, asideBar, mainPanel, CollegeOverview, message
        },
        data() {
            return {
                selectedChart: 'collegeTrend',
                chartsName: [
                    'collegeTrend',
                    'professionOverview',
                    'popularElective',
                    'hanging',
                    'excellentTea',
                    'excellentStu'
                ]
            }
        },
        mounted() {
            // setInterval(this.updateChart, 30000)
        },
        methods: {
            selectChart(chartName) {
                this.selectedChart = chartName
            },
            updateChart() {
                for (let i = 0; i < this.chartsName.length; i++) {
                    if (this.chartsName[i] === this.selectedChart) {
                        this.selectedChart = this.chartsName[(i+1) % this.chartsName.length]
                        break
                    }
                }
            }
        }
    }
</script>

<style scoped>
    div.ctrlView {
        width: 100vw;
        min-width: 900px;
        height: 100vh;
        overflow: hidden;
        z-index: 1;
        background-position: center bottom;
        background-size: cover;
    }

    div.ctrlView::after {
        content: '';
        position: absolute;
        background-position: center bottom;
        background-size: cover;
        background-attachment: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        filter: blur(6px);
        z-index: -1;
        background-image: url("../../assets/background.jpg");
    }

    div.body {
        height: calc(100vh - 80px);
    }

    div.show {
        height: 100%;
        width: calc(100vw - 260px);
    }

    div.intro {
        width: 100%;
        height: 80px;
    }

    div.footer {
        width: 100%;
        height: 57px;
    }

    div {
        box-sizing: border-box;
    }
</style>