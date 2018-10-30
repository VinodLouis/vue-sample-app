<template>
<v-card class="cyan lighten-3 m-h"  height="100%">
      <v-container
         fluid
         grid-list-lg
         >
         <v-layout>
            <v-flex sm10 justify-center>
               <v-alert
                  :value="ShowErrorMsg.length > 0"
                  type="error"
                  >
                  {{ShowErrorMsg}}
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
            <v-flex xs12 v-for="item in allIngredients" :key="item.id">
               <v-card v-bind:class="{'white--text green darken-1':(selectedIngredients&& selectedIngredients.indexOf(item.id) != -1), 'white--text blue darken-1':(!selectedIngredients || (selectedIngredients && selectedIngredients.indexOf(item.id) == -1))}">
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
                        <v-btn v-if="(!selectedIngredients || (selectedIngredients && selectedIngredients.indexOf(item.id) == -1))" flat dark @click="ShowErrorMsg=false;addIngredientCheck(item)">ADD</v-btn>
                        <v-btn v-if="selectedIngredients && selectedIngredients.indexOf(item.id) != -1" flat dark @click="ShowErrorMsg='';removeIngredient(item)">REMOVE</v-btn>
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
 import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
     name: "PizzaIngredients",
     props:["ingredient"],
     computed: {
        ...mapGetters("pizza",[
        'allIngredients',
        'selectedIngredients',
        'otherConditions'
        ]),
       imagePath(){
         return require('../assets/no-image.png')
       }
     },
     created() {
       this.setCurrentIngredient(this.ingredient); 
       this.getAllIngredients(this.ingredient);
     },
      data() {
       return {
         loading: false,
         ShowErrorMsg: ''
       };
     },
     methods:{
         ...mapMutations('pizza',['setCurrentIngredient']),
         ...mapActions('pizza', ['getAllIngredients','addIngredient','replaceIngredient','removeIngredient']),
         addIngredientCheck(ing){
             if(this.otherConditions.max == 1){
                this.replaceIngredient(ing)
             }else{
                 this.addIngredient(ing)
             }
         },
         isFormValid() {
         if (this.otherConditions.min == -1) 
            return true;
          if (this.otherConditions.min !== -1 && this.otherConditions.max == -1)
            return (this.selectedIngredients.length >= this.otherConditions.min)
        if (this.otherConditions.min !== -1 && this.otherConditions.max !== -1)
            return (this.selectedIngredients.length >= this.otherConditions.min && this.selectedIngredients.length <= this.otherConditions.max)
         return false;
       },
       goToNext() {
         if (this.isFormValid()) {
           this.loading = true;
           setTimeout(() => {
             this.loading = false;
             if(this.otherConditions.nextIngredient != "done")
                this.$router.push({ path: "/" + this.otherConditions.nextIngredient });
             else
                alert("Proceed for Payment")   
           }, 500);
         } else {
           this.ShowErrorMsg = "Minimum Selection : " + this.otherConditions.min 
           this.ShowErrorMsg += (this.otherConditions.max !== -1 && this.otherConditions.min != this.otherConditions.max) ? " and Maximum Selection " + this.otherConditions.max + "." : "."
         }
       },
     }
}
</script>