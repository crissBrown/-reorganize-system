<template>
    <el-container>
        <el-header style="font-size:x-large;">请选择一个所需的导入模式</el-header>
        <el-main>
            <el-radio-group v-model="choosedImportMode">
                <el-radio class="radioItem" :disabled="item.disabled" v-for="item in importModeList" :label="item.id">
                    {{item.label}}</el-radio>
            </el-radio-group>
        </el-main>
    </el-container>
</template>
<script>
    export default {
        data() {
            return {
                wizardOptionKey: "importMode",
                choosedImportMode: "1",
                importModeList: [{
                        label: "追加：追加记录到目标表",
                        id: "1",
                        disabled: false
                    },
                    {
                        label: "更新：更新目标和源记录相符合的记录",
                        id: "2",
                        disabled: true
                    },
                    {
                        label: "追加或更新：如果目标存在相同的记录，更新它。否则，添加它",
                        id: "3",
                        disabled: true
                    }, {
                        label: "删除：删除目标中和源记录相符的记录",
                        id: "4",
                        disabled: true
                    },
                    {
                        label: "复制：删除目标全部记录，并从源重新导入",
                        id: "5",
                        disabled: false
                    }
                ]
            }
        },
        mounted() {
            //如果vuex中的wizardOption存放了数据，则进行加载
            this.choosedImportMode = this.$store.state.dataImport.wizardOption[this.wizardOptionKey] || "1"
        },
        methods: {
            saveWizardOption() {
                this.$store.commit('SET_WIZARD_OPTION', {
                    key: this.wizardOptionKey,
                    value: this.choosedImportMode
                })
                return true
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