<template>
	<div class='box'>
		<div class="content">

			<div class="introduce">

				<div class="introduce_l">
					<img src="../../assets/images/favicon.png" alt="">
				</div>

				<div class="introduce_r">
					<div class="introduce_r_item">
						<div class="introduce_r_item_icon">
							<i class="el-icon-edit"></i>
						</div>
						<div class="introduce_r_item_text">
							<p class="p2">变量命名</p>
							<p class="p3">"专为程序员设计的工具模块，旨在简化和加速开发过程中的变量命名工作。该模块能够将汉字转换成有意义、易于理解的英文代码变量名称，极大地提高编码效率和代码的可读性。"</p>
						</div>
					</div>

					<div class="introduce_r_item">
						<div class="introduce_r_item_icon">
							<i class="el-icon-magic-stick"></i>
						</div>
						<div class="introduce_r_item_text">
							<p class="p2">随机密码</p>
							<p class="p3">"强大而灵活的密码生成工具，专为需要高安全标准的用户设计。它能够生成随机、复杂的密码，确保用户的在线安全。支持批量生成密码，非常适合需要大量安全凭据的场景。"</p>
						</div>
					</div>

					<div class="introduce_r_item">
						<div class="introduce_r_item_icon">
							<i class="el-icon-ship"></i>
						</div>
						<div class="introduce_r_item_text">
							<p class="p2">扫雷游戏</p>
							<p class="p3">"经典扫雷游戏的现代复兴版，为您带来无与伦比的乐趣和挑战！我们的自研扫雷小游戏采用了最新的计算规则和用户界面设计，让这款经典的解谜游戏焕发出新的活力。无论您是扫雷游戏的老玩家还是新爱好者，都将为您带来难忘的体验。"</p>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	// 定义属性
	data() {
		return {
		};
	},
	// 计算属性，会监听依赖属性值随之变化
	computed: {
	},
	// 监控data中的数据变化
	watch: {
	},
	// 方法集合
	methods: {
		// 获取数据
		start() {
		},
	},
	// 生命周期 - 创建完成（可以访问当前this实例）
	created() {
		this.start();
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

<style lang='scss' scoped>
.box {
	font-family: "HarmonyOS_bold";

	.content {
		max-width: 1450px;
		height: 100%;
		margin: auto;
		position: relative;

		.introduce {
			width: 80%;
			min-height: 100px;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			margin: auto;
			transition: all 0.5s;
			display: flex;
			flex-direction: row; /* 子元素水平排列，默认值，可以不写 */
			justify-content: flex-start; /* 子元素从左边开始排列，默认值，可以不写 */
			align-items: center; /* 子元素在交叉轴上居中对齐 */

			.introduce_l {
				width: 34%;
				min-height: 100px;
				transition: all 0.5s;

				img {
					display: block;
					width: 80%;
					margin: auto;
				}
			}

			.introduce_r {
				width: 66%;
				min-height: 100px;
				box-sizing: border-box;
				transition: all 0.5s;

				.introduce_r_item {
					width: 100%;
					min-height: 0px;
					.introduce_r_item_icon {
						width: 20%;
						height: 100%;
						float: left;
						i {
							display: block;
							width: 50px;
							height: 50px;
							// background: #000;
							font-size: 30px;
							text-align: center;
							line-height: 50px;
							border: 1px solid #e5e7eb;
							border-radius: 6px;
							cursor: pointer;
							margin: 26px auto;
						}
					}
					.introduce_r_item_text {
						width: 80%;
						height: 100%;
						float: left;
						padding: 0 20px;
						box-sizing: border-box;
						.p2 {
							font-size: 20px;
							line-height: 60px;
						}
						.p3 {
							font-size: 14px;
							line-height: 20px;
							text-indent: 2em;
							margin-bottom: 30px;
						}
					}
				}
			}

			@media screen and (max-width: 800px) {
				.introduce_l {
					width: 100%;
					img {
						width: 50%;
						margin: 50px auto;
					}
				}
				.introduce_r {
					width: 100%;
				}
			}
		}

		@media screen and (max-width: 800px) {
			.introduce {
				display: flex; /* 启用 Flexbox */
				flex-direction: column; /* 子元素垂直排列 */
				justify-content: flex-start; /* 子元素从顶部开始排列，默认值，可以不写 */
				align-items: center; /* 子元素在交叉轴上居中对齐 */
			}
		}
	}
}
</style>