<template>
  <div
    id="footer"
    class="footer light w-100 mt-auto d-flex flex-column justify-content-center align-items-center"
  >
    <div class="top mb-7">
      <img
        :src="require('../../../themes/assets/images/logo-9mobile-light.png')"
      />
      <!-- <p class="_header danger--text text-capitalize"></p> -->
    </div>
    <div class="bottom">
      <router-link class="text-uppercase header--text mx-7" to="/about"
        >about</router-link
      >
      <router-link class="text-uppercase header--text mx-7" to="/how_it_works">
        how it works</router-link
      >
      <router-link class="text-uppercase header--text mx-7" to="/faqs"
        >faqs</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
