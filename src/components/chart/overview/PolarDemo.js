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
            scale: {
                display: true,
                ticks: {
                    beginAtZero: true
                }
            }
        };
        this.chartData = {
            labels: ["Red", "Yellow", "Blue", "Green", "Gray"],
            datasets: [{
                data: [21, 4, 12, 26, 17],
                backgroundColor:[
                    "rgb(255, 99, 132)",
                    "rgb(75, 192, 192)",
                    "rgb(255, 205, 86)",
                    "rgb(201, 203, 207)",
                    "rgb(54, 162, 235)"
                ]
            }]
        }
    }
}