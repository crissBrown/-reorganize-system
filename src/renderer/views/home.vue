<template>
    <div class="home">
        <h1 class="title">整编系统软件</h1>
        <div class="mainContainer">
            <div class="objManagementContainer">
                <obj-management></obj-management>

            </div>
            <div class="filesystemContainer">
                <file-home></file-home>


            </div>
        </div>
    </div>
</template>
<script>
    import {
        mapState
    } from 'vuex'
    import ObjManagement from '@/views/obj_management/management'
    import FileHome from '@/views/filesystem/file_homepage'

    export default {
        components: {
            FileHome,
            ObjManagement
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
    .home {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .home .title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        margin: 0;
        text-align: center;
        background-color: #68a8bb;
        color: white;
    }

    .home .mainContainer {
        flex: 1;
        display: flex;
        flex-direction: row;
    }

    .home .mainContainer .objManagementContainer {
        flex: 3;
        /* background-color: #e3b35a; */
    }

    .home .mainContainer .filesystemContainer {
        flex: 1;
        background-color: #e78585;

    }
</style>