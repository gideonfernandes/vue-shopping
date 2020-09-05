<template>
  <ul class="products">
    <li v-for="product in allProducts" :key="product.id">
      <img
        :src="'http://localhost:8888/files/' + product.image"
        :alt="product.title"
      />
      <strong>{{ product.title }}</strong>
      <span>{{ product.price }}</span>

      <button
        type="button"
        @click="handleAddToCart(product._id)"
      >
        <div>
          <CartIcon fillColor="#FFF" :size="16" /> 0
        </div>

        <span>Adicionar ao carrinho</span>
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CartIcon from 'vue-material-design-icons/Cart.vue';

export default {
  name: 'ProductList',
  components: {
    CartIcon
  },
  data() {
    return {
      isAuthenticated: this.$store.state.auth.isAuthenticated
    }
  },
  computed: mapGetters(['allProducts']),
  methods: {
    ...mapActions(['loadProducts']),
    ...mapActions(['addToCart']),
    async handleAddToCart(productId) {
      await this.addToCart(productId);
    }
  },
  created() {
    if (this.isAuthenticated) {
      this.loadProducts();
    }
  }
}
</script>

<style scoped>
div.load-container {
  width: 100%;
  height: 300px;
  margin: 3rem auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul.products {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  margin-top: -2rem;
  padding: 0 calc((100% - 960px) / 2);
}

ul.products li {
  display: flex;
  flex-direction: column;
  background: #FFF;
  border-radius: 4px;
  padding: 20px;
}

ul.products li img {
  align-self: center;
  max-width: 250px;
  height: 250px;
}

ul.products li > strong {
  font-size: 16px;
  line-height: 20px;
  color: #333;
  margin-top: 14px;
}

ul.products li > span {
  font-size: 20px;
  font-weight: bold;
  margin: 9px 0 20px;
  color: #222;
}

ul.products li button {
  background: #2c3e50;
  color: #FFF;
  border: 0;
  border-radius: 4px;
  margin-top: auto;
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease-in;
}

ul.products li button:hover {
  opacity: 0.7;
}

ul.products li button div {
  display: flex;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
}

ul.products li button svg {
  margin-right: 5px;
}

ul.products li button span {
  flex: 1;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  font-family: Arial !important;
}

@media only screen and (max-width: 970px) {
  ul.products {
    grid-template-columns: repeat(2, 1fr);
    padding: 4rem;
  }
}

@media only screen and (max-width: 860px) {
  ul.products {
    padding: 3rem;
  }
}

@media only screen and (max-width: 670px) {
  ul.products {
    grid-template-columns: 1fr;
    padding: 5rem;
  }
}

@media only screen and (max-width: 560px) {
  ul.products {
    padding: 1.5rem;
  }
}
</style>
