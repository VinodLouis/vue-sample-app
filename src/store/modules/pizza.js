import pizza from '../../api/pizza';

//initial state
const state = {
	pizzaItemsAvialable: {
		pizzaBase: [],
		pizzaToppings: [],
		pizzaVegges: [],
		pizzaCheese: [],
		pizzaSauses: [],
		pizzaDesserts: [],
		pizzaExtra: []
	},
	selectedItems: {
		pizzaBase: {},
		pizzaToppings: [],
		pizzaVegges: [],
		pizzaCheese: {},
		pizzaSauses: [],
		pizzaDesserts: [],
		pizzaExtra: []
	},
	couponApplied: {
		coupon: "",
		discountInPercentage: 0
	}
}


// getters
const getters = {

}

//actions
const actions = {
	getAllPizzaBase({
		commit
	}) {
		pizza.getAllPizzaBase(pizzaBases => {
			commit('setPizzaBase', pizzaBases)
		})
	},
	addPizzaBase({
		state,
		commit
	}, baseItem) {
		commit('addSelectedPizzaBase', baseItem)
	},
	getAllPizzaToppings({
		commit
	}) {
		pizza.getAllPizzaToppings(pizzaToppings => {
			commit('setPizzaToppings', pizzaToppings)
		})
	},
	addPizzaToppings({
		state,
		commit
	}, topping) {
		commit('addSelectedPizzaToppings', topping)
	},
	removePizzaToppings({
		state,
		commit
	}, topping) {
		commit('removeSelectedPizzaToppings', topping)
	},
	getAllPizzaVegges({
		commit
	}) {
		pizza.getAllPizzaVegges(pizzaVegges => {
			commit('setPizzaVegges', pizzaVegges)
		})
	},
	addPizzaVegges({
		state,
		commit
	}, vegges) {
		commit('addSelectedPizzaVegges', vegges)
	},
	removePizzaVegges({
		state,
		commit
	}, vegges) {
		commit('removeSelectedPizzaVegges', vegges)
	},
	getAllPizzaCheese({
		commit
	}) {
		pizza.getAllPizzaCheese(pizzaCheese => {
			commit('setPizzaCheese', pizzaCheese)
		})
	},
	addPizzaCheese({
		state,
		commit
	}, baseItem) {
		commit('addSelectedPizzaCheese', baseItem)
	},
	getAllPizzaSauses({
		commit
	}) {
		pizza.getAllPizzaSauses(pizzaSauses => {
			commit('setPizzaSauses', pizzaSauses)
		})
	},
	addPizzaSauses({
		state,
		commit
	}, sauses) {
		commit('addSelectedPizzaSauses', sauses)
	},
	removePizzaSauses({
		state,
		commit
	}, sauses) {
		commit('removeSelectedPizzaSauses', sauses)
	},
	getAllPizzaDesserts({
		commit
	}) {
		pizza.getAllPizzaDesserts(pizzaDesserts => {
			commit('setPizzaDesserts', pizzaDesserts)
		})
	},
	addPizzaDesserts({
		state,
		commit
	}, desserts) {
		commit('addSelectedPizzaDesserts', desserts)
	},
	removePizzaDesserts({
		state,
		commit
	}, desserts) {
		commit('removeSelectedPizzaDesserts', desserts)
	},
	getAllPizzaExtra({
		commit
	}) {
		pizza.getAllPizzaExtra(pizzaExtra => {
			commit('setPizzaExtra', pizzaExtra)
		})
	},
	addPizzaExtra({
		state,
		commit
	}, extra) {
		commit('addSelectedPizzaExtra', extra)
	},
	removePizzaExtra({
		state,
		commit
	}, extra) {
		commit('removeSelectedPizzaExtra', extra)
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
	setPizzaBase(state, pizzaBases) {
		state.pizzaItemsAvialable.pizzaBase = pizzaBases
	},
	addSelectedPizzaBase(state, pizzaBase) {
		state.selectedItems.pizzaBase = pizzaBase;
	},
	setPizzaToppings(state, pizzaToppings) {
		state.pizzaItemsAvialable.pizzaToppings = pizzaToppings
	},
	addSelectedPizzaToppings(state, pizzaToppings) {
		state.selectedItems.pizzaToppings.push(pizzaToppings)
	},
	removeSelectedPizzaToppings(state, pizzaToppings) {
		state.selectedItems.pizzaToppings.splice(state.selectedItems.pizzaToppings.indexOf(pizzaToppings), 1);
	},
	setPizzaVegges(state, pizzaVegges) {
		state.pizzaItemsAvialable.pizzaVegges = pizzaVegges
	},
	addSelectedPizzaVegges(state, pizzaVegges) {
		state.selectedItems.pizzaVegges.push(pizzaVegges)
	},
	removeSelectedPizzaVegges(state, pizzaVegges) {
		state.selectedItems.pizzaVegges.splice(state.selectedItems.pizzaVegges.indexOf(pizzaVegges), 1);
	},
	setPizzaCheese(state, pizzaCheese) {
		state.pizzaItemsAvialable.pizzaCheese = pizzaCheese
	},
	addSelectedPizzaCheese(state, pizzaCheese) {
		state.selectedItems.pizzaCheese = pizzaCheese;
	},
	setPizzaSauses(state, pizzaSauses) {
		state.pizzaItemsAvialable.pizzaSauses = pizzaSauses
	},
	addSelectedPizzaSauses(state, pizzaSauses) {
		state.selectedItems.pizzaSauses.push(pizzaSauses)
	},
	removeSelectedPizzaSauses(state, pizzaSauses) {
		state.selectedItems.pizzaSauses.splice(state.selectedItems.pizzaSauses.indexOf(pizzaSauses), 1);
	},
	setPizzaDesserts(state, pizzaDesserts) {
		state.pizzaItemsAvialable.pizzaDesserts = pizzaDesserts
	},
	addSelectedPizzaDesserts(state, pizzaDesserts) {
		state.selectedItems.pizzaDesserts.push(pizzaDesserts)
	},
	removeSelectedPizzaDesserts(state, pizzaDesserts) {
		state.selectedItems.pizzaDesserts.splice(state.selectedItems.pizzaDesserts.indexOf(pizzaDesserts), 1);
	},
	setPizzaExtra(state, pizzaExtra) {
		state.pizzaItemsAvialable.pizzaExtra = pizzaExtra
	},
	addSelectedPizzaExtra(state, pizzaExtra) {
		state.selectedItems.pizzaExtra.push(pizzaExtra)
	},
	removeSelectedPizzaExtra(state, pizzaExtra) {
		state.selectedItems.pizzaExtra.splice(state.selectedItems.pizzaExtra.indexOf(pizzaExtra), 1);
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