import Vue from 'vue';

const state = {
  tasks: {
    ID1: {
      name: 'Go to shop',
      completed: true,
      dueDate: '2019/05/12',
      dueTime: '18:30',
    },
    ID2: {
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/05/13',
      dueTime: '18:40',
    },
    ID3: {
      name: 'Get apples',
      completed: false,
      dueDate: '2019/05/14',
      dueTime: '18:50',
    },
  },
};
const mutations = {
  UPDATE_TASK(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  REMOVE_TASK(state, id) {
    console.log('payload remove', id);
    // delete tasks[id];
    Vue.delete(state.tasks, id);
  },
};
const actions = {
  updateTask({ commit }, payload) {
    commit('UPDATE_TASK', payload);
  },
  removeTask({ commit }, id) {
    console.log('action', id);
    commit('REMOVE_TASK', id);
  },
};
const getters = {
  getTasks: (state) => {
    return state.tasks;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
