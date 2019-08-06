import {PolarArea, mixins} from "vue-chartjs";

export default {
    extends: PolarArea,
    mixins: [mixins.reactiveData],
    data() {
        return {
            chartData: '',
            options: ''
        }
    },
    mounted() {
        this.renderChart(this.chartData, this.options)
    },
    created() {
        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: '各专业挂科分布图',
                fontSize: 20,
                fontColor: 'rgb(255,255,255)'
            },
            legend: {
                labels: {
                    fontColor: "white"
                },
                position: 'left'
            },
            scale: {
                display: false,
                ticks: {
                    beginAtZero: true,
                    stepSize: 10,
                    fontColor: "white"
                }
            }
        };
        this.global.axios.get(this.global.serverHost + '/data/hangingDistribution', {
            params: {
                type: "zymc"
            },
            withCredentials: true
        }).then(res => {
            this.chartData = {
                labels: res.data.map(item => item.mc),
                datasets: [{
                    data: res.data.map(item => item.rate),
                    backgroundColor:[
                        "rgb(255,20,8)",
                        "rgb(192,125,44)",
                        "rgb(255, 205, 86)",
                        "rgb(156,207,33)",
                        "rgb(18,129,18)",
                        "rgb(79,255,179)",
                        "rgb(156,218,255)",
                        "rgb(129,159,178)",
                        "rgb(77,141,255)",
                        "rgb(184,189,255)",
                        "rgb(50,17,150)",
                        "rgb(243,176,255)",
                        "rgb(170,42,207)",
                        "rgb(255,118,203)",
                        "rgb(255,245,225)",
                        "rgb(170,170,175)",
                        "rgb(0,0,0)"
                    ]
                }]
            }
        })
    }
}