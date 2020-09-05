import axios from 'axios';

const state = {
  products: [],
  loading: false
};

const getters = {
  productsOnCart: (state) => state.products
};

const actions = {
  async addToCart({ state, commit }, productId) {
    state.loading = true;

    const productExists = state.products.find(product => product._id === productId);
  
    // Get current product stock
    const stock = await axios.get(`http://localhost:8888/stocks/${productId}`);
    const stockAmount = stock.data.amount;

    // Get current product amount
    const currentAmount = productExists ? productExists.amount : 0;
    const amount = currentAmount + 1;
    
    // Verify if stock is enough
    if (amount > stockAmount) {
      console.error('Quantidade solicitada fora de estoque.');
      return;
    }
    const response = await axios.get(`http://localhost:8888/products/${productId}`);
  
    const productData = {
      ...response.data,
      amount,
      priceFormatted: response.data.price.toLocaleString('pt-BR',
        { style: 'currency', currency: 'BRL' }
      )
    };
    
    commit('addToCartSuccess', productData);
  }
};

const mutations = {
  addToCartSuccess: (state, productData) => (state.products.unshift(productData),
    state.loading = false
  ),
  updateAmountSuccess: (state, productId, amount) => (state.products = state.products
    .map(product => ({
      ...product,
      amount: product._id === productId ? amount : product.amount
    })),
    state.loading = false
  )
};

export default {
  state,
  getters,
  actions,
  mutations
};
