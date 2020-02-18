<template>
    <div class="login">
        <h1>登录模块界面</h1>
        <el-button @click="clickLogin" type="primary">登录</el-button>
    </div>
</template>
<script>
    export default {
        mounted() {
            /////在本页面中添加登录模块的页面逻辑
            console.log('进入登录模块')

        },
        methods: {
            clickLogin() {
                this.$router.push({
                    name: 'home'
                })
            }
        },
    }
</script>

<style scoped>

</style>