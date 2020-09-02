import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

const state = {
  isAuthenticated: false,
  loading: false,
  user: null,
};

const getters = {

};

const actions = {
  async loadToken({ commit }) {
    const userId = localStorage.getItem('authenticateUserId');
    commit('loadTokenSuccess', userId);
  },

  async registerUser({ commit }, userData) {
    try {
      const response = await axios
        .post('http://localhost:8888/users', userData);

      const { token, user } = response.data;

      // Set token & user on localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('authenticateUserId', user.id);

      // Set token header on axios requests
      setAuthToken(token);

      commit('authSuccess', user.id);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          console.error('Campos informados estão incorretos ou usuário já existe.');
        } else if (error.response.status === 500) {
          console.error('Houve um erro no servidor.');
        } else {
          console.error(error.message);
        }
      }

      return;
    }
  },
  
  async loginUser({ commit }, userData) {
    try {
      const response = await axios
        .post('http://localhost:8888/sessions', userData);
  
      const { token, user } = response.data;
      commit('authSuccess', token, user.id);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          console.error('Campos informados estão incorretos.');
        } else if (error.response.status === 401) {
          console.error('Credenciais inválidas.');
        } else if (error.response.status === 500) {
          console.error('Houve um erro no servidor.');
        } else {
          console.error(error.message);
        }
      }
  
      return;
    }
  },

  async logoutUser({ commit }) {
    // Remove token & user on localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('authenticateUserId');

    // Remove token header on axios requests
    setAuthToken(localStorage.token);

    commit('logoutUserSuccess');
  }
};

const mutations = {
  loadTokenSuccess: (userId) => (
    state.isAuthenticated = true,
    state.loading = false,
    state.user = userId
  ),

  authSuccess: (state, userId) => (
    state.isAuthenticated = true,
    state.loading = false,
    state.user = userId
  ),

  logoutUserSuccess: (state) => (
    state.isAuthenticated = false,
    state.loading = false,
    state.user = null
  )
};

export default {
  state,
  getters,
  actions,
  mutations
};
