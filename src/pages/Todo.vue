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

    <div class="absolute-bottom text-center q-mb-md">
      <q-btn
        round
        color="primary"
        size="18px"
        icon="add"
        @click="showAddTask = true"
      />
    </div>
    <q-dialog v-model="showAddTask">
      <AddTask @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from '../components/Task.vue';
import AddTask from '../components/Modals/AddTask.vue';

export default {
  components: {
    Task,
    AddTask,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  computed: {
    tasks() {
      return this.$store.getters['tasks/getTasks'];
    },
    // ...mapGetters('tasks', ['getTasks']),
  },
};
</script>
