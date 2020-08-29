<template>
  <div id="app">
    <Menu></Menu>
<!--    <router-link to="/buy">二手交易</router-link>-->
<!--    <router-link to="/chat">匿名聊天</router-link>-->
<!--    <router-link to="data">学习资料</router-link>-->
<!--    <router-link to="friend">同性交友</router-link>-->
<!--    <router-link to="profile">个人资料</router-link>-->
<!--    <router-link to="square">广场</router-link>-->
    <router-view class="content"></router-view>
  </div>

</template>
<script>
  import Menu from '@/components/content/mainMenu/Menu';
  export default {
    name: "App",
    components: {
      Menu
    }
  }
</script>
<style lang="less">
  @import 'assets/css/normalize.css';
  @import "assets/css/common.css";
  .content {
    position: absolute;
    left: 191px;
  }
</style>
