import axios from 'axios';

const state = {
  products: [],
  loading: false,
};

const getters = {
  allProducts: (state) => state.products
};

const actions = {
  async loadProducts({ commit, state }) {
    state.loading = true;

    const response = await axios.get('http://localhost:8888/products');

    state.loading = false;
    commit('loadProductsSuccess', response.data);
  }
};

const mutations = {
  loadProductsSuccess: (state, products) => (state.products = products
    .map(product => ({
      ...product,
      price: product.price.toLocaleString('pt-BR',
        { style: 'currency', currency: 'BRL' }
      )
    }))
  )
};

export default {
  state,
  getters,
  actions,
  mutations
};
