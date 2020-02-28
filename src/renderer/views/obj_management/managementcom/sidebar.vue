<template>
	<div class="sidebar">
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
			<el-tab-pane label="实例管理" name="first">
				<div @click="handleClickOperation">
					<el-collapse v-model="activeNames" @change="handleChange">
						<el-collapse-item title="平台" name="1">
							<ul>
								<li v-for="(ele,index) of platCount" v-bind:key=index>
									{{ele}}
									<span class="el-icon-delete" :data-flag="ele"></span>
									<span class="el-icon-document" :data-flag="ele"></span>
								</li>
							</ul>
						</el-collapse-item>
						<el-collapse-item title="设备" name="2">
							<ul>
								<li v-for="(ele,index) of equCount" v-bind:key=index>
									{{ele}}
									<span class="el-icon-delete" :data-flag="ele"></span>
									<span class="el-icon-document" :data-flag="ele"></span>
								</li>
							</ul>
						</el-collapse-item>
						<el-collapse-item title="链路" name="3">
							<ul>
								<li v-for="(ele,index) of chainCount" v-bind:key=index>
									{{ele}}
									<span class="el-icon-delete" :data-flag="ele"></span>
									<span class="el-icon-document" :data-flag="ele"></span>
								</li>
							</ul>
						</el-collapse-item>
						<el-collapse-item title="链路" name="4">
							<ul>
								<li v-for="(ele,index) of chainCount" v-bind:key=index>
									{{ele}}
									<span class="el-icon-delete" :data-flag="ele"></span>
									<span class="el-icon-document" :data-flag="ele"></span>
								</li>
							</ul>
						</el-collapse-item>
					</el-collapse>
				</div>


				<el-button type="primary" icon="el-icon-plus" circle class="additem" @click="addFn"></el-button>
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
	export default {
		data() {
			return {
				activeName: "first",
				activeNames: ["1"],
				searchContent: "", //搜索框输入
				platCount: ["平台1", "平台2", "平台3", "平台4", "平台5"],
				equCount: ["设备1", "设备2", "设备3", "设备4"],
				chainCount: ["链路1", "链路2", "链路3", "链路4", "链路5", "链路6"],
				searchResult: [] //搜索请求返回
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			handleChange(val) {
				console.log(val);
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
			//添加实例
			addFn() {
				alert("添加实例");
			},
			//实例操作委托
			handleClickOperation(e) {
				if (e.target.dataset.flag) {
					//删除
					if (e.target.className === "el-icon-delete") {
						// alert("删除:"+e.target.dataset.flag)
						this.$confirm('此操作将永久删除' + e.target.dataset.flag + ', 是否继续?', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'warning'
						}).then(() => {
							//过滤
							this.platCount = this.platCount.filter(ele => ele !== e.target.dataset.flag)
							this.equCount = this.platCount.filter(ele => ele !== e.target.dataset.flag)
							this.chainCount = this.platCount.filter(ele => ele !== e.target.dataset.flag)
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

					} else if (e.target.className === "el-icon-document") {
						//alert("编辑:" + e.target.dataset.flag)
						let Reg = /[\u4E00-\u9FA5]+/
						let str = e.target.dataset.flag.match(Reg);
						switch (str[0]) {
							case '平台':
								
									this.$router.push({
										name: 'Plat',
										params: {
											id: e.target.dataset.flag
										}
									}) 
									break;
								
							case '设备':
								
									this.$router.push({
										name: 'Equip',
										params: {
											id: e.target.dataset.flag
										}
									}) 
									break;
								
							case '链路':
								
									this.$router.push({
										name: 'Chain',
										params: {
											id: e.target.dataset.flag
										}
									}) 
									break;
								
						}

					}

				}
			}
		}
	};
</script>

<style scoped>
.sidebar {
  overflow: auto;
  height: 100%;
  width: 100%;
}

.sidebar ul li {
  user-select: none;
  cursor: ;
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
