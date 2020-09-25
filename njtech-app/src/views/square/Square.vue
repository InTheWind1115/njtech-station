<template>
    <div>
        广场
        <button type="button" @click="showModal">打开Modal</button>
        <modal :show="isModalVisble" @close="closeModal"></modal>
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
                // this.isModalVisble = true;
                this.bus.$emit('change', false);
                this.bus.$emit('userName', '凉风有信');
            },
            closeModal() {
                this.isModalVisble = false;
            }
        }
    }
</script>

<style scoped>

</style>