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
                text: '最受欢迎的选修课前6名',
                fontSize: 20,
                fontColor: 'rgb(255,255,255)'
            },
            scale: {
                display: false,
                ticks: {
                    beginAtZero: true,
                    stepSize: 10
                }
            }
        };
        this.global.axios.get(this.global.serverHost + '/data/popularElective', {
            withCredentials: true
        }).then(res => {
            this.chartData = {
                labels: res.data.map(item => item.kcmc).slice(0, 6),
                datasets: [{
                    data: res.data.map(item => item.xsrs).slice(0, 6),
                    backgroundColor:[
                        "rgb(255, 99, 132)",
                        "rgb(75, 192, 192)",
                        "rgb(255, 205, 86)",
                        "rgb(207,114,186)",
                        "rgb(207,124,78)",
                        "rgb(54, 162, 235)"
                    ]
                }]
            }
        })
    }
}