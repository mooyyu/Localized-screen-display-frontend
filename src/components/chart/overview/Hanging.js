import {Doughnut, mixins} from "vue-chartjs";

export default {
    extends: Doughnut,
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
                text: '挂科率最高的必修、限定选修课前6名',
                fontColor: 'rgb(255,255,255)'
            }
        };
        this.global.axios.get(this.global.serverHost + '/data/hanging', {
            withCredentials: true
        }).then(res => {
            this.chartData = {
                labels: res.data.map(item => item.kcmc).slice(0, 6),
                datasets: [{
                    data: res.data.map(item => item.rate).slice(0, 6),
                    backgroundColor:[
                        "rgb(255,66,56)",
                        "rgb(240,177,109)",
                        "rgb(255,239,132)",
                        "rgb(133,207,114)",
                        "rgb(100,159,207)",
                        "rgb(202,135,235)"
                    ]
                }]
            }
        })
    }
}