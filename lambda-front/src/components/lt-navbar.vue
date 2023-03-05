<script setup>
import Logo from './lt-logo.vue'
import ContactUs from './lt-button-contactus.vue'
</script>

<template>
    <nav>
        <div class="wrapper">
        <Logo label="Lambda Tech"/>
        <div>
            <a href="#" target="_blank">About us</a>
            <ContactUs contactUs="Contact Us"/>
        </div>
        </div>
    </nav>


</template>

<style scoped>

nav {
    padding: 0 150px;
    padding-top: 90px;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

}

a {
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
    color: var(--lt-c-white);
}




</style>