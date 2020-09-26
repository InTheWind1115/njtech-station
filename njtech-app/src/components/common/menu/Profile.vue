<template>
    <div class="profile">
        <div class="portrait">
            <img src="@/assets/images/head.jpg" alt="">
        </div>
        <div class="regLog" v-if="!showNameFlag">
            <div @click="signIn">登录</div>
            <div @click="signUp">注册</div>
        </div>
        <div class="user-name" v-else>
            {{showUsrName}}
        </div>
    </div>
</template>

<script>
    export default {
      name: "Profile",
        data() {
          return {
              showNameFlag: false
          }
        },
        mounted() {
          let _this = this;

          _this.bus.$on('changeProfile', function (flag) {
              console.log("changeProfile执行");
            _this.showNameFlag = flag;
          });

        },
        methods: {
        signIn() {
          this.$router.push('/enroll');
        },
        signUp() {
          this.$router.push('/register');
        }
      },
        computed: {
          showUsrName() {
              return this.$store.state.usrname;
          }
        }
    }
</script>

<style scoped lang="less">
    .profile {
        width: 180px;
        margin: 0px auto;
        border-bottom: 1px solid #e5e9ef;
        margin-bottom: 10px;

        .portrait {
            width: 70px;
            height: 70px;
            margin: 10px auto;

            img {
                width: 70px;
                height: 70px;
                border-radius: 50%;
            }
        }

        .regLog {
            display: -webkit-flex; /* Safari */
            display: flex;
            justify-content: space-between;
            height: 26px;
            width: 100px;
            margin: 0px auto;

            div {
                width: 44px;
                height: 24px;
                font-size: 14px;
                line-height: 24px;
                border: 1px solid #e1e1e2;
                text-align: center;
                color: #5c5c5c;
                background-color: #ffffff;
            }

            div:hover {
                background-color: #f5f5f7;
                cursor: pointer;
            }
        }

        .user-name {
            height: 26px;
            width: 100%;
            text-align: center;
            margin: 0 auto;
            line-height: 26px;
            font-size: 15px;
        }
    }
</style>