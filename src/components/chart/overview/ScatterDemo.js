import {Bubble, mixins} from 'vue-chartjs'

export default {
    extends: Bubble,
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
            maintainAspectRatio: false
        };
        this.chartData = {
            datasets: [{
                label: 'Data One',
                backgroundColor: 'rgba(255,99,132,1)',
                data: [
                    {
                        x: 20,
                        y: 25,
                        r: 5
                    },
                    {
                        x: 40,
                        y: 10,
                        r: 10
                    },
                    {
                        x: 30,
                        y: 22,
                        r: 30
                    }
                ]
            }, {
                label: 'Data Two',
                backgroundColor: 'rgba(0, 216, 255, .3)',
                data: [
                    {
                        x: 10,
                        y: 30,
                        r: 15
                    },
                    {
                        x: 20,
                        y: 20,
                        r: 10
                    },
                    {
                        x: 15,
                        y: 8,
                        r: 30
                    }
                ]
            }]
        };
    }
}