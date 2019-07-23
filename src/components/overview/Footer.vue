<template>
	<div class="footer show-panel px-4">
		<div class="marquee text-white row">
			<div class="marquee_title col-2">
				<span>学院通知</span>
			</div>
			<div class="marquee_box col-10">
				<ul class="marquee_list" :class="{marquee_top:animate}">
					<li v-for="item in marqueeList" :key="item.time" >
						<span>{{item.time}}:</span>
						<span>{{item.content}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
        name: "Footer",
		data() {
			return {
				animate: false,
				marqueeList: [
					{
						time: '09/12 12:22',
						content: 'the first message.'
					}, {
						time: '09/12 12:24',
						content: 'the second message.'
					}
				]
			}
		},
		created: function () {
			setInterval(this.showMarquee, 4000)
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
	div.footer {
		height: 10%;
		width: 100%;
		left: 0;
		bottom: 0;
	}

	div.show-panel::after {
		background-image: url("../../assets/background.jpg");
	}

	.marquee {
		width: 100%;
		height: 100%;
	}

	.marquee_title {
		line-height: 9vh;
		font-size: 3vh;
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
		font-size: 3vh;
	}
</style>