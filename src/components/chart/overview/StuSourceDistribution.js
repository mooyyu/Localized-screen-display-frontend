import {Pie, mixins} from "vue-chartjs";

export default {
    extends: Pie,
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
                text: '生源地分布前十名',
                fontSize: 20,
                fontColor: 'rgb(255,255,255)'
            },
            legend: {
                labels: {
                    fontColor: "white"
                }
            }
        };
        this.global.axios.get(this.global.serverHost + '/data/stuSourceDistribution', {
            withCredentials: true
        }).then(res => {
            let labels = res.data.map(item => item.stuSource).slice(0, 10)
            let data = res.data.map(item => item.xsrs).slice(0, 10)
            labels.push('其他地区总计')
            data.push(eval(res.data.map(item => item.xsrs).slice(10).join('+')))
            this.chartData = {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor:[
                        "rgb(255,20,8)",
                        "rgb(192,125,44)",
                        "rgb(255, 205, 86)",
                        "rgb(156,207,33)",
                        "rgb(18,129,18)",
                        "rgb(79,255,179)",
                        "rgb(156,218,255)",
                        "rgb(178,107,171)",
                        "rgb(77,141,255)",
                        "rgb(184,189,255)",
                        "rgb(142,141,143)"
                    ]
                }]
            }
        })
    }
}