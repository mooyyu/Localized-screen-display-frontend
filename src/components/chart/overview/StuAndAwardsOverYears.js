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
            scales: {
                yAxes: [{
                    id: 'xs',
                    position: 'left',
                    ticks: {
                        beginAtZero: true
                    }
                }, {
                    id: 'jx',
                    position: 'right',
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };
        this.chartData = {
            labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019],
            datasets: [
                {
                    label: '学生',
                    yAxisID: 'xs',
                    backgroundColor: '#05CBE1',
                    data: [2009, 2010, 3011, 3042, 3343, 3414, 3615, 3816, 3817, 3918, 4019]
                }, {
                    label: '奖项',
                    yAxisID: 'jx',
                    backgroundColor: '#FC2525',
                    data: [99, 130, 131, 202, 213, 314, 315, 206, 207, 318, 319]
                }
            ]
        }
    }
}