<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
import header22 from "./components/header";
export default {
	name: "App",
	components: {
		header22: header22,
	},
};
</script>