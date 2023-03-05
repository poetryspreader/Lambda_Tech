<script setup>
import Navi from './components/lt-navbar.vue'
import Ellipse from './components/lt-ellipse.vue'
import Button from './components/lt-button-getintouch.vue'
import Footer from './components/lt-footer.vue'
</script>

<template>
  <Navi />
  <main>
    <h1 class="title">
      <span>
        Full automation.
      </span><br>
      Diversification.
    </h1>
    <h2 class="text">
      Quantitative cryptocurrency trading platform designed to capitalize<br>
      on cutting-edge digital asset markets. Get high-powered results from<br>
      our data driven, market-proven solutions
    </h2>
    <Button getintouch="Get in touch"/>
    <Footer />
  </main>
  <Ellipse />
</template>

<style scoped>

main {
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 1;
}

.title {
  margin-top: 100px;
  margin-bottom: 30px;
  font-weight: 800;
  font-size: 80px;
  line-height: 94px;
}

span {
  background: -webkit-linear-gradient(-90deg, #FFD874 20.85%,#ffcd4e 15%, #FF43D6 70.9%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: inherit;
}
.text {
  max-width: 800px;
  margin: 0 auto;
  line-height: 43px;
  font-size: 24px;
  font-weight: 400;
}


/* @media (min-width: 1024px) {

} */
</style>
