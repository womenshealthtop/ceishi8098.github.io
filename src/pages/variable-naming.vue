<template>
	<div class='box'>
		<div class="variable_naming">
			<div class="variable_naming_header">
				<div class="variable_naming_header_title">
					变量命名
				</div>
				<div class="variable_naming_header_edit">
					<el-radio-group v-model="translation_mode" size="mini" fill="#42b883">
						<el-radio-button label="通用翻译"></el-radio-button>
						<el-radio-button label="信息技术"></el-radio-button>
					</el-radio-group>
				</div>
			</div>
			<div class="variable_naming_content">
				<div class="variable_naming_item variable_naming_input">
					<div class="textarea">
						<textarea class="dzm-textarea" name="textarea" v-model="textarea" placeholder="请输入内容"></textarea>
					</div>
				</div>
				<div class="variable_naming_item variable_naming_input" style="overflow: auto;">
					<!-- 无结果 -->
					<p v-if="textarea.trim() == ''">译文</p>

					<i v-if="textarea.trim() != '' && Object.keys(data).length === 0" class="el-icon-loading" style="font-size: 30px;"></i>

					<div v-show="textarea.trim() != ''" class="container" v-for="(item, key) in data" :key="key">
						<h3 class="header">{{ key }}</h3>
						<div class="item" v-for="(item2, key2) in item" :key="key2" @click="copy(item2)">
							<div class="key">{{ key2 }}</div>
							<div class="value">{{ item2 }}</div>
							<!-- 
							<span class="copy">
								左键复制
							</span> -->
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>
<script>
import md5 from "md5";//在使用的页面引入加密插件
export default {
	// 定义属性
	data() {
		return {
			textarea: '',
			result: '',
			data: {},
			appid: '20230209001555364', // APPID	
			key: 'a2CUhlNC3T6DLvq7onl4',	// KEY

			translation_mode: '通用翻译', // 翻译模式
		};
	},
	// 计算属性，会监听依赖属性值随之变化
	computed: {
		monitor_translation() {
			return JSON.stringify(this.textarea + this.translation_mode)
		}
	},
	// 监控data中的数据变化
	watch: {
		monitor_translation() {
			this.data = {}
			if (this.translation_mode == '通用翻译') {
				this.translate()
			} else {
				this.translate_it()
			}
		}
	},
	// 方法集合
	methods: {
		// 正常翻译
		translate() {
			console.log(this.textarea)
			if (this.textarea.trim() == '') {
				this.result = ''
				return false
			}

			let salt = (new Date).getTime()
			let condition = {
				q: this.textarea,  // 请求翻译query	
				appid: this.appid, // APPID	
				salt: salt, // 随机数
				from: 'auto', // 翻译源语言
				to: 'en', // 翻译目标语言	
				sign: md5(this.appid + this.textarea + salt + this.key)	// 签名
			}
			this.apix('/proxy/api/trans/vip/translate', condition, { method: 'GET' })
				.then(rv => {
					console.log(rv)
					this.result = rv.trans_result[0].dst
					this.data = this.convertNamingConventions(this.result).data
					console.log(this.data)
				})
		},

		// it 领域翻译
		translate_it() {
			console.log(this.textarea)
			if (this.textarea.trim() == '') {
				this.result = ''
				return false
			}

			let salt = (new Date).getTime()
			let condition = {
				q: this.textarea,  // 请求翻译query	
				appid: this.appid, // APPID	
				salt: salt, // 随机数
				from: 'auto', // 翻译源语言
				to: 'en', // 翻译目标语言	
				sign: md5(this.appid + this.textarea + salt + 'it' + this.key),	// 签名
				domain: 'it'
			}
			this.apix('/proxy/api/trans/vip/fieldtranslate', condition, { method: 'GET' })
				.then(rv => {
					console.log(rv)
					this.result = rv.trans_result[0].dst
					this.data = this.convertNamingConventions(this.result).data
					console.log(this.data)
				})
		},
		convertNamingConventions(input) {
			// 去除前后空格并将字符串转换为小写
			const words = input.trim().toLowerCase().split(/\s+/);
			const camelCase = words.map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
			const pascalCase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
			const constantCase = words.map(word => word.toUpperCase()).join('_');
			const snakeCase = words.join('_');
			const kebabCase = words.join('-');
			const underscoreCase = `_${snakeCase}`;

			return {
				"data": {
					"常见命名": {
						"常量": constantCase,
						"大驼峰(类命名)": pascalCase,
						"小驼峰(方法命名)": camelCase,
						"下划线": snakeCase,
						"前下划线": underscoreCase,
						"项目名": kebabCase
					},
					"变量命名": {
						"全局变量(驼峰)": `g${pascalCase}`,
						"全局变量(下划线)": `g_${camelCase}`,
						"字符串变量(驼峰)": `s${pascalCase}`,
						"字符串变量(下划线)": `s_${camelCase}`,
						"数字变量(驼峰)": `n${pascalCase}`,
						"数字变量(下划线)": `n_${camelCase}`,
						"逻辑变量(驼峰)": `b${pascalCase}`,
						"逻辑变量(下划线)": `b_${camelCase}`,
						"数组变量(驼峰)": `a${pascalCase}`,
						"数组变量(下划线)": `a_${camelCase}`,
						"正则命名(驼峰)": `r${pascalCase}`,
						"正则命名(下划线)": `r_${camelCase}`,
						"函数命名(驼峰)": `f${pascalCase}`,
						"函数命名(下划线)": `f_${camelCase}`,
						"成员变量(驼峰)": `m${pascalCase}`,
						"成员变量(下划线)": `m_${camelCase}`
					},
					"方法命名": {
						"加载方法": `load${pascalCase}`,
						"判断执行": `can${pascalCase}`,
						"判断包含": `has${pascalCase}`,
						"判断存在": `is${pascalCase}`,
						"事件函数": `fn${pascalCase}`,
						"接口类": `I${pascalCase}`,
						"接口实现类": `${pascalCase}Impl`,
						"get方法": `get${pascalCase}`,
						"set方法": `set${pascalCase}`,
						"查询方法": `query${pascalCase}`,
						"查看方法": `view${pascalCase}`,
						"详情方法": `${camelCase}Details`,
						"读取方法": `read${pascalCase}`,
						"创建方法": `create${pascalCase}`,
						"保存方法": `save${pascalCase}`,
						"新增方法": `add${pascalCase}`,
						"生成方法": `emit${pascalCase}`,
						"更新方法": `update${pascalCase}`,
						"编辑方法": `edit${pascalCase}`,
						"清除方法": `clear${pascalCase}`,
						"删除方法": `remove${pascalCase}`,
						"移除方法": `destory${pascalCase}`,
						"上传方法": `upload${pascalCase}`,
						"下载方法": `down${pascalCase}`
					}
				}
			};
		}

	},
	// 生命周期 - 创建完成（可以访问当前this实例）
	created() {

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
				.textarea {
					width: 100%;
					height: 100%;

					/* 输入框 */
					.dzm-textarea {
						width: 100%;
						height: 100%;
						content: none;
						resize: none;
						padding: 5px;
						outline: none;
						border: none;
						font-family: "HarmonyOS_bold";
						font-size: 18px;
						padding: 0px;
					}

					.dzm-textarea::-webkit-input-placeholder {
						color: #ddd;
					}
				}
			}
			//
			.container {
				width: 100%;

				.header {
					font-size: 16px;
					line-height: 40px;
				}

				.item {
					font-size: 14px;
					width: 100%;
					min-height: 30px;
					padding-left: 50px;
					box-sizing: border-box;
					cursor: pointer;
					overflow: hidden;
					border-radius: 6px;

					.key {
						float: left;
						width: 150px;
						height: 30px;
						line-height: 30px;
					}
					.value {
						width: calc(100% - 200px);
						min-height: 30px;
						line-height: 30px;
						float: left;
						word-wrap: break-word;
					}
				}
				.item:hover {
					background: rgb(66, 184, 131);
					color: #ffffff;
				}
			}
		}
	}
}
</style>