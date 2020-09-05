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
  loadToken({ commit }) {
    // Get token & user from localStorage
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('authenticateUserId');

    // Set token header on axios requests
    setAuthToken(token);

    // to-do a backend request to verify if token and user id is valid

    if (token && userId) {
      commit('authSuccess', userId);
    } else {
      commit('authDismiss');
    }
  },

  async registerUser({ commit, state }, userData) {
    try {
      state.loading = true;

      const response = await axios
        .post('http://localhost:8888/users', userData);

      const { token, user } = response.data;

      // Set token & user on localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('authenticateUserId', user.id);

      // Set token header on axios requests
      setAuthToken(token);

      state.loading = false;
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
  
  async loginUser({ commit, state }, userData) {
    try {
      state.loading = true;

      const response = await axios
        .post('http://localhost:8888/sessions', userData);
  
      const { token, user } = response.data;

      // Set token & user on localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('authenticateUserId', user.id);

      // Set token header on axios requests
      setAuthToken(token);
      
      state.loading = false;
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

    commit('authDismiss');
  }
};

const mutations = {
  authSuccess: (state, userId) => (
    state.isAuthenticated = true,
    state.loading = false,
    state.user = userId
  ),

  authDismiss: (state) => (
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
