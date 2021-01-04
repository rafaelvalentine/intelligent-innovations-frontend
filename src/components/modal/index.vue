<template>
  <div>

  </div>
</template>

<script>

import Vue from 'vue'
import {closeContestantModalButton as CloseModalButton} from '../button'
export const voteContestantModal = Vue.component('vote-contestant-modal', {
data: ()=> ({
    // show: false
}),
components:{
  CloseModalButton
},
props:["show", "onHide", "name"],
  template:`
  <div class="text-center">
    <v-dialog
      v-model="show"
      width="600"
    >
      <v-card>

        <div class="w-100 d-flex justify-content-between align-items-center pa-3">
          <v-card-title class="ma-0 pa-0 danger--text">
            Vote for {{name}}
          </v-card-title>
          <close-contestant-modal-button :onHide="onHide"/>
        </div>
        
        <v-divider class="ma-0 pa-0"></v-divider>

        <div class="card-boby">
          
        </div>


        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="w-100 danger"
            color="white"
            text
            @click="onHide"
          >
            Vote
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  `
})
export default {

}
</script>

<style>

</style>