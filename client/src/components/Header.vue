<template>
  <header class="container">
    <Logo />
    <router-link class="cart" to="/cart">
      <div>
        <strong>Meu carrinho</strong>
        <span>7 itens</span>
      </div>
      <CartIcon fillColor="#FFF" :size="48" />
    </router-link>
    <LogoutIcon fillColor="#FFF" :size="48" @click="handleLogout" />
  </header>
</template>

<script>
import { mapActions } from 'vuex';
import Logo from '../components/Logo.vue'
import CartIcon from 'vue-material-design-icons/Cart.vue';
import LogoutIcon from 'vue-material-design-icons/PowerSettings.vue';

export default {
  name: 'Header',
  components: {
    Logo,
    CartIcon,
    LogoutIcon
  },
  methods: {
    ...mapActions(['logoutUser']),

    async handleLogout(event) {
      event.preventDefault();

      await this.logoutUser();
      this.$router.push({ name: 'Login' });
    }
  }
}
</script>

<style scoped>
header.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 calc((100% - 960px) / 2);
  background-color: #151515;
  padding-bottom: 2.6rem;
}

header.container svg {
  cursor: pointer;
  margin-right: 0.6rem;
}

@media only screen and (max-width: 560px) {
  header.container {
    flex-direction: column;
  }

  header.container svg {
    margin-bottom: 3rem;
  }
}

a.cart {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s ease-in;
}

a.cart:hover {
  opacity: 0.7;
}

div {
  text-align: right;
  margin-right: 0.8rem;
}

div strong {
  display: block;
  color: #FFF;
  font-size: 1.2rem
}

div span {
  font-size: 1.2rem;
  color: #999;
}


@media only screen and (max-width: 768px) {
  div {
    margin-right: 0.6rem;
  }

  div strong {
    font-size: 0.9rem
  }
}

@media only screen and (max-width: 560px) {
  div {
    margin: 0.7rem 0.7rem 2rem 0.7rem;
  }
}
</style>
