<script>
// inline component with template string :+1:
import Vue from "vue";
import { contestShareButton as Share } from "../button";
export const PreviewCard = Vue.component("contest-preview-card", {
  props: ["src", "title", "subtitle", "date", "price", "_id", "type"],
  methods: {},
  components: {
    Share,
  },
  data: () => ({
    image: null,
    id: null,
  }),
  mounted() {
    this.image = this.src;
    this.id = this._id || Math.random().toString();
  },
  template: `
  <v-card
    class="contest-preview-card d-flex flex-column justify-content-start align-items-center mx-1 my-2"
    width='310.48px'
    height='307.82px'
  >
    <v-img
      class="white--text"
      height="221px"
      max-height='221px'
      width="310px"
      :src="image"
      
    >
     <div class="d-flex justify-content-between align-items-center py-4 px-6">
        <div class='price-wrapper light rounded-sm px-2 py-1'>
          <p class='price title-text--text pa-0 ma-0' :style="{fontWeight:'600'}">
            {{ type || 0 }}
          </p>
        </div>
        <Share color='light'/>
     </div>
    </v-img>

    <v-card-actions class='m-auto w-100 d-flex justify-content-between align-items-center px-5'>
        <div>
          <v-card-title class='_title title-text--text font-weight-bold pa-0 ma-0 mb-1'>
            {{ title || 'Vice Nigeria Ltd'}}
          </v-card-title>
          <v-card-subtitle class='_subtitle subtitle-text--text font-weight-normal text-lowercase pa-0 ma-0'>
            {{subtitle || 'Signed Up'}}
            <bdi class='success--text text-uppercase'>{{date || '23 july'}}</bdi>
          </v-card-subtitle>
        </div>
        <v-btn
        color="white"
        class='success elevation-2'
        width='100px'
        height='40px'
        text
        link
        :to="'/merchant/' + id"
      >
        VIEW
      </v-btn>
    </v-card-actions>
  </v-card>
  `,
});
export default {};
</script>
