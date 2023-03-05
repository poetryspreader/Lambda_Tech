<script setup>
import LogoIcon from '../icons/lt-logo_icon.vue'

defineProps({
    label: String,
})
</script>
<template>
    <div class="wrapper">
        <LogoIcon/>
        <h1>{{ label }}</h1>
    </div>


</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap');
.wrapper {
    /* display: flex; */
    /* align-items: center; */
}

h1 {
    font-size: 40px;
    margin-left: 5px;
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
}

</style>