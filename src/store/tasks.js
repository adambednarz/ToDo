import Vue from 'vue';
import { uid } from 'quasar';
import { firebaseDb, firebaseAuth } from 'src/boot/firebase';

const state = {
  tasks: {},
  tasksDownloaded: false,
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
  CLEAR_TASKS(state) {
    state.tasks = {};
  },
  SET_TASK_DOWNLOADED(state, value) {
    state.tasksDownloaded = value;
  },
};
const actions = {
  addTask({ dispatch }, newTask) {
    let taskId = uid();
    let payload = {
      id: taskId,
      task: newTask,
    };
    dispatch('fbAddTask', payload);
  },
  updateTask({ dispatch }, payload) {
    dispatch('fbUpdateTask', payload);
  },
  removeTask({ dispatch }, id) {
    dispatch('fbRemoveTask', id);
  },

  //firebaseAction
  fbReadData({ commit }) {
    let userId = firebaseAuth.currentUser.uid;
    let userTasks = firebaseDb.ref('tasks/' + userId);

    // initial check for data
    userTasks.once('value', snapshot => {
      commit('SET_TASK_DOWNLOADED', true);
    });

    // child added
    userTasks.on('child_added', snapshot => {
      let task = snapshot.val();
      let payload = {
        id: snapshot.key,
        task: task,
      };
      commit('ADD_TASK', payload);
    });

    // child changed
    userTasks.on('child_changed', snapshot => {
      let task = snapshot.val();
      let payload = {
        id: snapshot.key,
        updates: task,
      };
      commit('UPDATE_TASK', payload);
    });

    // child removed
    userTasks.on('child_removed', snapshot => {
      let taskId = snapshot.key;
      commit('REMOVE_TASK', taskId);
    });
  },
  fbAddTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref('tasks/' + userId + '/' + payload.id);
    taskRef.set(payload.task);
  },
  fbUpdateTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref('tasks/' + userId + '/' + payload.id);
    taskRef.update(payload.updates);
  },
  fbRemoveTask({}, taskId) {
    let userId = firebaseAuth.currentUser.uid;
    let taskRef = firebaseDb.ref('tasks/' + userId + '/' + taskId);
    taskRef.remove();
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
