<template>
    <div :style="'height:'+height+'px;'" class="message px-4">
        <div class="marquee text-white row">
            <div :style="'line-height:'+height+'px;font-size:'+height/3+'px;'" class="marquee_title col-2">
                <span>学院发展历程</span>
            </div>
            <div :style="'line-height:'+height+'px;'" class="marquee_box col-10">
                <ul class="marquee_list" :style="animate ? 'transition:all 0.5s;margin-top:-'+height+'px;' : ''">
                    <li :style="'height:'+height+'px;line-height:'+height+'px;font-size:'+height/3+'px;'" v-for="item in marqueeList" :key="item.time" >
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
        props: {
            height: Number
        },
        created: function () {
            this.getData();
            setInterval(this.getData, 12600000);
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
        width: 100%;
        border-top: 5px solid transparent;
        border-image: url("../../assets/top.png") 15 0 0 0;
    }

    .marquee {
        width: 100%;
        height: 100%;
    }

    .marquee_title {
        border-right: 1px solid #d8d8d8;
    }

    .marquee_box {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .marquee_list {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
    }

    /*.marquee_top {*/
    /*    transition: all 0.5s;*/
    /*    margin-top: -52px*/
    /*}*/
</style>