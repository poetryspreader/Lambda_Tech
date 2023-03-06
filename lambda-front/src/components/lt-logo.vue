<script setup>
import LogoIcon from '../icons/lt-logo_icon.vue'

defineProps({
    label: String,
})
</script>

<template>
    <div>
        <LogoIcon/>
        <h1>{{ label }}</h1>
    </div>
</template>

<style scoped>

div {
    display: flex;
    align-items: center;
}

h1 {
    font-size: 40px;
    margin-left: 5px;
    font-weight: 800;
}

</style>