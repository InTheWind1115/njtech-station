<template>
    <div id="chat-root" :style="setShowMarginTop">
        <modal>
            <template v-slot:information>
                <div>{{modalInfo}}</div>
            </template>
        </modal>
        <div class="box-top">
            <span>对方：紫霞仙子</span>
        </div>
        <div class="box-show" >
            <div v-for="(value, index) in mess">
                <div v-if="flag[index]">
                    <div class="info-left">
                        <img src="@/assets/images/zhuyin.png" alt="">

                        <span class="messageSended">
                          <span class="tra-border"></span>
                          {{mess[index]}}
                        </span>
                    </div>
                </div>
                <div v-else>
                    <div class="info-right">
                        <span class="messageSended">{{mess[index]}}</span>
                        <img src="@/assets/images/zxc.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="box-bottom">
            <textarea class="message" @focus="changeBGC1" @blur="changeBGC2" @keyup.enter="sendMessage"></textarea>
            <div class="btn-div">
                <span class="send" @click="sendMessage">发送</span>
                <span class="match-leave" @click="matchOrLeave" @mouseover="matchLeaveChangeStyle1" @mouseout="matchLeaveChangeStyle2">{{funcInfo}}</span>
            </div>
        </div>
    </div>

</template>

<script>
  import Modal from "@/components/common/modal/Modal";
    export default {
      components: {
        Modal
      },
      name: "Chat",
      data() {
        return {
          modalFlag: false,
          information: '',
          mess: ["神仙？", "(摇头)", "妖怪？", "(摇头)", "谢谢！(牵驴向门口走去)", "喂！盘丝洞不要乱闯！", "盘丝洞？你当我不识字，明明是水帘洞嘛！", "(至尊宝抬头看时，不禁大惊)", "盘丝洞....，这名字也蛮好听的，好，就叫盘丝洞！(手一挥，将水帘洞变为盘丝洞)", "以后我就住在这儿！", "等一等!", "(手一挥，将至尊宝打倒，又将月光宝盒抓在手中)", "我现在郑重宣布，这座山所有的东西都是属于我的！"],
          flag: [true, false, true, false, true, false, true, false, true, true, false, true, true],
          // mess: ["我的意中人在附近", "啊，你看到他了？", "没有，因为我的紫青宝剑发出嘟嘟的声音", "哪儿来的嘟嘟声", "哎呀，我知道你听不见我才嘟给你听的嘛", "完了，我好害怕，我不骗你，我真的好害怕", "你怕什么？", "这段姻缘是上天安排的，你说我怕不怕？", "又来了......", "是啊！我的心在跳，我的宝剑在嘟，怎么办？", "怎么跟他说？怎么跟他说？"],
          // flag: [true, false, true, false, true, true, false, true, false, true, true],
          funcInfo: "匹配",
          websocket: null,
          modalInfo: ''
        }
      },
      computed: {
        setShowMarginTop() {
          let height = document.documentElement.clientHeight;
          let marginTop = (height - 592) / 2;
          return {marginTop: marginTop + 'px'};
        }
      },
      mounted: function() {
        this.$nextTick(function () {
          this.websocket = new WebSocket('ws://39.102.69.4:8080/njtech/chat');
        })
      },
      methods: {
        changeBGC1() {
          let textarea = document.getElementsByClassName('message')[0];
          let bottomDiv = document.getElementsByClassName('btn-div')[0];
          textarea.style.backgroundColor = '#ffffff';
          bottomDiv.style.backgroundColor = '#ffffff';
        },
        changeBGC2() {
          let textarea = document.getElementsByClassName('message')[0];
          let bottomDiv = document.getElementsByClassName('btn-div')[0];
          textarea.style.backgroundColor = '#f5f5f5';
          bottomDiv.style.backgroundColor = '#f5f5f5';
        },
        sendMessage() {

          let message = document.getElementsByClassName('message')[0];
          let box_show = document.getElementsByClassName('box-show')[0];
          let this_copy = this;
          let messStr = message.value.replace(/[\r\n]/g,"").replace(/[\"]/g, "“").replace(/[\"]/g, "”");
          if (messStr != '') {
            let requstJson = `{"type": 1, "content": "${messStr}"}`;
            this_copy.websocket.send(requstJson);
            this.mess.push(message.value);
            this.flag.push(false);
            message.value = '';
            message.focus();
            setTimeout(()=>{
              box_show.scrollTop = box_show.scrollHeight;
            },0)
          }
        },
        matchOrLeave() {
          let _this = this;

          if (_this.funcInfo === '匹配') {
            let requstJson = '{"type": 0, "content": ""}';
            _this.websocket.send(requstJson);
          } else if (_this.funcInfo === '离开') {
            let requstJson = '{"type": -1, "content": ""}';
            _this.websocket.send(requstJson);
          }

          // 当客户端和服务端连接时调用
          // webSocket.onopen = function () {
          //     webSocket.send("Hello Websocket!");
          // }

          // 客户端受到服务端发来的消息时，会触发onmessage时间，注意mess是一个JSON格式数据
          _this.websocket.onmessage = function (mess) {
            let data = JSON.parse(mess.data);
            let content = data.content;
            console.log(content);
            if (data.type === -4) {
                _this.modalInfo = content;
                _this.bus.$emit('showModal');
            } else if (data.type === -3) {
                _this.modalInfo = content;
                _this.bus.$emit('showModal');
            } else if (data.type === -2) {
                _this.modalInfo = content;
                _this.bus.$emit('showModal');
            } else if (data.type === -1) {
                _this.funcInfo = '匹配';
              if (data.extra !== 'me')
                _this.bus.$emit('showModal');
              _this.modalInfo = content;
            } else if (data.type === 0) {
              _this.funcInfo = "离开";
              _this.modalInfo = content;
              _this.bus.$emit('showModal');
            } else if (data.type === 1) {
              let messFrom = data.content;
              _this.mess.push(messFrom);
              _this.flag.push(true);
            }

            setTimeout(() => {
              let ele = document.getElementsByClassName('box-show')[0];
              ele.scrollTop = ele.scrollHeight;
            }, 0)
          }

          // 客户端受到服务端发送的关闭连接的请求时，出发onclose事件
          _this.websocket.onclose = function(mess) {
            console.log(mess);
          }

          // 如果出现连接，处理，接收，发送数据失败的时候就会触发onerror事件
          _this.websocket.onerror = function (mess) {
            console.log(mess);
          }

        },
        matchLeaveChangeStyle1() {
          let ele = document.getElementsByClassName('match-leave')[0];
          if (this.funcInfo == '匹配') {
            ele.style.border = '1px solid #33b4de';
            ele.style.backgroundColor = '#33b4de';
            ele.style.color = '#ffffff';
          } else {
            ele.style.border = '1px solid #fd4c5d';
            ele.style.backgroundColor = '#fd4c5d';
            ele.style.color = '#ffffff';
          }
        },
        matchLeaveChangeStyle2() {
          let ele = document.getElementsByClassName('match-leave')[0];
          ele.style.border = '1px solid #e1e1e1';
          ele.style.backgroundColor = '#f5f5f5';
          ele.style.color = '#606060';

        },
        closeModal() {
          this.modalFlag = false;
        }
      }
    }
</script>

<style lang="less" scoped>
  #chat-root {
    width: 542px;
    height: 592px;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid #d9d9d9;
    background-color: #ffffff;

    .box-top {
      width: 540px;
      height: 60px;
      background-color: #f5f5f5;

      span {
        margin-left: 30px;
        font-size: 16px;
        line-height: 60px;
        color: #000000;
      }
    }

    .box-show {
      width: 540px;
      height: 390px;
      background-color: #f1f3f4;
      box-sizing: border-box;
      border-top: 1px solid #e7e7e7;
      border-bottom: 1px solid #e7e7e7;
      padding-left: 30px;
      padding-right: 30px;
      overflow: auto;
      overflow-x: hidden;

      .info-left {
        position: relative;
        width: 480px;
        margin-bottom: 15px;

        img {
          position: absolute;
          width: 34px;
          height: 34px;
          left: 0;
          top: 0;
          border-radius: 2px;
        }

        .messageSended {
          position: relative;
          display: inline-block;
          box-sizing: border-box;
          border: 1px solid #ededed;
          background-color: #ffffff;
          color: #232323;
          font-size: 14px;
          margin-left: 42px;
          border-radius: 4px;
          min-height: 34px;
          max-width: 287px;
          padding: 11px 10px 11px 10px;

          .tra-border {
            position: absolute;
            z-index: 99;
            left: -8px;
            top: 9px;
            content: "";
            width: 0;
            height: 0;
            border-width: 8px 8px 8px 0;
            border-style: solid;
            border-color: transparent #ededed transparent;
          }
        }

        .messageSended:before {
          position: absolute;
          left: -8px;
          top: 9px;
          content: "";
          z-index: 100;
          width: 0;
          height: 0;
          border-width: 8px 8px 8px 0;
          border-style: solid;
          border-color: transparent #ffffff transparent;
        }

        .messageSended:hover {
          background-color: #f6f6f6;

          .tra-border {
            position: absolute;
            z-index: 99;
            left: -8px;
            top: 9px;
            content: "";
            width: 0;
            height: 0;
            border-width: 8px 8px 8px 0;
            border-style: solid;
            border-color: transparent #e7e7e7 transparent;
          }
        }

        .messageSended:hover:before {
          position: absolute;
          left: -8px;
          top: 9px;
          content: "";
          width: 0;
          height: 0;
          border-width: 8px 8px 8px 0;
          border-style: solid;
          border-color: transparent #f6f6f6 transparent;
        }


      }

      .info-right {
        display: flex;
        justify-content: flex-end;
        width: 480px;
        margin-bottom: 15px;

        img {
          width: 34px;
          height: 34px;
          border-radius: 2px;
        }

        .messageSended {
          position: relative;
          margin-right: 8px;
          box-sizing: border-box;
          display: inline-block;
          background-color: #9eea6a;
          color: #232323;
          font-size: 14px;
          border-radius: 4px;
          min-height: 34px;
          max-width: 287px;
          padding: 11px 10px 11px 10px;
        }

        .messageSended:after {
          position: absolute;
          right: -7px;
          top: 9px;
          content: "";
          width: 0;
          height: 0;
          border-width: 8px 0px 8px 8px;
          border-style: solid;
          border-color: transparent #9eea6a transparent;
        }

        .messageSended:hover {
          background-color: #98e165;
        }

        .messageSended:hover:after {
          position: absolute;
          right: -7px;
          top: 9px;
          content: "";
          width: 0;
          height: 0;
          border-width: 8px 0px 8px 8px;
          border-style: solid;
          border-color: transparent #98e165 transparent;
        }


      }


    }

    .box-bottom {
      width: 540px;
      height: 140px;

      textarea {
        width: 100%;
        height: 105px;
        display: block;
        background-color: #f5f5f5;
        box-sizing: border-box;
        border: none;
        resize: none;
        padding-top: 10px;
        padding-left: 25px;
        outline: none;
        font-size: 14px;
        color: #000000;
      }

      .btn-div {
        position: relative;
        width: 100%;
        height: 35px;
        background-color: #f5f5f5;

        .send {
          position: absolute;
          top: 5px;
          height: 25px;
          width: 60px;
          box-sizing: border-box;
          border: 1px solid #e1e1e1;
          text-align: center;
          line-height: 23px;
          background-color: #f5f5f5;
          color: #606060;
          right: 30px;
          font-size: 14px;
          cursor: pointer;
        }

        .send:hover {
          border: 1px solid #33b4de;
          background-color: #33b4de;
          color: #ffffff;
        }

        .match-leave {
          position: absolute;
          top: 5px;
          height: 25px;
          width: 60px;
          box-sizing: border-box;
          border: 1px solid #e1e1e1;
          text-align: center;
          line-height: 23px;
          background-color: #f5f5f5;
          color: #606060;
          left: 30px;
          font-size: 14px;
          cursor: pointer;
        }

        .match-leave:hover {
          border: 1px solid #33b4de;
          background-color: #33b4de;
          color: #ffffff;
        }
      }
    }
  }
</style>