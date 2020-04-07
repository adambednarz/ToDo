<template>
  <q-page padding>
    <q-list v-if="Object.keys(tasks).length" separator bordered>
      <Task
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
        :id="index"
      ></Task>
    </q-list>

    <div class="fixed-bottom text-center q-mb-lg addButton">
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
import Task from '../components/Tasks/Task';
import AddTask from '../components/Tasks/Modals/AddTask';

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
<style lang="scss">
@media screen and (max-width: 768px) {
  .addButton {
    margin-bottom: 80px;
  }
}
</style>
