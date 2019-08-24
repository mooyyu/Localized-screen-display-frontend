<template>
	<div class="clock col text-right">
		{{ cur_time }}
	</div>
</template>

<script>
	export default {
		name: "Clock",
		data() {
			return {
				cur_time: ''
			}
		},
		mounted() {
			Date.prototype.Format = function (fmt) {
				let o = {
					"M+": this.getMonth() + 1, //月份
					"d+": this.getDate(), //日
					"h+": this.getHours(), //小时
					"m+": this.getMinutes(), //分
					"s+": this.getSeconds(), //秒
					"q+": Math.floor((this.getMonth() + 3) / 3), //季度
					"S": this.getMilliseconds() //毫秒
				};
				if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
				for (let k in o)
					if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
				return fmt;
			};
			let that = this;
			setInterval(function() {that.cur_time = (new Date()).Format("yyyy-MM-dd hh:mm")}, 1000)
		}
	}
</script>

<style scoped>
	div.clock {
		height: 100%;
		font-size: 5vh;
		line-height: 10vh;
		font-family: "American Typewriter",sans-serif;
		color: #12849e;
		text-shadow: 1px 2px 10px #384cc4, 0 -2px 1px #495dff;
	}
</style>