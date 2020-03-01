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
							<el-input type="text" v-model="formLogin.username" placeholder="用户名">
								<i slot="prepend" class="fa fa-user-circle-o"></i>
							</el-input>
						</el-form-item>
						<el-form-item prop="password">
							<el-input type="password" v-model="formLogin.password" placeholder="密码">
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
				 // 表单
      			formLogin: {
        			username: 'admin',
        			password: 'admin',
				 },
				rules: {
        			username: [
          				{ required: true, message: '请输入用户名', trigger: 'blur' }
        			],
        			password: [
          				{ required: true, message: '请输入密码', trigger: 'blur' }
        			],
        
      			}

			}
			
		},
		mounted() {
			/////在本页面中添加登录模块的页面逻辑
			console.log('进入登录模块')

		},
		methods: {
			clickLogin() {
				if (!this.formLogin.username) {
          			this.$message.error('请输入用户名');
          			return;
       				}
        		if (!this.formLogin.password) {
          			this.$message.error('请输入密码');
         			return;
        			}
				if(this.formLogin.username=="admin" && this.formLogin.password=="admin"){
					this.$router.push({
					name: 'home'
				})
				}else{
					this.$message.error('用户名或密码错误');
         			return;
				}
			}
		},
	}
</script>

<style lang="scss">
	@import './style.scss';
</style>
