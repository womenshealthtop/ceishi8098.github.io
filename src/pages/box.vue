<template>
	<div class="box">
		<!-- header -->
		<headerBar></headerBar>
		<!-- content -->
		<div class="content">
			<router-view />
		</div>
	</div>
</template>

<script>
import headerBar from "../components/header.vue";
export default {

	components: {
		headerBar
	}
}
</script>

<style lang="scss" scoped>
.content {
	width: 100%;
	height: calc(100% - 55px);
}
</style>