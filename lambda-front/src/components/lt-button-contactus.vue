<script setup>
defineProps({
    contactUs: String,
})
</script>

<template>
    <button class="button">
        {{contactUs}} 
    </button>

</template>

<style scoped>

.button {
    width: 190px;
    height: 62px;
}

</style>