<template>
  <q-page padding>
    <q-list separator bordered>
      <Task
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        :id="index"
      ></Task>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from '../components/Task.vue';

export default {
  components: {
    Task,
  },
  computed: {
    tasks() {
      return this.$store.getters['tasks/getTasks'];
    },
    // ...mapGetters('tasks', ['getTasks']),
  },
};
</script>
