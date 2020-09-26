<template>
    <div>
        广场
        <button type="button" @click="showModal">打开Modal</button>
        <modal></modal>
    </div>

</template>

<script>
    import Modal from "@/components/common/modal/Modal";
    export default {
        name: "Square",
        components: {
            modal: Modal
        },
        methods: {
            showModal() {
                this.bus.$emit('change', false);
                this.bus.$emit('userName', '凉风有信');
            }
        }
    }
</script>

<style scoped>

</style>