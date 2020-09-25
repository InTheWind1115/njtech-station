<template>
  <div class="email">
    <div class="email-header">
      <div class="email-header-info">邮箱绑定</div>
    </div>
    <div class="email-body">
      <div class="email-body-email">
        <input type="text" class="email-body-email-input input-placeholder" placeholder="请输入工大邮箱">
        <div class="email-body-email-btn">获取验证码</div>
      </div>
      <div class="email-body-code">
        <input type="text" class="email-body-code-input input-placeholder" placeholder="请输入验证码">
        <div class="email-body-code-btn">绑定</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "email"
  }
</script>

<style scoped lang="less">
  body {
    width: 100%;
    height: 100%;
  }

  // 下面设置的是placeholder中的字体的颜色和大小
  .input-placeholder {

    input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{
      color:#c0c4cc;
      font-size:14px;
    }

    input:-moz-placeholder,textarea:-moz-placeholder{
      color:#c0c4cc;
      font-size:14px;
    }

    input::-moz-placeholder,textarea::-moz-placeholder{
      color:#c0c4cc;
      font-size:14px;
    }
    input:-ms-input-placeholder,textarea:-ms-input-placeholder{
      color:#c0c4cc;
      font-size:14px;
    }
  }

  .email {
    width: 600px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 50px 20px;
    //background-color: #00a1d6;

    .email-header {
      width: 100%;
      height: 60px;

      .email-header-info {
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 60px;
        font-size: 26px;
      }
    }

    .email-body {
      width: 100%;

      .email-body-email,
      .email-body-code {
        position: relative;
        width: 420px;
        margin: 20px auto;


        input {
          width: 420px;
          height: 40px;
          margin: 0 auto;
          box-sizing: border-box;
          -webkit-appearance: none;
          background-color: #fff;
          background-image: none;
          border-radius: 4px;
          border: 1px solid #dcdfe6;
          -webkit-box-sizing: border-box;
          color: #606266;
          display: inline-block;
          font-size: 14px;
          line-height: 40px;
          outline: 0;
          padding: 0 15px;
          -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
          transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        }

        .email-body-email-btn {
          position: absolute;
          box-sizing: border-box;
          top: 2px;
          right: 1px;
          width: 100px;
          height: 36px;
          border-radius: 4px;
          text-align: center;
          line-height: 36px;
          background-color: #00a1d6;
          color: #ffffff;
        }

        .email-body-email-btn:hover {
          background-color: #33b4de;
          cursor: pointer;
        }

        .email-body-code-btn {
          width: 100px;
          height: 40px;
          margin: 20px auto;
          background-color: #00a1d6;
          color: #ffffff;
          border-radius: 4px;
          line-height: 40px;
          text-align: center;
        }

        .email-body-code-btn:hover {
          background-color: #33b4de;
          cursor: pointer;
        }

        input:focus {
          border-color: #00a1d6;
        }
      }
    }
  }
</style>