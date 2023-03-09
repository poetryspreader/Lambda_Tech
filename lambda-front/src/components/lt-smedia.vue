<script setup>
import linkedin_logo from '../icons/lt-linkedin-logo.vue'
import telegram_logo from '../icons/lt-telegram-logo.vue'

defineProps({
})
</script>

<template>
    <div class="smedia">
        <a href="https://t.me/rbdubas">
            <telegram_logo />
        </a>
        <a href="https://www.linkedin.com/company/lambdatechnology/">
            <linkedin_logo />
        </a>
    </div>
</template>

<style scoped>

.smedia {
    margin-top: 30px;
}

a {
    margin: 0 5px;
}
</style>