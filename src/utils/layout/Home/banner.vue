<template>
  <banner :src="require('../../../themes/assets/images/banner-sample.png')">
    <div class="content align-self-start light--text">
      <p class="text-uppercase">
        SALES
      </p>
      <p class="text-uppercase">FIND A MERCHANT</p>
    </div>
  </banner>
</template>

<script>
import banner from "../../../components/banner";
export default {
  components: {
    banner,
  },
};
</script>

<style></style>
