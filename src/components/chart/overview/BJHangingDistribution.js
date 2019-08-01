import {HorizontalBar, mixins} from 'vue-chartjs'

export default {
    extends: HorizontalBar,
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
                text: '各班级挂科分布图',
                fontSize: 20,
                fontColor: 'rgb(255,255,255)'
            },
            legend: {
                display: false,
                labels: {
                    fontColor: "white"
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: "white"
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontColor: "white"
                    }
                }]
            }
        };
        this.global.axios.get(this.global.serverHost + '/data/hangingDistribution', {
            params: {
                type: "bjmc"
            },
            withCredentials: true
        }).then(res => {
            this.chartData = {
                labels: res.data.map(item => item.mc),
                datasets: [
                    {
                        backgroundColor: '#b490e1',
                        data: res.data.map(item => item.rate)
                    }
                ]
            }
        })
    }
}