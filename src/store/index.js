import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth';
import cart from './modules/cart';
import productList from './modules/productList';
import purchase from './modules/purchase';

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    auth,
    cart,
    productList,
    purchase,
  }
})
