import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import { createMocks } from '../../src/store/modules/__mocks__/pizza'

import PizzaIngredients from '../../src/components/PizzaIngredients';
import Vuetify from 'vuetify'
// Tell Jest to use the mock
// implementation of the store.
jest.mock('../../src/store/modules/__mocks__/pizza');

const localVue = createLocalVue();
localVue.use(Vuetify)
localVue.use(Vuex);

//console.log(createStoreMocks());

describe('PizzaIngredients', () => {
  let storeMocks;
  let wrapper;

  beforeEach(() => {
    // Create a fresh store and wrapper
    // instance for every test case.
   
    storeMocks = createMocks
    wrapper = shallowMount(PizzaIngredients, {
      store: storeMocks.store,
      localVue,
    });
  });

  test('It should fetch items.', () => {
    expect(storeMocks.actions.getAllIngredients).toBeCalled();
  });

  
});