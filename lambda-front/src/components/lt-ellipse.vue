<script setup>
defineProps({
})
</script>

<template>
    <div class="ellipse">
    </div>
</template>

<style scoped>

.ellipse {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translateX(-50%);
    width: 90%;
    height: 1800px;
    background-color: #fff;
    border-radius: 50%;
    z-index: 0;
    background: -webkit-linear-gradient(180deg, #7000FF 0%,#AE2727 100%);
    filter: blur(150px);
}

</style>