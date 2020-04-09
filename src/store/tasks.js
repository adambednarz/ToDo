import Vue from 'vue';
import { uid } from 'quasar';
import { firebaseDb, firebaseAuth } from 'src/boot/firebase';

const state = {
  tasks: {},
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
  fbReadData({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let userTask = firebaseDb.ref('tasks/' + userId);

    // child added
    userTask.on('child_added', snapshot => {
      let task = snapshot.val();
      let payload = {
        id: snapshot.key,
        task: task,
      };
      commit('ADD_TASK', payload);
    });
    // child changed
    userTask.on('child_changed', snapshot => {
      let task = snapshot.val();
      let payload = {
        id: snapshot.key,
        updates: task,
      };
      commit('UPDATE_TASK', payload);
    });

    // child removed
    userTask.on('child_removed', snapshot => {
      let taskId = snapshot.key;
      commit('REMOVE_TASK', taskId);
    });
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
