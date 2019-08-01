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
                text: '生源地分布前6名',
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
            let labels = res.data.map(item => item.stuSource).slice(0, 6)
            let data = res.data.map(item => item.xsrs).slice(0, 6)
            labels.push('其他')
            data.push(eval(res.data.map(item => item.xsrs).slice(6).join('+')))
            this.chartData = {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor:[
                        "rgb(255,66,56)",
                        "rgb(240,177,109)",
                        "rgb(255,239,132)",
                        "rgb(133,207,114)",
                        "rgb(100,159,207)",
                        "rgb(202,135,235)",
                        "rgb(165,162,166)"
                    ]
                }]
            }
        })
    }
}