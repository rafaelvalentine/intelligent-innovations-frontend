import Vue from "vue";
import Vuetify from "vuetify";
import main from "../themes/main.js";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
Vue.use(Vuetify);

export default new Vuetify(main);