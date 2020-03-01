<template>
    <el-container>
        <el-header style="font-size:x-large;">你必须选择一个数据作为数据源</el-header>
        <el-main>
            <component ref="currentStep" :is="currentSource"></component>
        </el-main>
    </el-container>
</template>
<script>
    import {
        mapState
    } from 'vuex'
    import FromExcel from './from_excel'
    export default {
        components: {
            FromExcel
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                currentSource: function(state){
                    switch (state.dataImport.wizardOption.format) {
                        case "1": //选择了文本录入模式
                        {
                            this.$message.error('施工中，请返回重新选择！');
                            return
                        }
                        break;
                    case "2": //选择了excel录入模式
                    {
                        return "FromExcel"
                    }
                    break;
                    }
                }
            }),
        },
        methods: {
            saveWizardOption() {
                let canTurnNext = this.$refs.currentStep.saveWizardOption();           
               return canTurnNext       
            }
        },

    }
</script>

<style scoped></style>