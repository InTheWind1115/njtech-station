<template>
    <div>
        广场
        <button type="button" @click="showModal">打开Modal</button>
        <modal v-show="isModalVisble" @close="closeModal"></modal>
    </div>

</template>

<script>
    import Modal from "@/components/common/modal/Modal";
    export default {
        name: "Square",
        components: {
            modal: Modal
        },
        data() {
            return {
                isModalVisble: false
            }
        },
        methods: {
            showModal() {
                this.isModalVisble = true;
            },
            closeModal() {
                this.isModalVisble = false;
            }
        }
    }
</script>

<style scoped>

</style>