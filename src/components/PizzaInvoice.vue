<template>
   <v-card class="white--text teal darken-2" height="100%">
      <v-container
         fluid
         grid-list-lg
         >
         <div class="selection-wrapper" v-if="selectedPizza.pizzaBase.id">
            <div class="selection-header">Base</div>
            <v-layout>
               <v-flex xs8 class="r-t-b-p">
                  {{selectedPizza.pizzaBase.name}}
               </v-flex>
               <v-flex xs4 class="text-xs-right r-t-b-p">
                  {{selectedPizza.pizzaBase.price | currency}}
               </v-flex>
            </v-layout>
         </div>
         <div class="selection-wrapper" v-if="selectedPizza.pizzaToppings.length > 0 && selectedPizza.pizzaToppings.length < 4">
            <div class="selection-header">Topping(s)</div>
            <v-layout v-for="item in selectedPizza.pizzaToppings" :key="item.id">
               <v-flex xs8 class="r-t-b-p">
                  {{item.name}}
               </v-flex>
               <v-flex xs4 class="text-xs-right r-t-b-p">
                  {{item.price | currency}}
               </v-flex>
            </v-layout>
         </div>
         <div class="selection-wrapper" v-if="selectedPizza.pizzaVegges.length > 0 && selectedPizza.pizzaVegges.length < 6">
            <div class="selection-header">Vegge(s)</div>
            <v-layout v-for="item in selectedPizza.pizzaVegges" :key="item.id">
               <v-flex xs8 class="r-t-b-p">
                  {{item.name}}
               </v-flex>
               <v-flex xs4 class="text-xs-right r-t-b-p">
                  {{item.price | currency}}
               </v-flex>
            </v-layout>
         </div>
         <div class="selection-wrapper" v-if="selectedPizza.pizzaCheese.id">
            <div class="selection-header">Cheese</div>
            <v-layout>
               <v-flex xs8 class="r-t-b-p">
                  {{selectedPizza.pizzaCheese.name}}
               </v-flex>
               <v-flex xs4 class="text-xs-right r-t-b-p">
                  {{selectedPizza.pizzaCheese.price | currency}}
               </v-flex>
            </v-layout>
         </div>
         <div class="selection-wrapper" v-if="selectedPizza.pizzaSauses.length > 0">
            <div class="selection-header">Sause(s)</div>
            <v-layout v-for="item in selectedPizza.pizzaSauses" :key="item.id">
               <v-flex xs8 class="r-t-b-p">
                  {{item.name}}
               </v-flex>
               <v-flex xs4 class="text-xs-right r-t-b-p">
                  {{item.price | currency}}
               </v-flex>
            </v-layout>
         </div>
         <div class="selection-wrapper" v-if="selectedPizza.pizzaDesserts.length > 0">
            <div class="selection-header">Dessert(s)</div>
            <v-layout v-for="item in selectedPizza.pizzaDesserts" :key="item.id">
               <v-flex xs8 class="r-t-b-p">
                  {{item.name}}
               </v-flex>
               <v-flex xs4 class="text-xs-right r-t-b-p">
                  {{item.price | currency}}
               </v-flex>
            </v-layout>
         </div>
         <div class="selection-wrapper" v-if="selectedPizza.pizzaExtra.length > 0">
            <div class="selection-header">Extra(s)</div>
            <v-layout v-for="item in selectedPizza.pizzaExtra" :key="item.id">
               <v-flex xs8 class="r-t-b-p">
                  {{item.name}}
               </v-flex>
               <v-flex xs4 class="text-xs-right r-t-b-p">
                  {{item.price | currency}}
               </v-flex>
            </v-layout>
         </div>
         <div class="total-amt" v-if="selectedPizza.pizzaBase.id || (selectedPizza.pizzaToppings.length > 0 && selectedPizza.pizzaToppings.length < 4) || (selectedPizza.pizzaVegges.length > 0 && selectedPizza.pizzaVegges.length < 6) || selectedPizza.pizzaCheese.id || selectedPizza.pizzaSauses.length > 0 || selectedPizza.pizzaDesserts.length > 0 || selectedPizza.pizzaExtra.length > 0">
            <v-layout>
               <v-flex xs8 class="r-t-b-p">
                  Total Amount
               </v-flex>
               <v-flex xs4 class="text-xs-right r-t-b-p">
                  {{totalAmount | currency}}
               </v-flex>
            </v-layout>
         </div>
         <v-card class="white--text indigo darken-1 m-t-20" v-if="isReadyForPayment">
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
         selectedPizza: state => state.pizza.selectedItems,
         discountCoupon: state => state.pizza.couponApplied
       }),
       totalAmount() {
         let amount = 0;
         if (this.selectedPizza.pizzaBase.id) {
           amount += parseFloat(this.selectedPizza.pizzaBase.price);
         }
         if (this.selectedPizza.pizzaToppings.length > 0) {
           this.selectedPizza.pizzaToppings.forEach(el => {
             amount += parseFloat(el.price);
           });
         }
         if (this.selectedPizza.pizzaVegges.length > 0) {
           this.selectedPizza.pizzaVegges.forEach(el => {
             amount += parseFloat(el.price);
           });
         }
         if (this.selectedPizza.pizzaCheese.id) {
           amount += parseFloat(this.selectedPizza.pizzaCheese.price);
         }
         if (this.selectedPizza.pizzaSauses.length > 0) {
           this.selectedPizza.pizzaSauses.forEach(el => {
             amount += parseFloat(el.price);
           });
         }
         if (this.selectedPizza.pizzaDesserts.length > 0) {
           this.selectedPizza.pizzaDesserts.forEach(el => {
             amount += parseFloat(el.price);
           });
         }
         if (this.selectedPizza.pizzaExtra.length > 0) {
           this.selectedPizza.pizzaExtra.forEach(el => {
             amount += parseFloat(el.price);
           });
         }
         return amount;
       },
       isReadyForPayment() {
         return (
           this.selectedPizza.pizzaBase.id &&
           this.selectedPizza.pizzaToppings.length > 0 &&
           this.selectedPizza.pizzaToppings.length < 4 &&
           this.selectedPizza.pizzaVegges.length > 0 &&
           this.selectedPizza.pizzaVegges.length < 6 &&
           this.selectedPizza.pizzaCheese.id &&
           this.selectedPizza.pizzaSauses.length > 0 &&
           this.selectedPizza.pizzaDesserts.length > 0 &&
           this.selectedPizza.pizzaExtra.length > 0
         );
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