<template>
    <el-container>
        <el-header style="font-size:x-large;">该向导已对属性映射进行一些猜测，现在你可进行调整</el-header>
        <el-container>
            <el-header>
                <el-form label-position="left" label-width="100px" :model="sourceSheet">
                    <el-form-item label="源表：">
                        <el-select v-model="sourceSheet.choosedSheet">
                            <el-option v-for="(item,index) in sheetList" :label="item" :value="item"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-header>
            <el-container>
                <el-table @selection-change="setSubmitMappingData" ref="mappingTable" highlight-current-row height="300" :data="mappingTableData" border>
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column prop="sourceField" label="源字段" width="180">
                    </el-table-column>
                    <el-table-column label="目标字段" width="180">
                        <template slot-scope="scope">
                            <el-input v-model="mappingTableData[scope.$index].targetField"></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="类型">
                        <template slot-scope="scope">
                            <el-select v-model="mappingTableData[scope.$index].type">
                                <el-option v-for="item in typeSelectOption" :key="item" :label="item" :value="item">
                                </el-option>
                            </el-select>
                        </template>
                    </el-table-column>
                    <el-table-column label="长度">
                        <template slot-scope="scope">
                            <el-input v-model="mappingTableData[scope.$index].length""></el-input>
                        </template>
                    </el-table-column>
                    <el-table-column label="主键">
                        <template slot-scope="scope">
                            <el-checkbox v-model="mappingTableData[scope.$index].primaryKey""></el-checkbox>
                        </template>
                    </el-table-column>
                </el-table>

            </el-container>
        </el-container>
    </el-container>
</template>
<script>
    import {
        mapState
    } from 'vuex'
    import dataProcess from './data_processing'
    let submitMappingTableData=[]
    export default {
        components: {

        },
        created() {
            switch (this.$store.state.dataImport.wizardOption.format) {
                case "1":
                    /////    
                    break;

                case "2": {
                    dataProcess.importFromExcel.init(this.$store.state.dataImport.wizardOption)
                    this.sheetList = dataProcess.importFromExcel.getSourceSheets(); //获取所有选定的数据表
                    this.sourceSheet.choosedSheet = this.sheetList[0] //默认选中第一个数据表
                    submitMappingTableData = []//默认清空mapping表
                }

                break;
            }
        },
        mounted() {
            //如果vuex中的wizardOption存放了数据，则进行加载
            let _wizardOption = this.$store.state.dataImport.wizardOption;
            if (_wizardOption[this.wizardOptionKey]) {
                this.sourceSheet.choosedSheet = _wizardOption[this.wizardOptionKey].sheet;
            }
        },
        data() {
            return {
                typeSelectValue: "",
                typeSelectOption: [
                    'TEXT', 'INTERGE', 'REAL', 'BLOB'
                ],
                sourceSheet: {
                    choosedSheet: ""
                },
                sheetList: [],
                mappingTableData: [],
                wizardOptionKey:"attrMapping"
            }
        },
        watch: {
            sourceSheet: {
                handler: function ({
                    choosedSheet
                }) {
                    //通过choosedsheet获取所选sheet的源字段
                    if (!choosedSheet) {
                        this.$message.error('当前选择表为空！');
                        return
                    }
                    let sourceFieldList = dataProcess.importFromExcel.getSourceFieldFromSheet(choosedSheet)
                    this.buildMappingTable(sourceFieldList);
                },
                deep: true
            }
        },
        computed: {

        },
        methods: {
            //利用属性名称数组构建mapping表格
            buildMappingTable(sourceFieldList) {
                const VM = this;
                if (!sourceFieldList instanceof Array || sourceFieldList.length == 0) {
                    this.$message.error("表格数据加载失败！")
                    return
                }
                //该函数需要与后端进行对接完善，暂时用与原属性值相同来代替
                let targetFieldList = this.getTargetFieldList()
                targetFieldList = [...sourceFieldList]
                //开始构建mapping表格
                VM.mappingTableData = []
                sourceFieldList.forEach((value, index) => {
                    VM.mappingTableData.push({
                        sourceField: sourceFieldList[index],
                        targetField: targetFieldList[index],
                        type: 'TEXT',
                        length: '255',
                        primaryKey: false
                    })
                });

            },
            ///待完善
            getTargetFieldList() {
                return []
            },
            //当selection改变时，用于设置提交的参数
            setSubmitMappingData(selection){
                submitMappingTableData = null;
                submitMappingTableData = selection  
            },
            saveWizardOption() {
                this.$store.commit('SET_WIZARD_OPTION', {
                    key: this.wizardOptionKey,
                    value:{
                        mapping:submitMappingTableData,
                        sheet:this.sourceSheet.choosedSheet
                    } 
                })
                if (submitMappingTableData.length==0) {
                    this.$message.error('请勾选择要导入的属性！');
                    return false
                }
                console.log(submitMappingTableData)
                return true
            },
        },

    }
</script>

<style scoped></style>