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
    margin-left: 70px;
    width: 190px;
    height: 62px;
    background-color: var(--color-contactUs);
    color: var(--lt-c-white);
    font-family: 'Manrope', sans-serif;
    font-size: 18px;
    font-weight: 700;
    border: none;
    border-radius: 140px;
    /* z-index: 1 */
}

</style>