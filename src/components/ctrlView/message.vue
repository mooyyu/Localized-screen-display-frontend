<template>
    <div class="message px-4">
        <div class="marquee text-white row">
            <div class="marquee_title col-2">
                <span>学院发展历程</span>
            </div>
            <div class="marquee_box col-10">
                <ul class="marquee_list" :class="{marquee_top:animate}">
                    <li v-for="item in marqueeList" :key="item.time" >
                        <span>{{item.year}}年 </span>
                        <span>{{item.info}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "message",
        data() {
            return {
                animate: false,
                marqueeList: []
            }
        },
        created: function () {
            this.getData()
            setInterval(this.getData, 12600000)
            setInterval(this.showMarquee, 3000)
        },
        methods: {
            getData() {
                this.global.axios.get(this.global.serverHost + '/data/developmentPath', {
                    withCredentials: true
                }).then(res => {
                    this.marqueeList = res.data
                })
            },
            showMarquee: function () {
                this.animate = true;
                setTimeout(()=>{
                    this.marqueeList.push(this.marqueeList[0]);
                    this.marqueeList.shift();
                    this.animate = false;
                },1000)},
        }
    }
</script>

<style scoped>
    div.message {
        height: 100%;
        width: 100%;
        border-top: 5px solid transparent;
        border-image: url("../../assets/top.png") 15 0 0 0;
    }

    .marquee {
        width: 100%;
        height: 100%;
    }

    .marquee_title {
        line-height: 52px;
        font-size: 10px;
        border-right: 1px solid #d8d8d8;
    }

    .marquee_box {
        position: relative;
        width: 100%;
        height: 100%;
        line-height: 52px;
        overflow: hidden;
    }

    .marquee_list {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
    }

    .marquee_top {
        transition: all 0.5s;
        margin-top: -52px
    }

    .marquee_list li {
        height: 52px;
        line-height: 52px;
        font-size: 10px;
    }
</style>