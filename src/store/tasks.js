import Vue from 'vue';
import { uid } from 'quasar';

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
  ADD_TASK(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task);
  },
  UPDATE_TASK(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  REMOVE_TASK(state, id) {
    Vue.delete(state.tasks, id);
  },
};
const actions = {
  addTask({ commit }, newTask) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: newTask,
    };
    commit('ADD_TASK', payload);
  },
  updateTask({ commit }, payload) {
    commit('UPDATE_TASK', payload);
  },
  removeTask({ commit }, id) {
    commit('REMOVE_TASK', id);
  },
};
const getters = {
  getTodoTasks: state => {
    let todTask = {};
    Object.keys(state.tasks).forEach(key => {
      let task = state.tasks[key];
      if (!task.completed) {
        todTask[key] = task;
      }
    });

    return todTask;
  },
  getCompletedTasks: state => {
    let completedTask = {};
    Object.keys(state.tasks).forEach(key => {
      let task = state.tasks[key];
      if (task.completed) {
        completedTask[key] = task;
      }
    });

    return completedTask;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
