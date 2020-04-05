const state = {
  tasks: {
    ID1: {
      name: 'Go to shop',
      completed: true,
      dueDate: '2019/05/12',
      dueTime: '18:30',
    },
    ID3: {
      name: 'Get bananas',
      completed: false,
      dueDate: '2019/05/13',
      dueTime: '18:40',
    },
    ID2: {
      name: 'Get apples',
      completed: false,
      dueDate: '2019/05/14',
      dueTime: '18:50',
    },
  },
};
const mutations = {};
const actions = {};
const getters = {
  getTasks: (state) => {
    console.log(state.tasks);
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
