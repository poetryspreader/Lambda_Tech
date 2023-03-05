<script setup>
import Logo from './lt-logo.vue'
import ContactUs from './lt-button-contactus.vue'
</script>

<template>
    <div class="wrapper">
        <Logo label="Lambda Tech"/>
        <div>
            <a href="#" target="_blank">About us</a>
            <ContactUs contactUs="Contact Us"/>
        </div>
    </div>

</template>

<style scoped>

.wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* margin-top: 102px; */
}

a {
    text-decoration: none;
    color: var(--vt-c-white);
}




</style>