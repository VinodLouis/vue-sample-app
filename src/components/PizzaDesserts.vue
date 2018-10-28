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
            <v-flex xs12 v-for="item in allPizzaDesserts" :key="item.id">
               <v-card v-bind:class="{'white--text green darken-1':(selectedDesserts&& selectedDesserts.indexOf(item.id) != -1), 'white--text blue darken-1':(!selectedDesserts || (selectedDesserts && selectedDesserts.indexOf(item.id) == -1))}">
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
                              <div>{{item.price}}</div>
                           </div>
                        </v-card-title>
                     </v-flex>
                     <v-flex xs2 class="text-xs-center">
                        <v-btn v-if="(!selectedDesserts || (selectedDesserts && selectedDesserts.indexOf(item.id) == -1))" flat dark @click="ShowErrorMsg=false;addPizzaDesserts(item)">ADD</v-btn>
                        <v-btn v-if="selectedDesserts && selectedDesserts.indexOf(item.id) != -1" flat dark @click="ShowErrorMsg=false;removePizzaDesserts(item)">REMOVE</v-btn>
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
     name: 'PizzaDesserts',
     computed: {
        ...mapState({
           allPizzaDesserts: state => state.pizza.pizzaItemsAvialable.pizzaDesserts,
           selectedDesserts: state => state.pizza.selectedItems.pizzaDesserts.map((el)=>el.id)
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
         if(this.selectedDesserts && this.selectedDesserts.length > 0)
           return true;
         return false;  
       },
       goToNext(){
         
         if(this.isFormValid()){
           this.loading = true;
           setTimeout(()=>{
           this.loading = false;
           this.$router.push({ path: '/extra'})
         },500)
         }else{
           this.ShowErrorMsg = true;
         }
         
       },
       ...mapActions('pizza', [
       'getAllPizzaDesserts',
       'addPizzaDesserts',
       'removePizzaDesserts'
     ])
     },
     created () {
       this.getAllPizzaDesserts();
     }
   }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>