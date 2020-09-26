<template>
    <div class="home" :style="homeHeight">
        <modal :show="modalFlag" @close="closeModal" :mess="information"></modal>
        <div class="home-header">
            <div class="head">
                <div class="head-drop">修改头像</div>
                <img src="@/assets/images/zxc.png" alt="">
                <label for="head-input" @mouseover="showDrop" @mouseout="hideDrop" />
                <input id="head-input" type="file" >
            </div>
            <span class="username">凉风有信</span>
        </div>
        <div class="home-body">
            <div class="home-body-usrphone">
                <input disabled type="text" class="home-body-usrphone-input">
                <span class="home-body-usrphone-info">用户手机</span>
            </div>

            <div class="home-body-email">
                <input disabled type="text" class="home-body-email-input">
                <span class="home-body-email-info">学校邮箱</span>
                <div class="info2 code-btn" @click="pushEmail">去绑定</div>
                <!--                <div class="back-info" v-show="backInfo">-->
                <!--                    <div class="email-code">-->
                <!--                        <input type="text" class="email-code-input" placeholder="请输入验证码">-->
                <!--                        <span class="info1">验证码</span>-->
                <!--                        <div class="info2" @click="confirmEmailCode">确定</div>-->
                <!--                    </div>-->
                <!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    axios.defaults.baseURL = 'http://39.102.69.4:8080/njtech/';
    import Modal from "@/components/common/modal/Modal";
    export default {
        name: "Profile",
        components: {
          modal: Modal
        },
        data() {
            return {
                backInfo: false, //用来决定是否显示验证码输入框的
                codeBtnFlag: true,
                modalFlag: false,
                information: ''
            }
        },
        computed: {
            homeHeight() {
                return {height: document.documentElement.clientHeight + 'px'}
            }
        },
        methods: {
            showDrop() {
                document.getElementsByClassName('head-drop')[0].style.display = 'inline-block';
            },
            hideDrop() {
                document.getElementsByClassName('head-drop')[0].style.display = 'none';
            },
            // getEmailCode() {
            //     if (!this.codeBtnFlag) {
            //         return;
            //     }
            //     this.codeBtnFlag = false;
            //     let btn = document.getElementsByClassName('code-btn')[0];
            //     let _this = this;
            //     _this.backInfo = true;
            //     let email = document.getElementsByClassName('email-input')[0].value;
            //     axios.post("sendmailcode", `email=${email}`).then(res => {
            //         let type = res.data.type;
            //         let content = res.data.content;
            //         if (type === -2) {
            //             _this.modalFlag = true;
            //             _this.information = content;
            //         } else if (type === -1) {
            //             _this.modalFlag = true;
            //             _this.information = content;
            //         } else if (type === 0) {
            //             _this.modalFlag = true;
            //             _this.information = content;
            //         } else {
            //             _this.modalFlag = true;
            //             _this.information = content;
            //         }
            //     })
            //
            //     let second = 60;
            //     let countDown = setInterval(function() {
            //         btn.style.backgroundColor = '#f5f5f5';
            //         btn.style.color = '#b8b8b8';
            //         btn.style.borderColor = '#d9d9d9';
            //         btn.style.cursor = 'not-allowed';
            //         btn.innerText = second + 's..';
            //         second--;
            //         if (second == -1) {
            //             clearTimeout(countDown);
            //             btn.innerText = '获取验证码';
            //             _this.codeBtnFlag = true;
            //             btn.style.backgroundColor = '#00a1d6';
            //             btn.style.color = '#ffffff';
            //             btn.style.borderColor = '#00a1d6';
            //             btn.style.cursor = 'pointer';
            //         }
            //     }, 1000);
            // },
            // confirmEmailCode() {
            //     let _this = this;
            //     let code = document.getElementsByClassName('email-code-input')[0].value;
            //     axios.post("confirmmailcode", `code=${code}`).then(res => {
            //         let type = res.data.type;
            //         let content = res.data.content;
            //         if (type === -2) {
            //             _this.modalFlag = true;
            //             _this.information = content;
            //         } else if (type === -1) {
            //             _this.modalFlag = true;
            //             _this.information = content;
            //
            //         } else if (type === 0) {
            //             _this.modalFlag = true;
            //             _this.information = content;
            //
            //         } else {
            //             _this.modalFlag = true;
            //             _this.information = content;
            //
            //         }
            //     })
            // },
            // closeModal() {
            //     this.modalFlag = false;
            // }
            pushEmail() {
                this.$router.push('/email');
            }
        }
    }
