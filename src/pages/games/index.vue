<template>
	<div class='box'>
		<!-- 操作栏 -->
		<div class="operation">
			<!-- 新游戏 -->
			<div class="operationli" @click="reset()">
				<svg t="1714121432053" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1345" width="200" height="200">
					<path d="M516.654545 862.642424C325.818182 862.642424 170.666667 707.490909 170.666667 516.654545S325.818182 170.666667 516.654545 170.666667s345.987879 155.151515 345.987879 345.987878-155.151515 345.987879-345.987879 345.987879z m0-660.945454C342.884848 201.69697 201.69697 342.884848 201.69697 516.654545s141.187879 314.957576 314.957575 314.957576 314.957576-141.187879 314.957576-314.957576S690.424242 201.69697 516.654545 201.69697z" fill="#2c3e50" p-id="1346"></path>
					<path d="M454.593939 636.121212c-7.757576 0-15.515152-1.551515-23.272727-6.20606-15.515152-7.757576-23.272727-23.272727-23.272727-40.339394v-145.842425c0-17.066667 9.309091-32.581818 23.272727-40.339394 15.515152-7.757576 32.581818-7.757576 46.545455 0l127.224242 72.921213c13.963636 7.757576 23.272727 21.721212 24.824243 38.787878 0 17.066667-9.309091 32.581818-24.824243 41.890909l-127.224242 72.921213c-7.757576 3.10303-15.515152 6.206061-23.272728 6.20606z m0-207.90303c-3.10303 0-6.206061 1.551515-7.757575 1.551515-4.654545 3.10303-7.757576 7.757576-7.757576 13.963636V589.575758c0 6.206061 3.10303 10.860606 7.757576 13.963636 1.551515 1.551515 7.757576 4.654545 15.515151 0l127.224243-72.921212c6.206061-3.10303 9.309091-7.757576 7.757575-13.963637 0-3.10303-1.551515-7.757576-7.757575-10.860606l-128.775758-72.921212c-1.551515-3.10303-3.10303-4.654545-6.206061-4.654545z" fill="#2c3e50" p-id="1347"></path>
				</svg>
				新游戏
			</div>

			<!-- 地雷 -->
			<div class="operationli">
				<svg t="1714121470904" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1568" width="200" height="200">
					<path d="M518.206061 608.193939c-9.309091 0-15.515152-6.206061-15.515152-15.515151V366.157576c0-9.309091 6.206061-15.515152 15.515152-15.515152s15.515152 6.206061 15.515151 15.515152v228.072727c0 7.757576-6.206061 13.963636-15.515151 13.963636zM518.206061 684.218182c-9.309091 0-15.515152-6.206061-15.515152-15.515152v-7.757575c0-9.309091 6.206061-15.515152 15.515152-15.515152s15.515152 6.206061 15.515151 15.515152v7.757575c0 7.757576-6.206061 15.515152-15.515151 15.515152z" fill="#2c3e50" p-id="1569"></path>
					<path d="M518.206061 836.266667c-175.321212 0-319.612121-142.739394-319.612122-319.612122S341.333333 197.042424 518.206061 197.042424C695.078788 198.593939 837.818182 341.333333 837.818182 516.654545s-142.739394 319.612121-319.612121 319.612122z m0-606.642425c-158.254545 0-288.581818 128.775758-288.581819 288.581819S358.4 806.787879 518.206061 806.787879C676.460606 806.787879 806.787879 678.012121 806.787879 518.206061s-128.775758-288.581818-288.581818-288.581819z" fill="#2c3e50" p-id="1570"></path>
				</svg>
				地雷数
				{{ numMines }}
			</div>

			<!-- 时间 -->
			<div class="operationli">
				<svg t="1714121516909" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1791" width="200" height="200">
					<path d="M895.224242 715.248485H128.775758v-15.515152c0-211.006061 172.218182-383.224242 383.224242-383.224242s383.224242 172.218182 383.224242 383.224242v15.515152z m-733.866666-31.030303h702.836363c-7.757576-186.181818-162.909091-336.678788-350.642424-336.678788s-344.436364 150.49697-352.193939 336.678788z" fill="#2c3e50" p-id="1792"></path>
					<path
						d="M512 386.327273c-9.309091 0-15.515152-6.206061-15.515152-15.515152v-31.030303c0-9.309091 6.206061-15.515152 15.515152-15.515151s15.515152 6.206061 15.515152 15.515151v31.030303c0 9.309091-6.206061 15.515152-15.515152 15.515152zM347.539394 432.872727c-4.654545 0-10.860606-3.10303-13.963636-7.757575l-15.515152-26.375758c-4.654545-7.757576-1.551515-17.066667 6.206061-21.721212 7.757576-4.654545 17.066667-1.551515 21.721212 6.20606l15.515151 26.375758c4.654545 7.757576 1.551515 17.066667-6.20606 21.721212-1.551515 0-4.654545 1.551515-7.757576 1.551515zM229.624242 553.890909c-3.10303 0-4.654545 0-7.757575-1.551515l-26.375758-15.515152c-7.757576-4.654545-9.309091-13.963636-6.206061-21.721212 4.654545-7.757576 13.963636-9.309091 21.721213-6.20606l26.375757 15.515151c7.757576 4.654545 9.309091 13.963636 6.206061 21.721212-4.654545 4.654545-9.309091 7.757576-13.963637 7.757576zM799.030303 547.684848c-4.654545 0-10.860606-3.10303-13.963636-7.757575-4.654545-7.757576-1.551515-17.066667 6.20606-21.721212l26.375758-15.515152c7.757576-4.654545 17.066667-1.551515 21.721212 6.206061 4.654545 7.757576 1.551515 17.066667-6.206061 21.721212l-26.375757 15.515151c-3.10303 1.551515-4.654545 1.551515-7.757576 1.551515zM676.460606 428.218182c-3.10303 0-4.654545 0-7.757576-1.551515-7.757576-4.654545-9.309091-13.963636-6.20606-21.721212l15.515151-26.375758c4.654545-7.757576 13.963636-9.309091 21.721212-6.206061 7.757576 4.654545 9.309091 13.963636 6.206061 21.721212l-15.515152 26.375758c-3.10303 6.206061-7.757576 7.757576-13.963636 7.757576zM501.139394 676.460606c-4.654545 0-9.309091-3.10303-12.412121-6.206061l-93.090909-133.430303c-4.654545-7.757576-3.10303-17.066667 4.654545-21.721212 7.757576-4.654545 17.066667-3.10303 21.721212 4.654546l93.090909 133.430303c4.654545 7.757576 3.10303 17.066667-4.654545 21.721212-3.10303 1.551515-6.206061 1.551515-9.309091 1.551515z"
						fill="#2c3e50" p-id="1793"></path>
				</svg>
				{{ gameTime }}
			</div>
		</div>
		<!-- 消息 -->
		<div class="message" :class="{'message_height40':gameState!= 0, 'message_win':gameState == 1,'message_fail':gameState == 2}">
			<span v-if="gameState == 1">您已通关，请开始新游戏！</span>
			<span v-if="gameState == 2">本局失败，请开始新游戏！</span>
		</div>
		<!-- 游戏盘 -->
		<div class="content">
			<!-- 格子循环 -->
			<div v-for="(row, rowIndex) in grid" :key="rowIndex" class="row">

				<div v-for="(cell, colIndex) in row" :key="colIndex" @click="revealCell(rowIndex, colIndex)" @contextmenu="handleRightClick(rowIndex, colIndex,$event)" :class="{cell:true,'revealed': cell.isRevealed, 'cell_border_top_none':rowIndex == 0,'cell_border_left_none':colIndex == 0  }">
					{{ cell.adjacentMines === 0 ? '' : cell.adjacentMines }}
					<!-- 地雷图标 -->
					<svg v-if="cell.isRevealed && cell.isMine" class="ray" t="1714109591009" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8282">
						<path
							d="M348.16 958.46399999c-165.888-1.024-299.52-135.168-298.496-300.032C50.176 495.10399999 184.32 362.49599999 348.16 363.00799999c165.376 0.512 298.496 136.704 297.472 305.152-0.512 159.232-136.192 291.328-297.472 290.304z m215.04-315.904c-17.408 72.192-55.808 128-116.224 167.424-60.928 39.424-127.488 49.664-200.704 37.376 53.248 47.104 151.04 57.856 229.376 6.656 69.12-45.568 110.08-132.608 87.552-211.456zM833.024 306.68799999c10.752 7.168 20.48 13.312 29.696 19.456-38.4 60.416-122.88 60.928-163.328 2.56-7.168-10.24-12.8-20.992-20.48-30.72-29.696-36.864-80.384-31.744-103.424 11.264 12.8 7.68 26.112 15.36 38.912 23.552 21.504 13.312 26.624 30.72 13.824 52.736-9.728 17.408-20.48 34.816-32.256 53.76-46.08-51.2-101.888-83.968-169.472-101.376 13.312-22.016 24.576-42.496 37.888-61.952 9.728-13.824 26.112-16.384 43.008-8.192 10.752 5.12 20.992 11.776 32.768 18.432 4.096-5.632 8.192-11.264 12.288-16.384 39.936-50.176 114.688-50.688 154.624-0.512 6.656 8.192 12.288 16.896 17.92 25.6 29.696 43.52 69.12 48.128 108.032 11.776zM948.224 369.66399999c-23.04-0.512-32.256-6.656-31.744-20.992 0.512-12.8 8.192-18.432 20.48-17.92 23.04 0.512 34.816 7.68 33.792 21.504-1.024 13.824-9.216 18.432-22.528 17.408zM871.424 213.50399999c-1.024 28.16-10.24 40.96-24.064 39.424-12.288-1.536-17.92-9.728-17.408-21.504 0.512-20.48 10.752-35.328 24.064-31.744 7.68 2.048 13.824 10.752 17.408 13.824zM896 279.55199999c2.56-16.896 19.968-33.28 33.792-32.768 11.264 0.512 18.432 6.144 17.92 18.432 0 11.264-17.92 28.16-30.208 26.624-7.68-1.536-14.336-8.192-21.504-12.288z"
							p-id="8283" fill="#ff003d"></path>
					</svg>
					<!-- 旗帜图标 -->
					<svg v-if="!cell.isRevealed && cell.isMarked" class="flag" t="1714110764406" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16453">
						<path
							d="M827.188542 67.981301l-315.188542 0-315.188542 0c-26.906813 0-53.812603 23.063275-53.812603 53.812603l0 787.971355c0 19.218714 3.843538 34.593889 23.063275 42.281989 23.063275 11.530614 53.812603-3.843538 92.25003-23.063275 57.656141-30.749328 146.062634-73.031317 203.718775-99.93813 30.749328-15.375176 69.187779-15.375176 103.781668 0 53.812603 26.906813 142.220119 69.187779 199.87626 99.93813 38.437427 19.218714 69.186755 30.749328 92.25003 23.063275 15.375176-7.688099 23.063275-26.906813 23.063275-42.281989L881.002169 121.793904C877.157607 91.043552 854.094332 67.981301 827.188542 67.981301L827.188542 67.981301zM754.156202 410.075633l-69.187779 88.406492c-7.688099 11.531638-15.375176 34.593889-15.375176 49.969065l3.843538 115.313306c0 15.375176-11.530614 23.063275-26.906813 19.218714l-107.625206-38.437427c-15.375176-3.843538-38.437427-3.843538-53.812603 0l-107.625206 38.437427c-15.375176 3.843538-26.906813-3.843538-26.906813-19.218714l3.843538-115.313306c0-15.375176-7.688099-38.437427-15.375176-49.969065l-69.187779-88.406492c-7.688099-11.531638-3.843538-26.90579 11.530614-30.750351l111.468744-30.750351c15.375176-3.843538 34.593889-19.218714 42.281989-30.750351l65.344241-96.093569c7.688099-11.531638 23.063275-11.531638 30.749328 0l65.344241 96.093569c7.688099 11.531638 26.906813 26.90579 42.281989 30.750351l111.468744 30.750351C758.000763 383.169843 761.844302 398.545018 754.156202 410.075633L754.156202 410.075633z"
							fill="#42b883" p-id="16454"></path>
					</svg>
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
			x: 20,
			y: 20,
			grid: [], // 二维数组表示游戏棋盘
			revealedCells: [], // 记录已经揭示的格子
			numMines: 0,

			gameState: 0,// 0 正在进行中 1 成功 2 失败
			stopTimer: null,// 计时
			gameTime: '00:00',

			complete: false,//棋局生成完成
			easyStart: true,// 轻松开局
		};
	},
	// 方法集合
	methods: {

		// 生成棋盘
		start() {
			this.grid = Array.from({ length: this.x }, () =>
				Array.from({ length: this.y }, () => ({
					isMine: false, // 是否是地雷
					isRevealed: false, // 是否被打开
					adjacentMines: 0,// 周围地雷数
					isMarked: false,//是否被标记
				}))
			);

			setTimeout(this.stopTimer, 0);
			this.gameTime = '00:00'
			// 调用 startTimer 函数开始计时
			this.stopTimer = this.startTimer();
		},

		// 随机生成地雷的位置 且 接收设置第一下绝不是雷的坐标
		placeMines(excludedRow, excludedCol) {
			let minesPlaced = 0;
			while (minesPlaced < this.numMines) {
				// 随机生成地雷的位置
				const row = Math.floor(Math.random() * this.x);
				const col = Math.floor(Math.random() * this.y);
				// 检查是否传入了排除的位置参数，并且生成的位置是否与排除的位置相同
				if ((excludedRow === undefined || row !== excludedRow) && (excludedCol === undefined || col !== excludedCol)) {
					// 如果该位置不是已经有地雷，将地雷放置在该位置，并增加放置的地雷数量
					if (!this.grid[row][col].isMine) {
						this.grid[row][col].isMine = true;
						minesPlaced++;
					}
				}
			}

			this.complete = true
		},

		// 计算每个格子周围的地雷数量
		calculateAdjacentMines() {
			for (let i = 0; i < this.x; i++) {
				for (let j = 0; j < this.y; j++) {
					if (!this.grid[i][j].isMine) {
						const adjacentCells = this.getAdjacentCells(i, j);
						const adjacentMines = adjacentCells.filter(cell => cell.isMine).length;
						this.grid[i][j].adjacentMines = adjacentMines;
					}
				}
			}
		},

		// 获取某个格子周围的相邻格子
		getAdjacentCells(row, col) {
			const adjacentCells = [];
			for (let i = row - 1; i < row + 2; i++) {
				for (let j = col - 1; j < col + 2; j++) {
					// 排除超出棋盘范围和当前格子本身的情况
					if (i >= 0 && i < this.x && j >= 0 && j < this.y && !(i === row && j === col)) {
						adjacentCells.push({ ...this.grid[i][j], row: i, col: j });
					}
				}
			}
			return adjacentCells;
		},

		// 揭示格子
		revealCell(row, col) {

			// 没生成棋局就生成
			if (this.complete == false) {
				// 判断是否要轻松开局
				if (this.easyStart == false) {
					this.placeMines();
				} else {
					this.placeMines(row, col);
				}
			}
			// 计算周围的雷数
			this.calculateAdjacentMines();

			// 检查 row 和 col 是否在合法范围内
			if (row < 0 || row >= this.x || col < 0 || col >= this.y) return;

			// 
			if (this.gameState == 1 || this.gameState == 2) return;

			// 缓存格子对象
			const cell = this.grid[row][col];

			// 如果该格子已经揭示过或已经被标记为揭示，则直接返回
			if (cell.isRevealed || cell.isMarked) return;

			// 将格子标记为已揭示
			cell.isRevealed = true;

			// 触发 Vue 的响应式更新
			this.$set(this.grid, row, this.grid[row]);

			// 将当前格子添加到已揭示格子列表中
			this.revealedCells.push(`${row}-${col}`);

			// 如果揭示的格子是地雷，游戏结束
			if (cell.isMine) {
				setTimeout(() => {
					this.gameState = 2
					setTimeout(this.stopTimer, 0);
				}, 100);
				// this.reset();
			} else if (cell.adjacentMines === 0) { // 如果周围没有地雷，则继续揭示相邻的格子
				const adjacentCells = this.getAdjacentCells(row, col);
				adjacentCells.forEach(cell => {
					const { row, col } = cell;
					setTimeout(() => {
						this.revealCell(row, col); // 递归调用 revealCell 揭示相邻格子
					}, 200);
				});
			}


			// 揭开所有的格子，没有踩到雷通关
			this.checkGameWin()
		},

		// 计算是否通关
		checkGameWin() {
			console.log('计算是否通关')
			for (let i = 0; i < this.x; i++) {
				for (let j = 0; j < this.y; j++) {
					const cell = this.grid[i][j];
					if (!cell.isMine && !cell.isRevealed) {
						return false; // 如果存在未揭示的非雷格子，游戏未通关
					}
				}
			}
			this.gameState = 1
			setTimeout(this.stopTimer, 0);
			return true; // 所有非雷格子都已揭示，游戏通关
		},

		// 右击标记雷
		handleRightClick(row, col, event) {
			// 阻止默认右击菜单
			event.preventDefault();

			// 
			if (this.gameState == 1 || this.gameState == 2) return;

			// 缓存格子对象
			const cell = this.grid[row][col];

			// 标记格子
			cell.isMarked = !cell.isMarked

			// 触发 Vue 的响应式更新
			this.$set(this.grid, row, this.grid[row]);
		},

		// 重新开始游戏
		reset() {
			this.revealedCells = [];
			this.numMines = Math.max(1, Math.floor((this.x * this.y) * 0.2) + (Math.floor(Math.random() * 11) - 3));
			// this.numMines = 80
			this.gameState = 0
			this.complete = false
			this.start();
		},

		// 计时函数
		startTimer() {
			let seconds = 0;
			let that = this
			// 更新时间显示的函数
			function updateTimer() {
				seconds++;
				that.gameTime = that.formatTime(seconds);
			}

			// 每秒调用一次 updateTimer 函数
			const timerInterval = setInterval(updateTimer, 1000);

			// 返回清除定时器的函数
			return function stopTimer() {
				clearInterval(timerInterval);
			};
		},

		// 格式化时间的函数（与之前的相同）
		formatTime(seconds) {
			const hours = Math.floor(seconds / 3600);
			const minutes = Math.floor((seconds % 3600) / 60);
			const remainingSeconds = seconds % 60;

			const formattedHours = String(hours).padStart(2, '0');
			const formattedMinutes = String(minutes).padStart(2, '0');
			const formattedSeconds = String(remainingSeconds).padStart(2, '0');

			if (hours > 0) {
				return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
			} else {
				return `${formattedMinutes}:${formattedSeconds}`;
			}
		},
	},
	// 生命周期 - 创建完成（可以访问当前this实例）
	created() {
		this.reset();
	},
};

