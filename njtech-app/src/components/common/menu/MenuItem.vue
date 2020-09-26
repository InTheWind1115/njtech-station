<template>
    <div :style="itemSelected" class="item" @click="itemClick">
        <div :style="selectColor" class="item-one"></div>
        <div :style="textColor" class="item-two">{{iconfont}}</div>
        <div :style="textColor" class="item-three">{{name}}</div>
    </div>
</template>

<script>
    export default {
        name: "MenuItem",
        props: {
            path: {
                type: String,
                required: true
            },
            iconfont: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        computed: {
            itemSelected() {
                return this.$route.path.indexOf(this.path) !== -1? {backgroundColor: '#e6e7ea'}: {};
            },
            selectColor() {
                return this.$route.path.indexOf(this.path) !== -1? {backgroundColor: '#c62f2f'}: {};
            },
            textColor() {
                return this.$route.path.indexOf(this.path) !== -1? {color: '#000000'}: {};
            }
        },
        methods: {
            itemClick() {
                this.$router.replace(this.path);
            }
        }
    }
</script>

<style scoped lang="less">

    .item {
        height: 42px;

        div {
            float: left;
            height: 100%;
            line-height: 42px;
        }

        .item-one {
            width: 4px;
            // background-color: #c62f2f;
        }

        .item-two {
            margin-left: 14px;
            margin-right: 7px;
            font-family: 'icomoon';
            font-size: 16px;
            line-height: 42px;
            color: #5c5c5c;
        }

        .item-three {
            font-size: 14px;
            line-height: 42px;
            color: #5c5c5c;
        }
    }

    .item:hover {
        /*background-color: #e6e7ea;*/
        cursor: pointer;

        .item-two, .item-three {
            color: #000000;
        }
    }

</style>