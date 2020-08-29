<template>
    <div id="chat-root" :style="boxWidth">
        <div class="chat-box">
            <div class="box-top"></div>
            <div class="box-show"></div>
            <div class="box-bottom"></div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Chat",
        computed: {
            boxWidth() {
                let width = document.body.clientWidth - 190;
                return {width: width + 'px'};
            }
        }
    }
</script>

<style scoped lang="less">
    #chat-root {
        /*background-color: antiquewhite;*/

        .chat-box {
            /*position: relative;*/
            top: 50%;
            width: 540px;
            height: 590px;
            margin: 0 auto;
            /*margin-top: -295px;*/
            background-color: #c62f2f;
        }
    }
</style>