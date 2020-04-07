<template>
  <q-page padding>
    <todo-tasks :todoTasks="todoTasks" />
    <hr />
    <completed-tasks :completedTasks="completedTasks" />

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
import AddTask from '../components/Tasks/Modals/AddTask';
import CompletedTasks from '../components/Tasks/CompletedTasks.vue';
import TodoTasks from '../components/Tasks/TodoTasks.vue';

export default {
  components: {
    CompletedTasks,
    TodoTasks,
    AddTask,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  computed: {
    todoTasks() {
      return this.$store.getters['tasks/getTodoTasks'];
    },
    completedTasks() {
      return this.$store.getters['tasks/getCompletedTasks'];
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
