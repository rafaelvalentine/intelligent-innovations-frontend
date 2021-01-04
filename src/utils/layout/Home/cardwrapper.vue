<template>
  <div id="_home-card-wrapper" class="px-3 mt-13 mb-16">
    <div class="d-flex justify-content-between align-items-center">
      <p class="text-h6 font-weight-bold">
        Merchants
      </p>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-y
        class="sort-menu"
      >
        <template v-slot:activator="{ on, attrs }">
          <button
            class="font-weight-light text-button outline-none px-3"
            :style="{ outline: 'none' }"
            v-bind="attrs"
            v-on="on"
          >
            Sort by
          </button>
        </template>
        <v-card class="mx-auto" max-width="344" height="auto" outlined>
          <!-- <v-list-item three-line class="d-flex flex-column"> -->
          <!-- <v-card-text>Lowest</v-card-text>
            <v-card-text elevation-1>Highest</v-card-text> -->
          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                width="100%"
                :elevation="hover ? 24 : 1"
                class="mx-auto pa-2 mt-2 sort-option"
              >
                <v-card-text>Lowest</v-card-text>
              </v-card>
            </template>
          </v-hover>

          <v-hover>
            <template v-slot="{ hover }">
              <v-card
                width="100%"
                :elevation="hover ? 24 : 1"
                class="mx-auto pa-2 mt-2 sort-option"
              >
                <v-card-text>Highest</v-card-text>
              </v-card>
            </template>
          </v-hover>
          <!-- </v-list-item> -->
          <!-- 
          <v-card-actions>
            <v-btn outlined rounded text>
              reset filter
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-menu>
    </div>

    <div class="d-flex justify-content-start align-items-center flex-wrap">
      <PreviewCard
        v-for="contest in testArray"
        :key="contest._id || Math.random()"
        :src="
          contest.image ||
            require('../../../themes/assets/images/holding-hands.jpg')
        "
        :price="contest.price"
        :type="contest.type"
      />
    </div>
  </div>
</template>

<script>
import { PreviewCard } from "../../../components/cards";
export default {
  data: () => ({
    testArray: [
      {
        _id: Math.random(),
        price: 20,
        image: require("../../../themes/assets/images/contest-1.png"),
        type: "product merchant",
      },
      {
        id: Math.random(),
        price: 10,
        image: require("../../../themes/assets/images/contest-2.png"),
        type: "product merchant",
      },
      {
        id: Math.random(),
        price: 15,
        image: require("../../../themes/assets/images/contest-3.png"),
        type: "product merchant",
      },
      {
        _id: Math.random(),
        price: 20,
        image: require("../../../themes/assets/images/contest-1.png"),
        type: "service merchant",
      },
      {
        id: Math.random(),
        price: 10,
        image: require("../../../themes/assets/images/contest-2.png"),
        type: "service merchant",
      },
      {
        id: Math.random(),
        price: 15,
        image: require("../../../themes/assets/images/contest-3.png"),
        type: "service merchant",
      },
    ],
  }),

  components: {
    PreviewCard,
  },
};
</script>

<style lang="sass" scoped></style>
