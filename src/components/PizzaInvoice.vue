<template>
   <v-card class="white--text teal darken-2" height="100%">
      <v-container
         fluid
         grid-list-lg
         >

         <div class="selection-wrapper" v-if="showIngredients(propertyName) && value.length > 0" :key="propertyName" v-for="(value, propertyName) in selectedPizza">
            <div class="selection-header">{{propertyName}}</div>
            <v-layout v-for="(item,itemObjKey) in value" :key="itemObjKey">
               <v-flex xs8 class="r-t-b-p">
                  {{itemObjKey+1}}. {{item.name}}
               </v-flex>
               <v-flex xs4 class="text-xs-right r-t-b-p">
                  {{item.price | currency}}
               </v-flex>
            </v-layout>
         </div>
         
         <div class="total-amt">
            <v-layout>
               <v-flex xs8 class="r-t-b-p">
                  Total Amount
               </v-flex>
               <v-flex xs4 class="text-xs-right r-t-b-p">
                  {{totalAmount | currency}}
               </v-flex>
            </v-layout>
         </div>
         <v-card class="white--text indigo darken-1 m-t-20" v-if="isReadyForPayment()">
            <v-container  fluid
               grid-list-lg>
               <h2>Payment</h2>
               <v-layout>
                  <v-flex xs8>
                     <v-text-field
                        color="#ffffff"
                        class="w-t"
                        label="Coupon Code"
                        v-model="couponCode"
                        ></v-text-field>
                  </v-flex>
                  <v-flex xs4 class="text-xs-right">
                     <v-btn
                        :disabled="!couponCode"
                        class="green white--text darken-4 r-m-l-r"
                        @click="checkCouponCode(couponCode)"
                        >
                        APPLY
                        <span slot="loader" class="custom-loader">
                           <v-icon light>cached</v-icon>
                        </span>
                     </v-btn>
                  </v-flex>
               </v-layout>
               <v-layout>
                  <v-flex xs8 class="r-t-b-p">
                     Total Amount
                  </v-flex>
                  <v-flex xs4 class="text-xs-right r-t-b-p">
                     {{totalAmount | currency}}
                  </v-flex>
               </v-layout>
               <v-layout>
                  <v-flex xs8 class="r-t-b-p">
                     Discount({{discountCoupon.coupon}} - {{discountCoupon.discountInPercentage}}%)
                  </v-flex>
                  <v-flex xs4 class="text-xs-right r-t-b-p">
                     -{{discountedMoney | currency}}
                  </v-flex>
               </v-layout>
               <v-layout>
                  <v-flex xs8 class="r-t-b-p">
                     Final Payable Amount
                  </v-flex>
                  <v-flex xs4 class="text-xs-right r-t-b-p">
                     {{finalAmount | currency}}
                  </v-flex>
               </v-layout>
               <v-layout row justify-end>
                  <v-btn
                     @click="finalCheckout"
                     class="green white--text darken-4"
                     >
                     Click To Pay
                  </v-btn>
               </v-layout>
            </v-container>
         </v-card>
      </v-container>
   </v-card>
</template>
<script>
   import { mapState, mapActions } from "vuex";
   export default {
     name: "PizzaInvoice",
     computed: {
       ...mapState({
         allAvilablePizza: state => state.pizza.pizzaItemsAvialable,
         selectedPizza: state => state.pizza.selectedItems,
         discountCoupon: state => state.pizza.couponApplied
       }),
       totalAmount() {
         let amount = 0;
         for(let ingredients in this.selectedPizza){
           this.selectedPizza[ingredients].forEach((item)=>{
             amount += parseFloat(item.price);
           })
         }
        
         return amount;
       },
       discountedMoney() {
         if (this.discountCoupon.discountInPercentage == 0) return 0;
         return (
           (parseFloat(this.discountCoupon.discountInPercentage) / 100) *
           this.totalAmount
         );
       },
       finalAmount() {
         return this.totalAmount - this.discountedMoney;
       }
     },
     data() {
       return {
         couponCode: ""
       };
     },
     methods: {
       ...mapActions("pizza", ["checkCouponCode"]),
       finalCheckout() {
         alert("PROCEED TO PAYMENT");
       },
       showIngredients(ing){
           if (this.allAvilablePizza[ing].min == -1) 
            return true;
          if (this.allAvilablePizza[ing].min !== -1 && this.allAvilablePizza[ing].max == -1)
            return (this.selectedPizza[ing].length >= this.allAvilablePizza[ing].min)
        if (this.allAvilablePizza[ing].min !== -1 && this.allAvilablePizza[ing].max !== -1)
            return (this.selectedPizza[ing].length >= this.allAvilablePizza[ing].min && this.selectedPizza[ing].length <= this.allAvilablePizza[ing].max)
         return true;
       },
       isReadyForPayment() {
         let paymentReady = true;
         for(let ingredients in this.selectedPizza){
           paymentReady = (paymentReady && this.showIngredients(ingredients))
         }
         return paymentReady;
       }
     }
   };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .selection-header {
   font-style: italic;
   border-bottom: thin solid #fafafa;
   color: #fafafa;
   font-weight: 700;
   text-transform: capitalize;
   }
   .r-t-b-p {
   padding-top: 0px !important;
   padding-bottom: 0px !important;
   }
   .selection-wrapper {
   margin-bottom: 15px;
   }
   .total-amt {
   font-style: italic;
   border-top: thin solid #fafafa;
   border-bottom: thin solid #fafafa;
   color: #fafafa;
   margin-top: 25px;
   font-weight: bold;
   }
   .total-amt > .layout {
   margin-top: 0px !important;
   margin-bottom: 0px !important;
   }
   .m-t-20 {
   margin-top: 20px;
   }
   .w-t input {
   color: #ffffff !important;
   }
</style>