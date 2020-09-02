import axios from 'axios';

const state = {
  products: [],
  loading: false,
};

const getters = {
  allProducts: (state) => state.products
};

const actions = {
  async loadProducts({ commit }) {
    const response = await axios.get('http://localhost:8888/products');

    commit('loadProductsSuccess', response.data);
  }
};

const mutations = {
  loadProductsSuccess: (state, products) => (state.products = products)
};

export default {
  state,
  getters,
  actions,
  mutations
};
