<template>
	<div class='box'>
		<div class="variable_naming">
			<div class="variable_naming_header">
				<div class="variable_naming_header_title">
					随机密码
				</div>
				<div class="variable_naming_header_edit">
					<el-button type="info" size="mini" @click="copy_all()">复制全部</el-button>
				</div>
			</div>			<div class="variable_naming_content">
				<div class="variable_naming_item variable_naming_input">

					<el-form ref="form" label-width="100px" size="mini">

						<el-form-item label="使用字符">
							<el-checkbox-group v-model="form.character">
								<el-checkbox label="0-9" name="0"></el-checkbox>
								<el-checkbox label="a-z" name="a"></el-checkbox>
								<el-checkbox label="A-Z" name="Z"></el-checkbox>
								<el-checkbox label="特殊字符" name="T"></el-checkbox>
							</el-checkbox-group>
						</el-form-item>

						<el-form-item label="密码长度">
							<el-input-number v-model="form.length" :min="1" :max="199" label="密码长度"></el-input-number>
						</el-form-item>

						<el-form-item label="生成数量">
							<el-input-number v-model="form.quantity" :min="1" :max="99" label="生成数量"></el-input-number>
						</el-form-item>

						<el-form-item label-width="30px">
							<el-button type="primary" @click="random_string_generation(form)">再次生成</el-button>
						</el-form-item>

					</el-form>

				</div>
				<div class="variable_naming_item variable_naming_input" style="overflow: auto;">

					<div class="uuid" v-for="(item,index) in passwords" :key="index" @click="copy(item)">{{ item }}</div>

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
			// 
			form: {
				character: ['0-9', 'a-z', 'A-Z'],
				length: 32,
				quantity: 10,
			},
			// 
			passwords: [],
		};
	},
	// 生命周期 - 创建完成（可以访问当前this实例）
	created() {
		this.random_string_generation(this.form)
	},
	// 计算属性，会监听依赖属性值随之变化
	computed: {
		from_watch() {
			return JSON.stringify(this.form)
		}
	},
	// 监控data中的数据变化
	watch: {
		from_watch(newVal, oldVal) {
			let data = JSON.parse(newVal)
			if (data.character.length == 0) {
				this.$message.warning('至少需要一个条件！');
				return false
			} else {
				this.random_string_generation(JSON.parse(newVal))
			}
		}
	},
	// 方法集合
	methods: {
		random_string_generation(data) {

			const characters = [];

			if (data.character.includes('0-9')) {
				characters.push(...'0123456789');
			}
			if (data.character.includes('a-z')) {
				characters.push(...'abcdefghijklmnopqrstuvwxyz');
			}
			if (data.character.includes('A-Z')) {
				characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
			}
			if (data.character.includes('特殊字符')) {
				characters.push(...'!@#$%^&*()_+{}:"<>?[];,./\'\\|-=[]`~');
			}

			this.passwords = [];

			for (let i = 0; i < data.quantity; i++) {
				let password = '';
				for (let j = 0; j < data.length; j++) {
					const randomIndex = Math.floor(Math.random() * characters.length);
					password += characters[randomIndex];
				}		
				this.passwords.push(password);
			}
		},
		// 复制全部
		copy_all(){
			this.copy(this.passwords.join('\n'))
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

<style lang='scss' scoped>
.box {
	font-family: "HarmonyOS_bold";
	background: #fafafc;
	position: relative;

	.variable_naming {
		width: calc(100% - 80px);
		max-width: 1450px;
		height: calc(100% - 60px);
		background: rgb(255, 255, 255);
		box-sizing: border-box;
		border: 1px solid rgb(242, 243, 245);
		box-shadow: rgba(35, 46, 67, 0.06) 0px 4px 10px;
		border-radius: 8px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;

		.variable_naming_header {
			width: 100%;
			height: 50px;
			border-bottom: 1px solid rgb(227, 228, 229);
			.variable_naming_header_title {
				width: 50%;
				height: 100%;
				float: left;
				font-weight: bold;
				line-height: 50px;
				text-indent: 2em;
			}
			.variable_naming_header_edit {
				width: 50%;
				height: 100%;
				float: left;
				line-height: 50px;
				padding-left:28px;
				box-sizing: border-box;
			}
		}

		.variable_naming_content {
			width: 100%;
			height: calc(100% - 50px);
			.variable_naming_item {
				width: 50%;
				height: 100%;
				float: left;
				box-sizing: border-box;
				font-size: 18px;
			}
			.variable_naming_input {
				border-right: 1px solid rgb(227, 228, 229);
				padding: 30px;
				box-sizing: border-box;
				.uuid {
					font-size: 14px;
					line-height: 30px;
					width: 100%;
					min-height: 30px;
					padding-left: 50px;
					box-sizing: border-box;
					cursor: pointer;
					overflow: hidden;
					border-radius: 6px;
					word-wrap: break-word; /* 或者 overflow-wrap: break-word; */
					word-break:break-all;
				}
				.uuid:hover {
					background: rgb(66, 184, 131);
					color: #ffffff;
				}
			}
		}
	}
}
</style>