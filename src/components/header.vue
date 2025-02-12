<template>
	<div class="headers">
		<div class="headers_content">
			<!-- icon -->
			<div class="icon">
				<img src="../assets/images/favicon.png" alt="">
			</div>
			<!-- text -->
			<div class="text">
				cotoco
			</div>
			<!-- text -->
			<div class="operation">
				<span v-for="(item,index) in menu" :key="index" :style="{'color':item.bool ? '#42b883':''}" @click="path(item)">{{ item.name }}</span>
				<span class="none">|</span>
				<span class="none">
					<svg t="1714093752497" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4244" width="200" height="200">
						<path
							d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667"
							fill="#231F20" p-id="4245"></path>
					</svg>
				</span>
			</div>

			<div class="operation_max750">
				<span class="none">
					<svg t="1714094151416" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7255" width="200" height="200">
						<path d="M129.910448 132.457711m50.945273 0l244.537314 0q50.945274 0 50.945273 50.945274l0 244.537314q0 50.945274-50.945273 50.945273l-244.537314 0q-50.945274 0-50.945273-50.945273l0-244.537314q0-50.945274 50.945273-50.945274Z" fill="#2c3e50" p-id="7256"></path>
						<path d="M552.756219 132.457711m50.945274 0l244.537313 0q50.945274 0 50.945274 50.945274l0 244.537314q0 50.945274-50.945274 50.945273l-244.537313 0q-50.945274 0-50.945274-50.945273l0-244.537314q0-50.945274 50.945274-50.945274Z" fill="#2c3e50" p-id="7257"></path>
						<path d="M129.910448 555.303483m50.945273 0l244.537314 0q50.945274 0 50.945273 50.945273l0 244.537314q0 50.945274-50.945273 50.945273l-244.537314 0q-50.945274 0-50.945273-50.945273l0-244.537314q0-50.945274 50.945273-50.945273Z" fill="#2c3e50" p-id="7258"></path>
						<path d="M552.756219 555.303483m50.945274 0l244.537313 0q50.945274 0 50.945274 50.945273l0 244.537314q0 50.945274-50.945274 50.945273l-244.537313 0q-50.945274 0-50.945274-50.945273l0-244.537314q0-50.945274 50.945274-50.945273Z" fill="#2c3e50" p-id="7259"></path>
					</svg>
				</span>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	// 定义属性
	data() {
		return {
			menu: [
				{
					name: '主页',
					bool: true,
					page: 'index'
				},
				{
					name: '变量命名',
					bool: false,
					page: 'variable-naming'
				},
				{
					name: '随机密码',
					bool: false,
					page: 'random_password'
				},
				{
					name: '扫雷',
					bool: false,
					page: 'games'
				},
				{
					name: '关于',
					bool: false,
					page: 'about'
				}
			]
		};
	},
	// 生命周期 - 创建完成（可以访问当前this实例）
	created() {
		this.menu.forEach(rv => {
			rv['bool'] = this.$route.name == rv.page
		})
	},
	// 计算属性，会监听依赖属性值随之变化
	computed: {
	},
	// 监控data中的数据变化
	watch: {
		$route(to) {
			// console.log(to.matched[1].name)
			this.menu.forEach(rv => {
				rv['bool'] = to.matched[1].name == rv.page
			})
		},
	},
	// 方法集合
	methods: {
		// 获取数据
		path(item) {
			// console.log(item)
			this.$router.push({ path: item.page })
		}
	},
	// 生命周期 - 挂载完成（可以访问DOM元素）
	mounted() { },
	beforeCreate() { }, // 生命周期 - 创建之前
	beforeMount() { }, // 生命周期 - 挂载之前
	beforeUpdate() { }, // 生命周期 - 更新之前
	updated() { }, // 生命周期 - 更新之后
	beforeDestroy() { }, // 生命周期 - 销毁之前
	destroyed() { }, // 生命周期 - 销毁完成
	activated() { }, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="scss" scoped>
.headers {
	width: 100%;
	height: 55px;
	border-bottom: 1px solid #2929291f;
	box-sizing: border-box;
	user-select: none;
	box-shadow: 0 2px 2px rgba(0, 0, 0, 0.08);
	overflow: hidden;

	.headers_content {
		width: 1450px;
		height: 100%;
		margin: auto;
		position: relative;

		.icon {
			width: 55px;
			height: 55px;
			padding: 15px;
			box-sizing: border-box;
			float: left;
			cursor: pointer;
			user-select: none;
			img {
				width: 100%;
			}
		}
		.text {
			width: 180px;
			height: 100%;
			line-height: 55px;
			font-size: 22px;
			float: left;
			font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
			cursor: pointer;
		}
		.operation,
		.operation_max750 {
			min-width: 0px;
			height: 100%;
			float: right;
			line-height: 55px;
			font-size: 14px;
			font-weight: bold;
			font-family: "HarmonyOS";
			transition: 0.5s linear;
			position: absolute;
			right: 0px;
			top: 0px;

			span {
				display: block;
				height: 100%;
				float: left;
				margin: 0 20px;
				height: 100%;
				cursor: pointer;
				position: relative;
				img {
					display: block;
					width: 26px;
					height: 26px;
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					margin: auto;
				}
			}
			.none {
				color: #bcb9b9;
				cursor: default;
			}
			span:hover {
				color: #42b883;
			}
			.none:hover {
				color: #bcb9b9;
			}
		}
		.operation_max750 {
			right: -800px;
		}

		@media screen and (max-width: 800px) {
			.operation {
				right: -800px !important;
			}
			.operation_max750 {
				right: 0px;
			}
		}
	}
	@media screen and (max-width: 1450px) {
		.headers_content {
			width: 100%;
		}
	}
}
</style>