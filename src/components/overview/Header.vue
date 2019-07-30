<template>
	<div class="header row m-0">
		<div class="left col">
			<img src="../../assets/jmi_overview_logo.png" alt="jmi_logo">
		</div>
		<div class="center col-4 text-center milky">{{ title }}</div>
		<Clock></Clock>
	</div>
</template>

<script>
	import Clock from './Clock'
	export default {
        name: "Header",
		props: {
            title: String
		},
		components: {
            Clock
		}
    }
</script>

<style scoped>
	div.left {
		height: 100%;
	}

	img {
		display: block;
		box-sizing: border-box;
		border: 2px solid transparent;
		height: 100%;
	}

	div.header {
		height: 10%;
		width: 100%;
	}

	div.milky {
		font-family:"microsoft yahei", "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;;
		font-size: 6vh;
		line-height: 10vh;
		color: #120056;
		text-shadow: 0 8px 9px #6b8ec4, 0 -2px 1px #495dff;
		font-weight: bold;
	}
</style>