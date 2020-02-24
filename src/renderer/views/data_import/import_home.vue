<template>
    <div class="importHome">
        <el-dialog class="elDialog" title="导入向导" :visible.sync="dialogVisible" width="50%">
            <el-container style="height:400px">
                <component :is="$store.state.dataImport.currentStep.value"></component>
            </el-container>
            <span slot="footer">
                <el-button v-if="$store.state.dataImport.currentStep.index>0" @click="setStepToPrevious">上一步</el-button>
                <el-button v-if="!$store.state.dataImport.currentStep.isTheLastStep" @click="setStepToNext">下一步</el-button>
                <el-button @click="dialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import ImportFormat from './import_format'
    import ImportSelectSource from './import_select_source'
    export default {
        components: {
            ImportFormat,
            ImportSelectSource
        },
        data() {
            return {
                dialogVisible: false
            };
        },
       
        mounted() {
            debugger
            //注册主进程的数据导入向导模块
            this.initMainProcessImport()
         
        },
        methods: {
            initMainProcessImport() {
                const VM = this;
                this.$electron.ipcRenderer.on('showDataImport', function (event, data) {
                    VM.dialogVisible = true;
                    VM.initConfig();
                })
            },
            initConfig() {
                //初始化向导步骤
                this.$store.commit('INIT_CURRENT_STEP')
            },

            setStepToNext() {
                //判断当前是不是最后一位
                this.$store.commit('SET_STEP_NEXT')
            },
            setStepToPrevious() {
                this.$store.commit('SET_STEP_PREVIOUS')
            }



        },
    }
</script>

<style scoped>
    .importHome {}

    .elDialog {}
</style>