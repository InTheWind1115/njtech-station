<template>
    <div id="menu" :style="setHeight">
        <profile :change="true"></profile>
        <menu-item path="/square" iconfont="" name="广场"></menu-item>
        <menu-item path="/chat" iconfont="" name="匿名聊天"></menu-item>
        <menu-item path="/buy" iconfont="" name="二手交易"></menu-item>
        <menu-item path="/data" iconfont="" name="学习资料"></menu-item>
        <menu-item path="/friend" iconfont="" name="同性交友"></menu-item>
        <menu-item path="/profile" iconfont="" name="个人资料"></menu-item>
    </div>
</template>

<script>
    import Profile from "@/components/common/menu/Profile";
    import MenuItem from "@/components/common/menu/MenuItem"
    export default {
        name: "Menu",
        computed: {
            setHeight() {
                let height = document.body.clientHeight;
                return {
                    height: height + 'px'
                };
            }
        },
        components: {
            Profile,
            MenuItem
        }
    }
</script>

<style scoped lang="less">
    #menu {
        position: absolute;
        box-sizing: border-box;
        left: 0px;
        top: 0px;
        background-color: #f5f5f7;
        width: 190px;
        border: 1px solid #e1e1e2;
    }
</style>