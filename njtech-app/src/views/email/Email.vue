<template>
  <div class="email">
    <div class="email-header">
      <div class="email-header-info">邮箱绑定</div>
    </div>
    <div class="email-body">
      <div class="email-body-email">
        <input type="text" class="email-body-email-input">
        <div class="email-body-email-btn">获取验证码</div>
      </div>
      <div class="email-body-code">
        <input type="text" class="email-body-code-input">
        <div class="email-body-email-btn">绑定</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "email"
  }
</script>

<style scoped>
  body {
    width: 100%;
    height: 100%;
  }

  .email {
    width: 600px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 50px 20px;
    background-color: #4aae9b;


  }
</style>