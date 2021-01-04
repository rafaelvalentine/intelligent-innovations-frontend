<template>
  <div
    id="_banner"
    class="banner d-flex flex-column justify-content-center align-items-center"
    :style="{
      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.28), rgba(0, 0, 0, 0.28)), url(${image})`
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    image: null
  }),
  props: {
    src: String
  },
  mounted() {
    this.image = this.src;
  }
};
</script>

<style lang="sass" scoped></style>
