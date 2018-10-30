import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const getters = {
    allIngredients: jest.fn().mockReturnValue([
        {
          id: "b1",
          name: "Normal",
          price: "300",
          desc: "Normal Regular Base"
        }
      ])
};

export const mutations = {
    
};
  
export const actions = {
    getAllIngredients: jest.fn()
};

export const state = {
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
  };

  export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {} }) { 
    const mockGetters = Object.assign({}, getters, custom.getters);
    const mockMutations = Object.assign({}, mutations, custom.mutations);
    const mockActions = Object.assign({}, actions, custom.actions);
    const mockState = Object.assign({}, state, custom.state);
    return {
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState,
      store: new Vuex.Store({
        getters: mockGetters,
        mutations: mockMutations,
        actions: mockActions,
        state: mockState,
      })
    };
  }

  export const createMocks = __createMocks();

  //console.log(__createMocks());
  
  export const store = __createMocks().store;