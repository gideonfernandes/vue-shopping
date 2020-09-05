<template>
  <div class="container">
    <Logo />
    <section class="form-container">
      <h1>
        Adquira os <strong>melhores</strong> produtos em informática, 
        temos <strong>diversidade</strong> em tecnologia para você...
      </h1>

      <form @submit="handleOnSubmit">
        <label for="name">NOME *</label>
        <input
          type="text" 
          name="name"
          placeholder="Seu nome"
          v-model="user.name"
        />

        <label for="lastName">SOBRENOME *</label>
        <input
          type="text" 
          name="lastName"
          placeholder="Seu sobrenome"
          v-model="user.lastName"
        />

        <label for="email">EMAIL *</label>
        <input
          type="email" 
          name="email"
          placeholder="Seu melhor e-mail"
          v-model="user.email"
        />

        <label for="email">SENHA *</label>
        <input
          type="password" 
          name="password"
          placeholder="Sua nova senha"
          minLength="7"
          v-model="user.password"
        />

        <label for="email">CONFIRMAR SENHA *</label>
        <input
          type="password" 
          name="confirmPassword"
          placeholder="Confirme sua senha"
          minLength="7"
          v-model="user.confirmPassword"
        />

        <button
          type="submit"
          class="btn"
        >
          FINALIZAR CADASTRO
        </button>
      </form>
      <router-link to="/login">
        Já possui uma conta? <strong>Faça login aqui</strong>
      </router-link>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Logo from '../components/Logo.vue'

export default {
  name: 'Register',
  components: {
    Logo
  },
  computed: {
    isAuthenticated() { return this.$store.state.auth.isAuthenticated }
  },
  beforeMount() {
    if (this.isAuthenticated && !this.loading) {
      this.$router.push({ name: 'Home' });
    }
  },
  data() {
    return {
      user: {
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    ...mapActions(['registerUser']),

    async handleOnSubmit(event) {
      event.preventDefault();

      const { name, lastName, email, password, confirmPassword } = this.user;

      if (name.trim() === '' || lastName.trim() === '' ) {
        console.log('Os campos nome e sobrenome são obrigatórios.');
        return;
      } else if (email.trim() == '') {
        console.log('O campo e-mail é obrigatório.');
        return;
      } else if (password.trim() === '' || confirmPassword.trim() === '') {
        console.log('Os campos senha e confirmar senha são obrigatórios.');
        return;
      } else if (password !== confirmPassword) {
        console.log('As senhas não correspondem.');
        return;
      } else {
        await this.registerUser(this.user);
        this.user = {};
        this.$router.push({ name: 'Home' });
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
