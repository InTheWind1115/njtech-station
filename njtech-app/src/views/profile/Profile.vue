<template>
    <div class="home" :style="homeHeight">
        <div class="home-header">
            <div class="head">
                <div class="head-drop">修改头像</div>
                <img src="@/assets/images/zxc.png" alt="">
                <label for="head-input" @mouseover="showDrop" @mouseout="hideDrop" />
                <input id="head-input" type="file" >
            </div>
            <span class="username">{{showUsrName}}</span>
        </div>
        <div class="home-body">
            <div class="home-body-usrphone">
                <input disabled type="text" class="home-body-usrphone-input" :value="showUsrPhone">
                <span class="home-body-usrphone-info">用户手机</span>
            </div>

            <div class="home-body-email">
                <input disabled type="text" class="home-body-email-input" :value="showUsrEmail">
                <span class="home-body-email-info">学校邮箱</span>
                <div class="home-body-email-btn" @click="pushEmail" @mouseover="stopBindEmail">去绑定</div>
            </div>
        </div>
    </div>
</template>

<script>
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
            },
            showUsrName() {
                return this.$store.state.usrname;
            },
            showUsrPhone() {
                return this.$store.state.usrphone;
            },
            showUsrEmail() {
                return this.$store.state.usremail;
            }
        },
        methods: {
            showDrop() {
                document.getElementsByClassName('head-drop')[0].style.display = 'inline-block';
            },
            hideDrop() {
                document.getElementsByClassName('head-drop')[0].style.display = 'none';
            },
            pushEmail() {
                if (this.$store.state.usremail !== '') {
                    return;
                }
                this.$router.push('/email');
            },
            stopBindEmail() {
                console.log(this.$store.state.usremail);
                if (this.$store.state.usremail !== '') {
                    let btn = document.getElementsByClassName('home-body-email-btn')[0];
                    btn.style.cursor = 'not-allowed';
                }
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


                .home-body-email-btn {
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

                .home-body-email-btn:hover {
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


                        .home-body-email-btn {
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

                        .home-body-email-btn:hover {
                            background-color: #33b4de;
                            cursor: pointer;
                        }
                    }
                }
            }

        }
    }

</style>