import {Bar, mixins} from 'vue-chartjs'

export default {
    extends: Bar,
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
    created () {
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: '各专业的班级数量及学生人数柱状图',
                fontSize: 20,
                fontColor: 'rgb(255,255,255)'
            },
            scales: {
                yAxes: [{
                    id: 'bjul',
                    position: 'left',
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1
                    },
                    scaleLabel: {
                        display: true,
                        labelString: '班级数量',
                        fontColor: 'rgb(255,255,255)'
                    }
                }, {
                    id: 'xsrs',
                    position: 'right',
                    ticks: {
                        beginAtZero: true
                    },
                    scaleLabel:{
                        display: true,
                        labelString: '学生人数',
                        fontColor: 'rgb(255,255,255)'
                    }
                }]
            }
        };
        this.global.axios.get(this.global.serverHost + '/data/professionOverview', {
            withCredentials: true
        }).then(res => {
            this.chartData = {
                labels: res.data.map(item => item.zymc),
                datasets: [
                    {
                        label: '班级数量',
                        yAxisID: 'bjul',
                        backgroundColor: '#05CBE1',
                        data: res.data.map(item => item.bjul)
                    }, {
                        label: '学生人数',
                        yAxisID: 'xsrs',
                        backgroundColor: '#FC2525',
                        data: res.data.map(item => item.xsrs)
                    }
                ]
            }
        })
    }
}