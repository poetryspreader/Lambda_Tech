<script setup>
defineProps({
    getintouch: String,
})
</script>

<template>
    <button class="button">
        {{getintouch}} 
    </button>
</template>

<style scoped>

.button {
    margin: 0 auto;
    margin-top: 37px;
    width: 370px;
    height: 90px;
    background-color: var(--color-getintouch);
    color: var(--lt-c-white);
    font-family: 'Manrope', sans-serif;
    font-size: 34.58px;
    font-weight: 700;
    border: none;
    border-radius: 140px;

}

</style>