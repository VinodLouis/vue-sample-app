import Vue from 'vue'
import Vuex from 'vuex'
import pizza from './modules/pizza'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    pizza
  },
  strict: debug
})
