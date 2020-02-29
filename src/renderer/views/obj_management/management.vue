<template>
	<div class="objManagement">
		<div class="sidebarContainer">
			<SideBar></SideBar>
		</div>
		<div class="editviewContainer">
			<EditView></EditView>
		</div>
	</div>
</template>
<script>
	import SideBar from "./managementcom/sidebar.vue"
	import EditView from "./managementcom/editview.vue"

	export default {
		components: {
			SideBar,
			EditView
		},
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {

		},

	}
</script>

<style scoped>
	.objManagement {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.objManagement .sidebarContainer {
		flex: 1;

	}

	.objManagement .editviewContainer {
		flex: 3;
		border: 1px solid #67C23A;
	}
</style>
