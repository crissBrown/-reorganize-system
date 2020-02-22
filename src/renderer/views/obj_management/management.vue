<template>
	<div class="objManagement">
		<div class="sidebarContainer">
			<SideBar></SideBar>
		</div>
		<div class="geoviewContainer">
			<GeoView></GeoView>
		</div>
		<div class="editviewContainer">
			<EditView></EditView>
		</div>
	</div>
</template>
<script>
	import SideBar from "./managementcom/sidebar.vue"
	import GeoView from "./managementcom/geoview.vue"
	import EditView from "./managementcom/editview.vue"

	export default {
		components: {
			SideBar,
			GeoView,
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
		flex: 1.5;

	}

	.objManagement .geoviewContainer {
		flex: 2.5;
		background-color: green;
	}

	.objManagement .editviewContainer {
		flex: 2.5;
	}
</style>
