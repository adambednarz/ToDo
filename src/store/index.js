import Vue from 'vue';
import Vuex from 'vuex';

import tasks from './tasks';
import auth from './auth';

Vue.use(Vuex);

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      tasks,
      auth,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  });

  return Store;
}
