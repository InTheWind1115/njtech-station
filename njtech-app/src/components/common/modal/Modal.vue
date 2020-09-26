<template>
  <transition name="modal-fade">
    <div class="modal-backdrop" v-show="show">
      <div class="modal">
        <div class="modal-header">
            提示
          <div class="btn-close" @click="close">x</div>
        </div>

        <div class="modal-body">
          <slot name="information">
            {{mess}}
          </slot>
        </div>

        <div class="modal-footer">
          <div @click="close" class="determine-btn">确定</div>
        </div>
      </div>
    </div>
  </transition>
  
</template>

<script>
  export default {
    name: "Modal",
    data () {
      return {
        show: false
      }
    },
    methods: {
      close() {
        this.show = false;
      }
    },
    mounted() {
      let _this = this;
      this.bus.$on('showModal', function () {
        _this.show = true;
      })
    }
  }
</script>

<style scoped lang="less">

  .modal-fade-enter, .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active, .modal-fade-leave-active {
    transition: opacity .5s ease;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    .modal {
      width: 350px;
      height: 340px;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0,0,0,.16);
      border-radius: 4px;
      box-sizing: border-box;

      .modal-header {
        position: relative;
        height: 50px;
        box-sizing: border-box;
        padding: 0 15px;
        border-bottom: 2px solid #eeeeee;
        color: #222222;
        line-height: 50px;
        font-size: 16px;

        .btn-close {
          position: absolute;
          top: 0;
          right: 15px;
          height: 50px;
          cursor: pointer;
          color: #4aae9b;
          line-height: 50px;
          background-color: transparent;
          font-size: 20px;
          color: #454545;
          font-weight: 300;
        }

        .btn-close:hover {
          color: #fd4c5d;
        }
      }

      .modal-body {
        padding: 20px 15px;
        box-sizing: border-box;
        line-height: 20px;
        height: 220px;
        width: 100%;
        color: #000000;
        font-size: 16px;
      }

      .modal-footer {
        position: relative;
        box-sizing: border-box;
        height: 80px;
        width: 100%;
        border-top: 2px solid #eee;
        padding: 10px;

        .determine-btn {
          position: absolute;
          width: 70px;
          height: 30px;
          top: 10px;
          right: 20px;
          background-color: #00a1d6;
          text-align: center;
          line-height: 30px;
          border-radius: 4px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
        }

        .determine-btn:hover {
          cursor: pointer;
          background-color: #00b5e5;
        }
      }

    }
  }
</style>