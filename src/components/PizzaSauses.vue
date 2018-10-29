<template>
   <v-card class="cyan lighten-3 m-h"  height="100%">
      <v-container
         fluid
         grid-list-lg
         >
         <v-layout>
            <v-flex sm10 justify-center>
               <v-alert
                  :value="ShowErrorMsg"
                  type="error"
                  >
                  Please Select atleast 1 Sauce(s).
               </v-alert>
            </v-flex>
            <v-flex sm2 class="text-xs-right">
               <v-btn
                  :loading="loading"
                  :disabled="loading"
                  class="green white--text darken-3 r-m-l-r"
                  @click="goToNext"
                  >
                  CONTINUE
                  <span slot="loader" class="custom-loader">
                     <v-icon light>cached</v-icon>
                  </span>
               </v-btn>
            </v-flex>
         </v-layout>
         <v-layout row wrap>
            <v-flex xs12 v-for="item in allPizzaSauses" :key="item.id">
               <v-card v-bind:class="{'white--text green darken-1':(selectedSauses&& selectedSauses.indexOf(item.id) != -1), 'white--text blue darken-1':(!selectedSauses || (selectedSauses && selectedSauses.indexOf(item.id) == -1))}">
                  <v-layout>
                     <v-flex xs3>
                        <v-img
                           v-bind:src="imagePath"
                           height="125px"
                           contain
                           ></v-img>
                     </v-flex>
                     <v-flex xs5>
                        <v-card-title primary-title>
                           <div>
                              <div class="headline">{{item.name}}</div>
                              <div>Description</div>
                              <div>{{item.price | currency}}</div>
                           </div>
                        </v-card-title>
                     </v-flex>
                     <v-flex xs2 class="text-xs-center">
                        <v-btn v-if="(!selectedSauses || (selectedSauses && selectedSauses.indexOf(item.id) == -1))" flat dark @click="ShowErrorMsg=false;addPizzaSauses(item)">ADD</v-btn>
                        <v-btn v-if="selectedSauses && selectedSauses.indexOf(item.id) != -1" flat dark @click="ShowErrorMsg=false;removePizzaSauses(item)">REMOVE</v-btn>
                     </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
               </v-card>
            </v-flex>
         </v-layout>
      </v-container>
   </v-card>
</template>
<script>
   import { mapState, mapActions } from 'vuex'
   export default {
     name: 'PizzaSauses',
     computed: {
        ...mapState({
           allPizzaSauses: state => state.pizza.pizzaItemsAvialable.pizzaSauses,
           selectedSauses: state => state.pizza.selectedItems.pizzaSauses.map((el)=>el.id)
        }),
        imagePath(){
         return require('../assets/no-image.png')
       }
     },
     data(){
       return{
         loading:false,
         ShowErrorMsg:false
       }
     },
     methods: {
       isFormValid(){
         if(this.selectedSauses && this.selectedSauses.length > 0)
           return true;
         return false;  
       },
       goToNext(){
         
         if(this.isFormValid()){
           this.loading = true;
           setTimeout(()=>{
           this.loading = false;
           this.$router.push({ path: '/desserts'})
         },500)
         }else{
           this.ShowErrorMsg = true;
         }
         
       },
       ...mapActions('pizza', [
       'getAllPizzaSauses',
       'addPizzaSauses',
       'removePizzaSauses'
     ])
     },
     created () {
       this.getAllPizzaSauses();
     }
   }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>