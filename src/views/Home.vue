<template>
  <div class="home">
    <Header />
    <ProductList />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import ProductList from '../components/ProductList.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    ProductList,
    Footer,
  }
}
</script>
