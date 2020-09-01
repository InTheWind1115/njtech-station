<template>
  <div id="reg">
    <div class="title">
      注册
    </div>
    <div id="name" class="name input-placeholder focus-color">
      <input type="text" placeholder="昵称" >
    </div>
    <div class="pwd input-placeholder focus-color">
      <input id="pwd" type="password" placeholder="密码（6-16个字母或数字组成，区分大小写）" @input="testPwd">
      <span id="pwd-info"></span>
    </div>
    <div class="pwd-confirm input-placeholder focus-color">
      <input id="pwd2" type="password" placeholder="确认密码" @input="pwdConfirm">
      <span id="pwd-info2"></span>
    </div>
    <div class="phone input-placeholder focus-color" @input="testPhone">
      <input id="phone" type="text" placeholder="填写常用手机号">
      <span id="phone-info"></span>
    </div>
    <div class="phone-code input-placeholder focus-color">
      <input type="text" placeholder="请输入短信验证码">
      <span id="code-btn">点击获取</span>
    </div>
    <div class="agreement">
      <div class="agr-inner">
        <label for="agree">
          <input type="checkbox" id="agree" @change="agreeChange"> 我已同意
          <a href=";">《南工驿站使用协议》</a>
        </label>
      </div>
    </div>
    <div class="reg-btn" tabindex="0" @mouseover="btnOver" @mouseout="btnOut">
      注册
    </div>
    <div class="havaAcco">
      <span>以有账号，直接登录></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  methods: {
    testPwd() {
      let pwd = document.getElementById('pwd').value;
      let reg = new RegExp("^([0-9]|[a-zA-Z]){6,16}$");
      if (!reg.test(pwd)) {
        document.getElementById('pwd-info').innerText = '请输入符合长度的字母或数字';
      } else {
        document.getElementById('pwd-info').innerText = '';
      }
    },
    pwdConfirm() {
      let firstPwd = document.getElementById('pwd').value;
      let secondPwd = document.getElementById('pwd2').value;
      if (firstPwd !== secondPwd) {
        document.getElementById('pwd-info2').innerText = '两次密码不一致';
      } else {
        document.getElementById('pwd-info2').innerText = '';
      }
    },
    testPhone() {
      let phone = document.getElementById('phone').value;
      let reg = new RegExp('^1[3-9]\\d{9}$');
      if (!reg.test(phone)) {
        document.getElementById('phone-info').innerText = '请输入正确的手机号';
      } else {
        document.getElementById('phone-info').innerText = '';
      }
    },
    agreeChange() {
      let check = document.getElementById('agree');
      if (check.checked) {
        document.getElementsByClassName('reg-btn')[0].style = 'cursor: pointer; background-color: #00a1d6; color: #ffffff;';
      } else {
        document.getElementsByClassName('reg-btn')[0].style = 'cursor: not-allowed; background-color: #f5f5f5; color: #b7b7b7';
      }
    },
    btnOver() {
      let btn = document.getElementsByClassName('reg-btn')[0];
      if (btn.style.cursor == 'pointer') {
        btn.style.backgroundColor = '#33b4de';
      }
    },
    btnOut() {
      let btn = document.getElementsByClassName('reg-btn')[0];
      if (btn.style.cursor == 'pointer') {
        btn.style.backgroundColor = '#00a1d6';
      }
    }
  }
}
</script>

<style scoped lang="less">
  #reg {
    //background-color: red;
    //position: absolute;
    width: 800px;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 80px;
    //border: 1px solid #e1e1e2;

    //top: 50%;

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

    //input单击后设置border的样式
    .focus-color {
      input:focus {
        border-color: #00a1d6;
      }
    }


    .name, .pwd, .pwd-confirm, .phone, .phone-code {
      position: relative;
      width: 420px;
      height: 40px;
      margin: 0 auto;
      box-sizing: border-box;

      input {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        outline: 0;
        padding: 0 15px;
        -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
      }

      #code-btn {
        position: absolute;
        right: 2px;
        width: 130px;
        box-sizing: border-box;
        height: 36px;
        margin-top: 2px;
        background-color: #00a1d6;
        border-color: #00a1d6;
        text-align: center;
        line-height: 36px;
        font-size: 14px;
        font-weight: 700;
        color: #ffffff;
        border-radius: 4px;
      }

      #code-btn:hover {
        background-color: #33b4de;
        cursor: pointer;
      }
    }

    .agreement {
      width: 420px;
      height: 40px;
      margin: 0 auto;
      box-sizing: border-box;

      .agr-inner {
        height: 20px;
        margin: 10px 0;

        label {
          font-size: 12px;
          cursor: pointer;

          input {
            vertical-align: middle;
            margin-bottom: 2px;
            cursor: pointer;
          }

          a {
            font-size: 12px;
            text-decoration: none;
            color: #00a1d6;
          }
        }
      }
    }

    .reg-btn {
      width: 420px;
      height: 40px;
      margin: 0 auto;
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px solid #d9d9d9;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      background-color: #f5f5f5;
      color: #b7b7b7;
      cursor: not-allowed;
      outline: none;
    }
    .havaAcco {
      width: 420px;
      height: 40px;
      margin: 0 auto;
      position: relative;

      span {
        cursor: pointer;
        position: absolute;
        right: 0;
        font-size: 14px;
        color: #00a1d6;
        margin-top: 12px;
      }
    }

    .name, .pwd, .pwd-confirm, .phone, .title {
      margin-bottom: 40px!important;
    }

    .title {
      width: 420px;
      height: 40px;
      margin: 0 auto;
      line-height: 40px;
      font-size: 38px;
      text-align: center;
      box-sizing: border-box;
    }

    .pwd {
      position: relative;

      #pwd-info {
        position: absolute;
        font-size: 12px;
        color: #f45d90;
        right: -160px;
        top: 13.5px;
      }
    }

    .pwd-confirm {
      position: relative;

      #pwd-info2 {
        position: absolute;
        font-size: 12px;
        color: #f45d90;
        right: -88px;
        top: 13.5px;
      }
    }

    .phone {
      position: relative;

      #phone-info {
        position: absolute;
        font-size: 12px;
        color: #f45d90;
        right: -112px;
        top: 13.5px;
      }
    }
  }
</style>