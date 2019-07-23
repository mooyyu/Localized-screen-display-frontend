<template>
	<div class="overview px-1">
		<div class="panel">
			<Header :title="String('信息学院实时数据展示')"></Header>
			<div class="body row m-0">
				<left-panel></left-panel>
				<div class="centerPanel col-5">
					<Main></Main>
					<Footer></Footer>
				</div>
				<right-panel></right-panel>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '@components/overview/Header'
	import Main from '@components/overview/Main'
	import Footer from '@components/overview/Footer'
	import leftPanel from '@components/overview/LeftPanel'
	import rightPanel from '@components/overview/RightPanel'

    export default {
        name: 'overview',
        components: {
            Header, Main, Footer, leftPanel, rightPanel
        }
    }
</script>

<style>
	div {
		box-sizing: border-box;
	}

	div.overview {
		width: 300vh;
		height: 100vh;
		background-image: url(../../assets/background.jpg);
		background-repeat: no-repeat;
		background-position: center bottom;
		background-size: cover;
		overflow-x: scroll;
		overflow-y: hidden;
		position: relative;
	}

	div.panel {
		width: 100%;
		height: 100%;
	}

	div.body {
		height: 90%;
		width: 100%;
	}

	div.show-panel {
		position: absolute;
		border-radius: 20px;
		box-shadow: 0 10px 20px rgba(0,0,0,0.5);
		overflow: hidden;
		z-index: 1;
		background-position: center bottom;
		background-size: cover;
	}

	div.show-panel::after {
		content: '';
		position: absolute;
		background-position: center bottom;
		background-size: cover;
		background-attachment: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		filter: blur(10px);
		z-index: -1;
	}
</style>

