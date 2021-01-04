<template>
  <div
    id="_home"
    class="mainBgColor d-flex flex-column justify-content-start align-items-center pt-10"
  >
    <banner />
    <cardwrapper />
    <footerWrapper />
  </div>
</template>

<script>
// @ is an alias to /src
import banner from "../../utils/layout/Home/banner";
import cardwrapper from '../../utils/layout/Home/cardwrapper'
import footerWrapper from '../../utils/layout/Home/footer'
export default {
  name: "Home",
  components: {
    banner,
    cardwrapper,
    footerWrapper
  },
  data: () => ({})
};
</script>
<style lang="sass" src="../../themes/sass/views/home.sass" scoped></style>