</script>

<style lang="scss" scoped>
.box {
	overflow: auto;
	text-align: center;
	// 操作盘
	.operation {
		width: 1000px;
		height: 40px;
		margin: 50px auto;
		display: flex;
		justify-content: center; /* 水平居中 */
		align-items: center; /* 垂直居中 */
		font-size: 16px;
		-webkit-user-select: none; /* Safari */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none; /* Standard */
		// 子操作
		.operationli {
			height: 100%;
			min-width: 10px;
			line-height: 40px;
			cursor: pointer;
			position: relative;
			padding-left: 36px;
			box-sizing: border-box;
			margin: 0 10px;
			.icon {
				width: 30px;
				height: 30px;
				position: absolute;
				left: 3px;
				top: 5px;
			}
		}
	}
	@media screen and (max-width: 1000px) {
		.operation {
			width: 100%;
		}
	}
	// 消息
	.message {
		width: 300px;
		height: 0px;
		background: #cccccc;
		margin: 0px auto;
		border-radius: 10px;
		line-height: 40px;
		padding: 0px 20px;
		box-sizing: border-box;
		color: #ffffff;
		transition: 0.6s;
		overflow: hidden;
	}
	.message_win {
		background: #76bf4c;
	}
	.message_fail {
		background: #f64b3c;
	}
	.message_height40 {
		height: 40px;
		margin: 50px auto;
	}
	// 游戏盘
	.content {
		display: inline-block;
		-webkit-user-select: none; /* Safari */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none; /* Standard */
		border: 1px solid #888;
		// 列
		.row {
			display: flex;
			// 格子
			.cell {
				width: 30px;
				height: 30px;
				line-height: 30px;
				border-left: 1px dotted #888; /* 左边框为点状边框 */
				border-top: 1px dotted #888; /* 顶部边框为点状边框 */
				cursor: pointer;
				background-color: #f1f3f9;
				color: transparent;
				box-sizing: border-box;
				position: relative;
				// 雷
				.ray {
					width: 26px;
					height: 26px;
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					margin: auto;
				}
				// 旗
				.flag {
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

			.cell_border_top_none {
				border-top: none;
			}
			.cell_border_left_none {
				border-left: none;
			}
			// 点开的格子
			.cell.revealed {
				background-color: #ffffff;
				color: #333333;
			}
		}
	}
}
</style>
