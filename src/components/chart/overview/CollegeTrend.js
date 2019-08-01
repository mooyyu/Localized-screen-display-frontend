import {mixins, Line} from "vue-chartjs";

export default {
    extends: Line,
    mixins: [mixins.reactiveData],
    data () {
        return {
            chartData: '',
            options: ''
        }
    },
    mounted () {
        this.renderChart(this.chartData, this.options)
    },
    created() {
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: '历年开设专业、班级数量及招收学生人数趋势图',
                fontSize: 20,
                fontColor: 'rgb(255,255,255)'
            },
            legend: {
                labels: {
                    fontColor: "white"
                }
            },
            scales: {
                yAxes: [{
                    id: 'zybjul',
                    position: 'left',
                    ticks: {
                        beginAtZero: true,
                        fontColor: "white"
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '专业、班级数量',
                        fontColor: 'rgb(255,255,255)'
                    }
                }, {
                    id: 'xsrs',
                    position: 'right',
                    ticks: {
                        beginAtZero: true,
                        fontColor: "white"
                    },
                    scaleLabel:{
                        display: true,
                        labelString: '学生人数',
                        fontColor: 'rgb(255,255,255)'
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: "white"
                    }
                }]
            }
        };
        this.global.axios.get(this.global.serverHost + '/data/collegeTrend', {
            withCredentials: true
        }).then(res => {
            this.chartData = {
                labels: res.data.map(item => item.dqszj),
                datasets: [
                    {
                        label: '专业数量',
                        yAxisID: 'zybjul',
                        backgroundColor: 'rgba(105,227,186)',
                        borderColor: 'rgba(105,227,186)',
                        pointBorderWidth: 6,
                        fill: false,
                        data: res.data.map(item => item.zyul)
                    }, {
                        label: '班级数量',
                        yAxisID: 'zybjul',
                        backgroundColor: 'rgba(164,225,47)',
                        borderColor: 'rgba(164,225,47)',
                        pointBorderWidth: 6,
                        fill: false,
                        data: res.data.map(item => item.bjul)
                    }, {
                        label: '学生人数',
                        yAxisID: 'xsrs',
                        backgroundColor: 'rgba(225,108,92)',
                        borderColor: 'rgba(225,108,92)',
                        pointBorderWidth: 6,
                        fill: false,
                        data: res.data.map(item => item.xsrs)
                    }
                ]
            }
        })
    }
}