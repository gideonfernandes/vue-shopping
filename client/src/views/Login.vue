<template>
  <div class="container">
    <Logo />
    <section class="form-container">
      <h1>
          Acesse sua conta e aproveite as <strong>melhores </strong>
          promoções em aparelhos eletrônicos, <strong>transparência</strong> e
          <strong> qualidade</strong> em um só lugar!
        </h1>

        <form @submit="handleOnSubmit">
          <label for="email">EMAIL *</label>
          <input
            type="email" 
            name="email"
            placeholder="Seu email cadastrado"
            v-model="user.email"
          />

          <label for="password">SENHA *</label>
          <input
            type="password" 
            name="password"
            placeholder="Sua senha"
            minLength="7"
            v-model="user.password"
          />

          <button
            type="submit"
            class="btn"
          >
            ACESSAR CONTA
          </button>
        </form>
        <router-link to="/register">
          Não possui uma conta? <strong>Registre-se aqui</strong>
        </router-link>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Logo from '../components/Logo.vue'

export default {
  name: 'Login',
  components: {
    Logo
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['loginUser']),

    async handleOnSubmit(event) {
      event.preventDefault();

      const { email, password } = this.user;

      if (email.trim() === '' || password.trim() === '' ) {
        console.log('Os campos email e senha são obrigatórios.');
        return;
      } else {
        await this.loginUser(this.user);
        this.user = {};
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 2rem auto 4rem auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.form-container {
  flex: 1;
  align-self: center;
  background-color: #fff;
  margin: 0 8px;
  padding: 30px;
  border-radius: 5px;
}

.form-container h1 {
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 30px;
  font-weight: 400;
}

.form-container h1 > strong {
  font-weight: 700;
  color: #333;
}

.form-container form {
  display: flex;
  flex-direction: column;
}

.form-container form label {
  font-size: 14px;
  font-weight: 700;
  color: #444;
  margin-bottom: 8px;
}

.form-container form label span {
  font-weight: normal;
  font-size: 12px;
  color: #999;
  margin-left: 8px;
}

.form-container form input {
  font-size: 16px;
  margin-bottom: 20px;
  padding: 0 15px;
  border: 1px solid #ddd;
  border-radius: 2px;
  height: 45px;
}

.form-container button.btn {
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  font-size: 18px;
  color: #fff;
  background: #2c3e50;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
  margin-bottom: 1.6rem;
}

.form-container button.btn:hover {
  opacity: 0.8;
}

.form-container a {
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
}
</style>
