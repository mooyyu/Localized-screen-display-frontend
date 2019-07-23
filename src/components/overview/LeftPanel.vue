<template>
	<div class="leftPanel col row m-0">
		<div class="left show-panel">
		</div>
		<div class="right pl-3">
			<div class="mask pb-2"></div>
			<div class="mask pb-2"></div>
			<div class="mask pb-2"></div>
			<div class="mask pb-2"></div>
			<div class="mask pb-2"></div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "leftPanel"
    }
</script>

<style scoped>
	div.left {
		height: 100%;
		width: 60%;
		left: 0;
		top: 0;
		border: 20px solid transparent;
		border-image: url("../../assets/border-image-1.png") 20 36;
	}

	div.show-panel::after {
		background-image: url("../../assets/background.jpg");
	}

	div.right {
		position: absolute;
		height: 100%;
		width: 40%;
		left: 60%;
		top: 0;
	}

	div.mask {
		width: 100%;
		height: 20%;
		background-image: url("../../assets/mask.png");
		background-repeat: no-repeat;
		border: 5px solid transparent;
		border-left: none;
		border-bottom: none;
		border-image: url("../../assets/simple-border.png") 26;
	}
</style>