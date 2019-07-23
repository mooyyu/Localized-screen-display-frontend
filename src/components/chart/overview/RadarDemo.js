import {Radar, mixins} from 'vue-chartjs'

export default {
    extends: Radar,
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
            labels: [
                "Happiness", "Loneliness", "Health","Managing at Home", "Finances", "Work","Relationships", "Exercise", "Volunteer", "Attitude"],
            datasets: [{
                label: "label1",
                backgroundColor: "rgba(35,255,250,0.5)",
                borderColor: "rgb(35,255,250)",
                pointBackgroundColor: "rgb(35,255,250)",
                data: [8,1,5,2,4,10,5,11,3],
                notes: ["I am pretty happy","I am isolated","none","none","none","none","none","none"]
            }, {
                label: "label2",
                backgroundColor: "rgba(214,42,84,0.5)",
                borderColor: "rgba(214,42,84)",
                pointBackgroundColor: "rgba(214,42,84)",
                data: [10,3,4,3,5,8,7,12,5],
                notes: ["Joined social club","none","none","none","none","Was late one day","Just broke up"]
            },{
                label: "label3",
                backgroundColor: "rgba(74,214,65,0.5)",
                borderColor: "rgba(74,214,65)",
                pointBackgroundColor: "rgba(74,214,65)",
                data: [6,5,4,12,5,6,6,3,4,6],
                notes: ["none","none","none","none","Won at bingo","none","none","Leg week", "Fed the poor", "Positive Mental Attitude"]
            } ]
        }
    }
}