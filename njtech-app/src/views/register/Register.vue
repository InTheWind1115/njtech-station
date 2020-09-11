<template>
  <div id="reg">
    <div class="title">
      注册
    </div>
    <div id="name" class="name input-placeholder focus-color">
      <input  id="username" type="text" placeholder="昵称（中文或字母或数字）" @input="testName" v-model.lazy="username">
      <span id="name-info"></span>
    </div>
    <div class="pwd input-placeholder focus-color">
      <input id="pwd" type="password" placeholder="密码（6-16个字母或数字组成，区分大小写）" @input="testPwd" v-model="userpwd">
      <span id="pwd-info"></span>
    </div>
    <div class="pwd-confirm input-placeholder focus-color">
      <input id="pwd2" type="password" placeholder="确认密码" @input="pwdConfirm" v-model="userpwd2">
      <span id="pwd-info2"></span>
    </div>
    <div class="phone input-placeholder focus-color" @input="testPhone" >
      <input id="phone" type="text" placeholder="填写常用手机号" v-model.lazy="phone">
      <span id="phone-info"></span>
    </div>
    <div class="phone-code input-placeholder focus-color">
      <input id="code-input" type="text" placeholder="请输入短信验证码" v-model="confirmCode">
      <span id="code-btn" @click="getCode" @mouseover="mouseoverBGC" @mouseout="mousedownBGC">点击获取</span>
      <span id="code-info"></span>
<!--      您的验证码输入错误-->
<!--      这个验证码已经失效-->
    </div>
    <div class="agreement">
      <div class="agr-inner">
        <label for="agree">
          <input type="checkbox" id="agree" @change="agreeChange"> 我已同意
          <a href=";">《南工驿站使用协议》</a>
        </label>
      </div>
    </div>
    <div class="reg-btn" tabindex="0" @mouseover="btnOver" @mouseout="btnOut" @click="register">
      注册
    </div>
    <div class="havaAcco">
      <span @click="haveAccount">以有账号，直接登录></span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: "Register",
  data() {
    return {
      regExp_name: new RegExp('^[\u4e00-\u9fffa-zA-Z0-9]{0,15}$'),
      codeBtnFlag: true,
      username: '',
      userpwd: '',
      userpwd2: '',
      phone: '',
      confirmCode: '',
      nameFlag: false,
      pwdFlag: false,
      pwdLenFlag: false
    }
  },
  methods: {
    testPwd() {
      let pwd = document.getElementById('pwd').value;
      let reg = new RegExp("^([0-9]|[a-zA-Z]){6,16}$");
      let this_copy = this;
      if (!reg.test(pwd)) {
        document.getElementById('pwd-info').innerText = '请输入符合长度的字母或数字';
        this_copy.pwdLenFlag = false;
      } else {
        document.getElementById('pwd-info').innerText = '';
        this_copy.pwdLenFlag = true;
      }
    },
    pwdConfirm() {
      let firstPwd = document.getElementById('pwd').value;
      let secondPwd = document.getElementById('pwd2').value;
      let this_copy = this;
      if (firstPwd !== secondPwd) {
        document.getElementById('pwd-info2').innerText = '两次密码不一致';
        this_copy.pwdFlag = false;
      } else {
        document.getElementById('pwd-info2').innerText = '';
        this_copy.pwdFlag = true;
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
    },
    haveAccount() {
      this.$router.replace('/enroll');
    },
    testName() {
      let username = document.getElementById('username').value;
      let hintEle = document.getElementById('name-info');
      let info = "请将昵称控制在15个字符以内";
      let this_copy = this;
      if (this.regExp_name.test(username)) {
        hintEle.innerText = '';
        this_copy.nameFlag = true;
      } else {
        hintEle.innerText = info;
        this_copy.nameFlag = false;
      }
    },
    getCode() {
      if (!this.codeBtnFlag) {
        return;
      }
      let this_copy = this;
      this.codeBtnFlag = false;
      let btn = document.getElementById('code-btn');
      let codeInfo = document.getElementById('code-info');

      let phoneNumber = this_copy.phone;
      // console.log(phoneNumber + "@@@@@@@@@@@@@@@");
      // 这里的代码是向后台发送请求，请求验证码
      axios.get("http://localhost:7963/njtech/phonecode", {params: {
        phone: phoneNumber
        }}).then(res => {
        // console.log(res);
        if (res.data === 0)
          document.getElementById('phone-info').innerText = '此手机号码已被注册';
      }).catch(err => {

      });

      let second = 60;
      codeInfo.innerText = '验证码五分钟内有效';
      let countDown = setInterval(function() {
        btn.style.backgroundColor = '#f5f5f5';
        btn.style.color = '#b8b8b8';
        btn.style.borderColor = '#d9d9d9';
        btn.style.cursor = 'not-allowed';
        btn.innerText = second + 's..';
        second--;
        if (second == -1) {
          clearTimeout(countDown);
          btn.innerText = '点击获取';
          this_copy.codeBtnFlag = true;
          btn.style.backgroundColor = '#00a1d6';
          btn.style.color = '#ffffff';
          btn.style.borderColor = '#00a1d6';
          btn.style.cursor = 'pointer';
          codeInfo.innerText = '';
        }
      }, 1000);
    },
    mouseoverBGC() {
      if (!this.codeBtnFlag)
        return;
      let btn = document.getElementById('code-btn');
      btn.style.backgroundColor = '#33b4de';
    },
    mousedownBGC() {
      if (!this.codeBtnFlag)
        return;
      let btn = document.getElementById('code-btn');
      btn.style.backgroundColor = '#00a1d6';
    },
    register() {
      let check = document.getElementById('agree');
      if (!check.checked)
        return;
      let this_copy = this;
      let code = document.getElementById('code-input').value;
      if (this.nameFlag && this.pwdFlag && this.pwdLenFlag) {
        axios.post("http://localhost:7963/njtech/signup", `username=${this_copy.username}&userPwd=${this_copy.userpwd}&phone=${this_copy.phone}&code=${code}`).then(res => {
          if (res.data === 0) {
            document.getElementById('code-info').innerText = '这个验证码已经失效';
          } else if (res.data === -1) {
            document.getElementById('code-info').innerText = '您的验证码输入错误';
          } else if (res.data === 1) {
            this.$router.replace('/enroll');
          }
        });
      } else
        return;
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
        /*background-color: #33b4de;*/
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

    #name {
      position: relative;
      span {
        position: absolute;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        right: -162.08px;
        color: #f45d90;

      }
    }

    .phone-code {
      position: relative;

      #code-info {
        position: absolute;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        right: -112px;
        color: #f45d90;
      }
    }
  }
</style>