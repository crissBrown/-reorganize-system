<template>
    <el-container>
        <el-header style="font-size:x-large;">我们已经收集向导导入数据所需的全部信息。点击开始按钮进行导入</el-header>
        <el-main>

        </el-main>
    </el-container>
</template>
<script>
    import beforeProcessing from './import_before_processing'
    export default {
        data() {
            return {}
        },
        mounted() {},
        methods: {
            startImport() {
                beforeProcessing.init(this.$store.state.dataImport.wizardOption)
            }
        },


    }
</script>

<style scoped>

</style>