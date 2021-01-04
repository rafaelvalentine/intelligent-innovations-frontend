<template>
  <div></div>
</template>

<script>
import Vue from "vue";
export const contestShareButton = Vue.component("share-button", {
  props: ["color", "width", "height"],
  mounted() {},
  data: () => ({
    src: require("../../themes/assets/images/share.svg"),
    styleObject: {
      outline: "none"
    }
  }),
  template: `
    <v-btn class="mx-2" fab small :color="color" width='30px' height='30px' :style="styleObject">
      <img id='share-button-icon' class='share-button-icon' :src="src" :style="styleObject"/>
    </v-btn>
  `
});
export const mainContestShareButton = Vue.component("contest-share-button", {
  props: ["color", "width", "height"],
  mounted() {},
  data: () => ({
    src: require("../../themes/assets/images/share-main.svg"),
    styleObject: {
      outline: "none"
    }
  }),
  template: `
    <v-btn class="mx-2" fab small :color="color" width='40px' height='40px' :style="styleObject">
      <img id='share-button-icon' class='share-button-icon' :src="src" :style="styleObject"/>
    </v-btn>
  `
});

export const closeContestantModalButton = Vue.component("close-contestant-modal-button", {
  props: ["onHide"],
  mounted() {},
  data: () => ({
    styleObject: {
      outline: "none"
    }
  }),
  template: `
    <v-btn class="mx-2" fab small color="lightGray" width='32px' height='32px' :style="styleObject" @click="onHide">
      <v-icon id="close-contestant-modal-icon" class="danger--text text-button">mdi-close</v-icon>
    </v-btn>
  `
});
export default {};
</script>

<style></style>
