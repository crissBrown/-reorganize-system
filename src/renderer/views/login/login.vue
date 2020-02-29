<template>
	<div class="login-page">
		<div class="layer bg" id="login"></div>
		<div class="layer flex-center">
			<!-- logo部分 -->
			<div class="logo-group">
				<img src="./logo.png" alt="logo">
			</div>
			<!-- 表单部分 -->
			<div class="form-group">
				<el-card>
					<el-form ref="loginForm" label-position="top" size="default">
						<el-form-item prop="username">
							<el-input type="text" v-model="name" placeholder="用户名">
								<i slot="prepend" class="fa fa-user-circle-o"></i>
							</el-input>
						</el-form-item>
						<el-form-item prop="password">
							<el-input type="password" v-model="pass" placeholder="密码">
								<i slot="prepend" class="fa fa-keyboard-o"></i>
							</el-input>
						</el-form-item>
						<el-button size="default" @click="clickLogin" type="primary" class="button-login">登录</el-button>
					</el-form>
				</el-card>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				name: '吴中波',
				pass: '123456'
			}
		},
		mounted() {
			/////在本页面中添加登录模块的页面逻辑
			console.log('进入登录模块')

		},
		methods: {
			clickLogin() {
				this.$router.push({
					name: 'home'
				})
			}
		},
	}
</script>

<style lang="scss">
	@import './style.scss';
</style>