</script>

<style scoped lang="less">

    .home {
        box-sizing: border-box;
        width: 600px;
        margin: 0 auto;
        padding: 50px 20px 0px;
        /*background-color: #555555;*/

        .home-header {
            width: 560px;
            height: 80px;
            /*background-color: #00a1d6;*/
            padding-bottom: 16px;
            border-bottom: 1px solid #e5e9ef;

            .head {
                position: relative;
                display: inline-block;
                width: 64px;
                height: 64px;
                line-height: 64px;
                background-color: #ffffff;

                .head-drop {
                    position: absolute;
                    z-index: 99;
                    display: none;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, .66);
                    border-radius: 50%;
                    font-size: 12px;
                    font-weight: 300;
                    color: #ffffff;
                    text-align: center;
                    line-height: inherit;
                }

                img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background-color: #c62f2f;
                }

                input {
                    visibility: hidden;
                }

                label {
                    display: inline-block;
                    position: absolute;
                    z-index: 100;
                    opacity: 0;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;

                }

                label:hover {
                    cursor: pointer;
                }
            }

            .username {
                font-size: 18px;
                font-weight: 700;
                color: #222;
                margin-left: 20px;
            }

            .username:hover {
                cursor: pointer;
            }
        }

        .home-body {
            .home-body-email,
            .home-body-usrphone {
                position: relative;
                height: 30px;
                width: 600px;
                margin-top: 30px;
                /*background-color: #00a1d6;*/

                input {
                    height: 30px;
                    width: 220px;
                    box-sizing: border-box;
                    outline: none;
                    border: 1px solid #dcdfe6;
                    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                    text-indent: 8px;
                    font-size: 14px;
                    border-radius: 4px;
                }

                input:focus {
                    border-color: #00a1d6;
                }

                .home-body-email-info,
                .home-body-usrphone-info{
                    display: inline-block;
                    margin-left: 10px;
                    font-size: 15px;
                    line-height: 30px;
                    color: #5c5c5c;
                }


                .info2 {
                    position: absolute;
                    width: 80px;
                    top: 0;
                    left: 310px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    border-radius: 4px;
                    color: #ffffff;
                    background-color: #00a1d6;
                    font-size: 14px;
                }

                .info2:hover {
                    background-color: #33b4de;
                    cursor: pointer;
                }

                .back-info {
                    position: absolute;
                    top: 50px;
                    left: 0;

                    .email-code {
                        position: relative;
                        height: 30px;
                        width: 600px;
                        /*background-color: #00a1d6;*/

                        input {
                            height: 30px;
                            width: 220px;
                            box-sizing: border-box;
                            outline: none;
                            border: 1px solid #dcdfe6;
                            transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                            text-indent: 8px;
                            font-size: 14px;
                            border-radius: 4px;
                        }

                        input:focus {
                            border-color: #00a1d6;
                        }

                        .info1 {
                            display: inline-block;
                            margin-left: 10px;
                            font-size: 15px;
                            line-height: 30px;
                            color: #5c5c5c;
                        }


                        .info2 {
                            position: absolute;
                            width: 40px;
                            top: 0;
                            left: 310px;
                            height: 30px;
                            line-height: 30px;
                            text-align: center;
                            border-radius: 4px;
                            color: #ffffff;
                            background-color: #00a1d6;
                            font-size: 14px;
                        }

                        .info2:hover {
                            background-color: #33b4de;
                            cursor: pointer;
                        }
                    }
                }
            }

        }
    }

</style>