<template>
    <div class="fromExcel">
        <el-form label-position="left" label-width="150px" :model="sheetAttr">
            <el-form-item label="字段名行">
                <el-input-number v-model="sheetAttr.attrName" :min="1" :max="10"></el-input-number>
            </el-form-item>
            <el-form-item label="第一个数据行">
                <el-input-number v-model="sheetAttr.firstDataRow" :min="1" :max="10"></el-input-number>
            </el-form-item>
            <el-form-item label="是否限制录入行数">
                <el-switch v-model="sheetAttr.isLimitedRow"></el-switch>
            </el-form-item>
            <el-form-item v-if="sheetAttr.isLimitedRow" label="最后一个数据行">
                <el-input-number :disabled="!sheetAttr.isLimitedRow" v-model="sheetAttr.lastDataRow" :min="1" :max="10">
                </el-input-number>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                wizardOptionKey: "rowRange",
                sheetAttr: {
                    attrName: 1,
                    firstDataRow: 2,
                    lastDataRow: 0,
                    isLimitedRow: false
                }

            }
        },
        mounted() {
            //如果vuex中的wizardOption存放了数据，则进行加载
            if (this.$store.state.dataImport.wizardOption[this.wizardOptionKey]) {
                this.sheetAttr = this.$store.state.dataImport.wizardOption[this.wizardOptionKey]
            }
        },
        methods: {
            saveWizardOption() {
                this.$store.commit('SET_WIZARD_OPTION', {
                    key: this.wizardOptionKey,
                    value: {
                        attrName: this.sheetAttr.attrName,
                        firstDataRow: this.sheetAttr.firstDataRow,
                        lastDataRow: this.sheetAttr.lastDataRow,
                        isLimitedRow: this.sheetAttr.isLimitedRow
                    }
                })
                return true
            }
        },
        watch: {

        },
    }
</script>

<style scoped>
    .fromExcel {
        width: 100%;
        height: 100%;
    }
</style>