<template>
  <div id="enroll">
    <div class="title distance">
      登录
    </div>
    <div class="account input-placeholder focus-color distance">
      <input id="phone" type="text" placeholder="你的手机号">
    </div>
    <div class="pwd input-placeholder focus-color distance">
      <input id="password" class="input-placeholder focus-color" type="password" placeholder="密码" @input="changeFlag">
      <span v-show="flag" >密码错误</span>
    </div>
    <div class="agreement">
      <label for="agree">
        <input type="checkbox" id="agree"> 记住我
      </label>
      <span>忘记密码?</span>
    </div>
    <div class="btn">
      <span class="btn-enroll" @click="enter">登录</span>
      <span class="btn-reg" @click="reg">注册</span>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  axios.defaults.baseURL = 'http://localhost:7963/njtech/';
export default {
  name: "enroll.vue",
  data() {
    return {
      flag: false
    }
  },
  methods: {
    enter() {
      let phone = document.getElementById("phone").value;
      let pwd = document.getElementById("password").value;
      let paras = {phone: phone, userPwd: pwd};
      axios.post("signin", `phone=${phone}&userPwd=${pwd}`)
        .then(res=>{
          let flag = res.data;
          console.log(flag);
          if(flag === true) {
            console.log('###########');
            this.$router.replace('/square');
            this.flag = false;
          } else {
            this.flag = true;
          }
        })
        .catch(err=>{
          console.log(err)
        })
    },
    reg() {
      this.$router.replace('/register');
    },
    changeFlag() {
      this.flag = false;
    }
  }
}
</script>

<style scoped lang="less">
  #enroll {
    width: 800px;
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 80px;

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

    .account, .pwd {
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
    }

    .agreement {
      position: relative;
      width: 420px;
      height: 40px;
      margin: 0 auto;

      label {
        font-size: 12px;
        color: #717171;
        cursor: pointer;

        input {
          display: inline-block;
          vertical-align: middle;
          margin-bottom: 2px;
          width: 14px;
          height: 14px;
          cursor: pointer;
        }
      }

      span {
        position: absolute;
        cursor: pointer;
        right: 10px;
        top: 4px;
        font-size: 12px;
        color: #00a1d6;
      }

    }

    .btn {
      position: relative;
      width: 420px;
      height: 40px;
      margin: 0 auto;

      .btn-enroll {
        position: absolute;
        width: 186px;
        height: 36px;
        left: 0;
        margin-top: 1px;
        border: 1px solid #0381aa;
        background-color: #00a7de;
        font-size: 14px;
        line-height: 38px;
        text-align: center;
        cursor: pointer;
        color: #ffffff;
        font-weight: 500;
      }

      .btn-enroll:hover {
        background-color: #00bee7;
      }

      .btn-reg {
        position: absolute;
        width: 186px;
        height: 36px;
        right: 0;
        margin-top: 1px;
        border: 1px solid #cccccc;
        background-color: #ffffff;
        font-size: 14px;
        line-height: 38px;
        text-align: center;
        cursor: pointer;
        color: #555555;
        font-weight: 500;
      }
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

    .distance {
      margin-bottom: 40px!important;
    }

    .pwd {
      position: relative;

      span {

        position: absolute;
        line-height: 40px;
        height: 40px;
        width: 48px;
        right: -52px;
        font-size: 12px;
        color: #f45d90;
      }
    }
  }
</style>