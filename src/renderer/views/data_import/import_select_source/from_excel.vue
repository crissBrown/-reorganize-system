<template>
    <div class="fromExcel">
        <p>导入目标路径：</p>
        <el-input style="width: 70%;" :readonly="true" v-model="fileSrc" placeholder=""></el-input>
        <el-button @click="setFileSrc">...</el-button>
        <p>导入表选择：</p>
        <div class="sheetListContainer">
            <el-checkbox-group style="width: 250px;" v-model="choosedSheet">
                <el-checkbox style="display: block;" v-for="(item,index) in sheetList" :label="item"></el-checkbox>
            </el-checkbox-group>
            <div class="btnGroup">
                <el-button @click="choosedSheet = [...sheetList]">全选</el-button>
                <el-button @click="choosedSheet = []"> 取消全选</el-button>
            </div>

        </div>


    </div>
</template>
<script>
    const xlsx = require('node-xlsx');
    export default {
        data() {
            return {
                wizardOptionKey: "sourceSrcSheet",
                fileSrc: "",
                choosedSheet: [],
                sheetList: [],
               
            }
        },
        mounted() {
            //如果vuex中的wizardOption存放了数据，则进行加载
            if (this.$store.state.dataImport.wizardOption[this.wizardOptionKey]) {
                this.fileSrc = this.$store.state.dataImport.wizardOption[this.wizardOptionKey].src || ""
                this.choosedSheet = this.$store.state.dataImport.wizardOption[this.wizardOptionKey].sheet || ""
            }
        },
        methods: {
            setFileSrc() {
                const VM = this
                this.$electron.remote.dialog.showOpenDialog({
                    filters: [{
                        name: 'Excel',
                        extensions: ['xls', 'xlsx']
                    }],
                    properties: ['openFile']
                }, function (dir) {
                    VM.fileSrc = dir[0]
                })

            },
            saveWizardOption() {
                this.$store.commit('SET_WIZARD_OPTION', {
                    key: this.wizardOptionKey,
                    value: {
                        src: this.fileSrc,
                        sheet: this.choosedSheet
                    }
                })
                if (!this.fileSrc||this.choosedSheet.length==0) {
                    this.$message.error('请录入有效的文件路径并选择要导入的表！');
                    return false
                }
                return true
            }
        },
        watch: {
            fileSrc(newFileSrc) {
                const excelData = xlsx.parse(newFileSrc)
                //加载所有非空表单
                this.sheetList = excelData.filter(val => val.data.length > 0).map(val => val.name) 
            }
        },
    }
</script>

<style scoped>
    .fromExcel {
        width: 100%;
        height: 100%;
    }

    .sheetListContainer {
        display: flex;
        height: 180px;
    }
</style>