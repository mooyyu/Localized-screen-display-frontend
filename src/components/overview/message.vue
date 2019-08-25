<template>
	<div class="message px-4">
		<div class="marquee text-white row">
			<div class="marquee_title col-2 px-0">
				<span>学院发展</span>
			</div>
			<div class="marquee_box col-10 px-0">
				<ul class="marquee_list px-0" :class="{marquee_top:animate}">
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
			this.global.axios.get(this.global.serverHost + '/data/developmentPath', {
				withCredentials: true
			}).then(res => {
				this.marqueeList = res.data
				setInterval(this.showMarquee, 3000)
			})
		},
		methods: {
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
		line-height: 9vh;
		font-size: 14px;
		border-right: 1px solid #d8d8d8;
	}

	.marquee_box {
		position: relative;
		width: 100%;
		height: 100%;
		line-height: 9vh;
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
		margin-top: -9vh
	}

	.marquee_list li {
		height: 9vh;
		line-height: 9vh;
		font-size: 14px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>