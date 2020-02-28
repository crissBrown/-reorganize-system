<template>
	<div class="chaincase">
		<h3 class="title">{{title}}</h3>
		<el-form ref="form" :model="form" label-width="80px">

			<el-form-item label="链路属性1">
				<el-input v-model="form.name1"></el-input>
			</el-form-item>
			<el-form-item label="链路属性2">
				<el-input v-model="form.name2"></el-input>
			</el-form-item>
			<el-form-item label="前端设备">
				<el-input v-model="form.name5"></el-input>
			</el-form-item>
			<el-form-item label="后端设备">
				<el-input v-model="form.name5"></el-input>
			</el-form-item>
			<el-form-item label="频段/GHz">
				<el-slider v-model="value3"></el-slider>
			</el-form-item>
			<el-form-item label="链路评分">
				<div style="margin-top: 7px;">
					<el-rate v-model="value2" :colors="colors">
					</el-rate>
				</div>
			</el-form-item>
			<el-form-item label="备注信息">
				<el-input type="textarea" v-model="form.desc"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">保存</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
				form: {
					name1: '',
					name2: '',
					name3: '',
					name4: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				value3: 50,
				value2: 3,
				colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			formatTooltip(val) {
				return val / 100;
			}
		},
		created() {
			this.title = this.$route.params.id
			console.log(this.$route.params.id)
		}
	}
</script>

<style scoped>
	.chaincase {}

	.chaincase .title {
		font-size: 20px;
		text-align: center;
		margin: 5px;
	}
</style>
