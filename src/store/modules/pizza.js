import pizza from '../../api/pizza';

//initial state
const state = {
	currIngredient:"",
	pizzaItemsAvialable: {
		base: {},
		toppings: {},
		vegges: {},
		cheese: {},
		sauces: {},
		desserts: {},
		extra: {}
	},
	selectedItems: {
		base: [],
		toppings: [],
		vegges: [],
		cheese: [],
		sauces: [],
		desserts: [],
		extra: []
	},
	couponApplied: {
		coupon: "",
		discountInPercentage: 0
	}
}


// getters
const getters = {
	allIngredients: state => state.pizzaItemsAvialable[state.currIngredient].items,
	selectedIngredients: state => state.selectedItems[state.currIngredient].map((el)=>el.id),
	otherConditions: state => Object.assign({},state.pizzaItemsAvialable[state.currIngredient],{items:undefined})
}

//actions
const actions = {
	getAllIngredients({
		commit
	},ingredient) {
		pizza.getPizzaIngredient(ingredient,pizzaIngredient => {
			commit('setPizzaIngredient', {ingredient, pizzaIngredient})
		})
	},
	addIngredient({
		commit
	},item){
		commit('addToCurrentIngredient',item)
	},
	replaceIngredient({
		commit
	},item){
		commit('removeAllSelectedIngredient')
		commit('addToCurrentIngredient',item)
	},
	removeIngredient({
		commit
	},item){
		commit("removeFromCurrIngredient",item);
	},
	checkCouponCode({
		commit
	}, code) {
		pizza.getCouponCode(code, (codeDetails) => {
			commit('setCouponDiscount', codeDetails)
		})
	}

}


// mutations 
const mutations = {
	setCurrentIngredient(state,ingredient){
		state.currIngredient = ingredient
	},
	setPizzaIngredient(state,ing){
		state.pizzaItemsAvialable[ing.ingredient] = ing.pizzaIngredient
	},
	addToCurrentIngredient(state,ing){
		state.selectedItems[state.currIngredient].push(ing);
	},
	removeAllSelectedIngredient(state){
		state.selectedItems[state.currIngredient] = [];
	},
	removeFromCurrIngredient(state, ing) {
		state.selectedItems[state.currIngredient].splice(state.selectedItems[state.currIngredient].indexOf(ing), 1);
	},
	setCouponDiscount(state, discount) {
		state.couponApplied = discount;
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}