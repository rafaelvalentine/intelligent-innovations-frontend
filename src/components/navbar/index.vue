<template>
  <div id="_navbar" class="px-5">
    <v-app-bar color="light" flat>
      <v-toolbar-title
        class="title danger--text cursor-pointer"
        @click="() => this.$router.push('/')"
      >
        <img
          id="navbar_logo"
          class="navbar_logo"
          :src="require('../../themes/assets/images/logo-9mobile-light.png')"
        />
        <!-- <p class="text-h5 mb-0 font-weight-bold">Votlog</p> -->
      </v-toolbar-title>

      <div
        id="search-box"
        class="search-box subBgColor d-flex justify-content-between align-items-center ml-4 pr-2"
        :class="{ active: isActive }"
      >
        <!-- <label for="search-box_input-field"> -->
        <input
          id="search-box_input-field"
          placeholder="Search Merchant"
          type="text"
          class="pl-4"
          :autofocus="isActive"
          @focus="setIsActive(true)"
          @blur="setIsActive"
          v-model="searchText"
        />
        <!-- </label> -->
        <img
          :src="require('../../themes/assets/images/navbar-search.svg')"
          @click="setIsActive(true)"
        />
        <div
          id="filter-wrapper"
          class="filter-wrapper d-flex justify-content-between align-items-center cursor-pointer ml-3"
        >
          <v-icon
            :style="{ width: '30px' }"
            class="font-weight-light text-subtitle-1"
          >
            mdi-filter-menu-outline
          </v-icon>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <button
                class="font-weight-light text-button outline-none px-3"
                :style="{ outline: 'none' }"
                v-bind="attrs"
                v-on="on"
              >
                filter
              </button>
            </template>
            <v-card class="mx-auto" max-width="344" outlined>
              <v-list-item three-line>
                <v-select
                  :items="items"
                  label="Filter Merchants"
                  dense
                ></v-select>
              </v-list-item>

              <v-card-actions>
                <v-btn outlined rounded text>
                  reset filter
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </div>
      </div>
      <div id="routes" class="routes ml-auto">
        <router-link class="py-1 px-2 rounded-pill" to="/register">
          CREATE ACCOUNT
        </router-link>
        <router-link class="ml-6 py-1 px-3 rounded-pill" to="/login">
          SIGN IN
        </router-link>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data: () => ({
    isActive: false,
    searchText: "",
    items: ["service merchants", "product merchants"],
  }),
  methods: {
    setIsActive(value) {
      this.isActive = typeof value === "boolean" ? value : !this.isActive;
    },
  },
};
</script>
// main sass file is housed in '../../themes/sass/components/navbar.sass'
<style lang="sass" scoped></style>
