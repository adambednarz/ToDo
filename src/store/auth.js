import Vue from 'vue';
import { uid } from 'quasar';
import { firebaseAuth } from 'src/boot/firebase';
import { LocalStorage } from 'quasar';

const state = {
  loggedIn: false,
};
const mutations = {
  SET_LOGGEDIN(state, value) {
    state.loggedIn = value;
  },
};
const actions = {
  registerUser({}, payload) {
    console.log('register action', payload);
    firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(respone => {
        console.log('response:', respone);
      })
      .catch(error => {
        console.log('error:', error);
      });
  },
  loginUser({}, payload) {
    console.log('register action', payload);
    firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(respone => {
        console.log('response:', respone);
      })
      .catch(error => {
        console.log('error:', error);
      });
  },
  logoutUser() {
    firebaseAuth.signOut();
  },
  handleAuthStateChange({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        commit('SET_LOGGEDIN', true);
        LocalStorage.set('loggedIn', true);
        this.$router.push('/');
      } else {
        commit('SET_LOGGEDIN', false);
        LocalStorage.set('loggedIn', false);
        this.$router.replace('/auth');
      }
    });
  },
};
const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
