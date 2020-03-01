<template>
	<div class="sidebar">
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			<el-tab-pane label="实例管理" name="first">
				<!-- 实例管理树 -->
				<div class="custom-tree-container">
					<div class="block">
						<el-tree :data="data" node-key="id" default-expand-all :expand-on-click-node="false" @node-click="nodeClick">
							<span class="custom-tree-node" slot-scope="{ node, data }">
								<span>{{ node.label }}</span>
								<span>
									<el-button type="text" size="mini" @click="() => append(data)">
										添加
									</el-button>
									<el-button type="text" size="mini" @click="() => remove(node, data)">
										删除
									</el-button>
								</span>
							</span>
						</el-tree>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="搜索" name="second">
				<el-input v-model="searchContent" placeholder="请输入搜索内容" @change="searchFn"></el-input>
				<ul>
					<li v-for="(ele,index) of searchResult" v-bind:key='index'>{{ele}}</li>
				</ul>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	let id = 1000;
	export default {
		data() {
			const data = [{
				id: 1,
				label: '平台 1',
				children: [{
					id: 4,
					label: '设备 1-1',
					children: [{
						id: 9,
						label: '链路 1-1-1'
					}, {
						id: 10,
						label: '平台 1-1-2'
					}]
				}]
			}, {
				id: 2,
				label: '设备 2',
				children: [{
					id: 5,
					label: '平台 2-1'
				}, {
					id: 6,
					label: '链路 2-2'
				}]
			}, {
				id: 3,
				label: '链路 3',
				children: [{
					id: 7,
					label: '设备 3-1'
				}, {
					id: 8,
					label: '平台 3-2'
				}]
			}];
			return {
				data: JSON.parse(JSON.stringify(data)),
				activeName: "first",
				searchContent: "", //搜索框输入
				searchResult: [] //搜索请求返回
			};
		},
		methods: {
			append(data) {
				const newChild = {
					id: id++,
					label: 'testtest',
					children: []
				};
				if (!data.children) {
					this.$set(data, 'children', []);
				}
				data.children.push(newChild);
			},
			remove(node, data) {
				//删除确认弹窗
				this.$confirm('此操作将永久删除' + data.label + ', 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					const parent = node.parent;
					const children = parent.data.children || parent.data;
					const index = children.findIndex(d => d.id === data.id);
					children.splice(index, 1);
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});


			},
			handleClick(tab, event) {
				console.log(tab, event);
			},
			//实例搜索
			searchFn() {
				console.log(this.searchContent);
				//效果模拟
				let arr = ["设备2", "链路5", "平台1"];
				setTimeout(() => {
					arr.forEach(ele => {
						this.searchResult.unshift(ele);
					});
				}, 1000);
			},
			//点击树控件
			nodeClick(obj, node, data) {
				let Reg = /[\u4E00-\u9FA5]+/
				let str = obj.label.match(Reg);
				switch (str[0]) {
					case '平台':
						this.$router.push({
							name: 'Plat',
							params: {
								id: obj.label
							}
						})
						break;

					case '设备':

						this.$router.push({
							name: 'Equip',
							params: {
								id: obj.label
							}
						})
						break;

					case '链路':

						this.$router.push({
							name: 'Chain',
							params: {
								id: obj.label
							}
						})
						break;

				}
			},
		}
	};
</script>

<style scoped>
	.custom-tree-node {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		padding-right: 8px;
	}

	.sidebar {
		overflow: auto;
		height: 100%;
		width: 100%;
	}

	.sidebar ul li {
		user-select: none;
		cursor: pointer;
	}

	.sidebar ul span {
		float: right;
		margin: 5px;
	}

	.sidebar ul span:hover {
		cursor: pointer;
		background-color: yellow;
	}

	.sidebar .additem {
		margin: 5px;
		float: right;
	}
</style>
