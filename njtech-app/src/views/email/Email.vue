<template>
  <div class="email">
    <div class="email-header">
      <div class="email-header-info">邮箱绑定</div>
    </div>
    <div class="email-body">
      <div class="email-body-email">
        <input v-model.lazy="usremail" type="text" class="email-body-email-input input-placeholder" placeholder="请输入工大邮箱">
        <div class="email-body-email-btn" @click="getEmailCode">{{usremailInfo}}</div>
      </div>
      <div class="email-body-code">
        <input v-model.lazy="usrcode" type="text" class="email-body-code-input input-placeholder" placeholder="请输入验证码">
        <div class="email-body-code-btn" @click="confirmMailCode">绑定</div>
      </div>
    </div>
    <modal>
      <template v-slot:information>
        {{modalInfo}}
      </template>
    </modal>
  </div>
</template>

<script>
  import Modal from "@/components/common/modal/Modal";
  export default {
    components: {
      Modal
    },
    name: "email",
    data() {
      return {
        usremail: '',
        usrcode: '',
        codeBtnFlag: true,
        modalInfo: '',
        usremailInfo: '获取验证码'
      }
    },
    methods: {
      getEmailCode() {
        console.log(this.usremail)
        if (!this.codeBtnFlag)
          return;
        this.codeBtnFlag = false;
        let btn = document.getElementsByClassName('email-body-email-btn')[0];
        let _this = this;
        _this.$myRequest({
          url: 'sendmailcode',
          method: 'post',
          data: {
            email: _this.usremail
          }
        }).then(res => {
          let type = res.data.type;
          let content = res.data.content;
          if (type === -2) {
            _this.bus.$emit('showModal');
            _this.modalInfo = content;
          } else if (type === -1) {
            _this.bus.$emit('showModal');
            _this.modalInfo = content;
          } else if (type === 0) {
            _this.bus.$emit('showModal');
            _this.modalInfo = content;
          } else {
            _this.bus.$emit('showModal');
            _this.modalInfo = content;
          }
        });
        let second = 10;
        btn.style.backgroundColor = '#f5f5f5';
        btn.style.color = '#b8b8b8';
        btn.style.borderColor = '#d9d9d9';
        btn.style.cursor = 'not-allowed';
        _this.usremailInfo = second + 's..';
        let countDown = setInterval(function() {
          _this.usremailInfo = --second + 's..';
          if (second == -1) {
            clearTimeout(countDown);
            _this.usremailInfo = '获取验证码';
            _this.codeBtnFlag = true;
            btn.style.backgroundColor = '#00a1d6';
            btn.style.color = '#ffffff';
            btn.style.borderColor = '#00a1d6';
            btn.style.cursor = 'pointer';
          }
        }, 1000);
      },
      confirmMailCode() {
        let _this = this;
        _this.$myRequest({
          url: 'confirmmailcode',
          method: 'post',
          data: {
            code: _this.usrcode
          }
        }).then(res => {
          let type = res.data.type;
          let content = res.data.content;
          if (type === -2) {
            _this.bus.$emit('showModal');
            _this.modalInfo = content;
          } else if (type === -1) {
            _this.bus.$emit('showModal');
            _this.modalInfo = content;
          } else if (type === 0) {
            _this.bus.$emit('showModal');
            _this.modalInfo = content;
          } else {
            _this.bus.$emit('showModal');
            _this.modalInfo = content;
            _this.$store.commit('changeUsrInfo', {
              usremail: _this.usremail,
            });
            setTimeout(function () {
              _this.$router.replace('/profile');
            }, 2000);
          }
        })
      }
    }
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