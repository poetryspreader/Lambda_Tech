<script setup>
import Logo from './lt-logo.vue'
import ContactUs from './lt-button-contactus.vue'
</script>

<template>
    <nav>
        <Logo label="Lambda Tech"/>
        <div>
            <a href="#" target="_blank">About us</a>
            <ContactUs contactUs="Contact Us"/>
        </div>
    </nav>
</template>

<style scoped>

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 150px;
    padding-top: 65px;
}

a {
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
    color: var(--lt-c-white);
}


@media (min-width: 1024px) {
}
</style>