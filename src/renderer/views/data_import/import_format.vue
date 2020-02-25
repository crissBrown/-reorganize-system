<template>
    <el-container>
        <el-header style="font-size:x-large;">该向导允许你指定如何导入数据。你要选择哪种数据导入格式？</el-header>
        <el-main>
            <el-radio-group v-model="choosedImportFormat">
                <el-radio class="radioItem" :disabled="item.disabled" v-for="item in importFormatList" :label="item.id">
                    {{item.label}}</el-radio>
            </el-radio-group>
        </el-main>
    </el-container>
</template>
<script>
    export default {
        data() {
            return {
                wizardOptionKey: "format",
                choosedImportFormat: "2",
                importFormatList: [{
                        label: "文本文件（*.txt）",
                        id: "1",
                        disabled: false
                    },
                    {
                        label: "Excel文件（*.xls;*.xlsx）",
                        id: "2",
                        disabled: false
                    },
                    {
                        label: "XML文件（*.xml）",
                        id: "3",
                        disabled: true
                    }, {
                        label: "JSON文件（*.json）",
                        id: "4",
                        disabled: true
                    }
                ]
            }
        },
        mounted() {
             this.choosedImportFormat = this.$store.state.dataImport.wizardOption[this.wizardOptionKey] || "2"
        },
        methods: {
            saveWizardOption() {
                this.$store.commit('SET_WIZARD_OPTION', {
                    key: this.wizardOptionKey,
                    value: this.choosedImportFormat
                })
            }
        },


    }
</script>

<style scoped>
    .radioItem {
        display: block;
        margin-top: 20px;
    }
</style>