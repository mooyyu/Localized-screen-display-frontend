import axios from 'axios'

/* panels' code list
    * overView: 1
    * ctrlView: 2
    */
/* charts' code list
* collegeTrend:                 a
* professionOverview:           b
* professionOverviewVertical:   c
* hanging:                      d
* popularElective:              e
* bjHangingDistribution:        f
* zyHangingDistribution:        g
* stuSourceDistribution:        h
* collegeInfoSmall:             i
* collegeInfoLarge:             j
*/

export default {
    serverHost: "http://localhost:8216/overview_api",
    axios: axios,
    moduleList: [
        { name: "学院建设趋势", id: 'a', module: "CollegeTrend" },
        { name: "专业发展情况(单轴)", id: 'b', module: "ProfessionOverview" },
        { name: "专业发展情况(双轴)", id: 'c', module: "ProfessionOverviewVertical" },
        { name: "课程挂科率排名", id: 'd', module: "Hanging" },
        { name: "最受欢迎选修课", id: 'e', module: "PopularElective" },
        { name: "各班级挂科分布", id: 'f', module: "BJHangingDistribution" },
        { name: "各专业挂科分布", id: 'g', module: "ZYHangingDistribution" },
        { name: "生源地分布", id: 'h', module: "StuSourceDistribution" },
        { name: "学院介绍(小)", id: 'i', module: "CollegeInfoSmall" },
        { name: "学院介绍(大)", id: 'j', module: "CollegeInfoLarge" }
    ]
}