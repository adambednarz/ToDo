<template>
  <q-page padding>
    <template v-if="tasksDownloaded">
      <no-tasks
        v-if="!Object.keys(todoTasks).length"
        @addTask="showAddTask = true"
        class="q-mb-lg"
      />

      <todo-tasks v-else :todoTasks="todoTasks" />

      <completed-tasks
        v-if="Object.keys(completedTasks).length"
        :completedTasks="completedTasks"
      />

      <div class="fixed-bottom text-center q-mb-lg addButton">
        <q-btn
          round
          color="primary"
          size="18px"
          icon="add"
          @click="showAddTask = true"
        />
      </div>
    </template>

    <template v-else>
      <span class="absolute-center">
        <q-spinner color="primary" size="3em" />
      </span>
    </template>
    <q-dialog v-model="showAddTask">
      <AddTask @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import AddTask from '../components/Tasks/Modals/AddTask';
import CompletedTasks from '../components/Tasks/CompletedTasks.vue';
import TodoTasks from '../components/Tasks/TodoTasks.vue';
import NoTasks from 'src/components/Tasks/Modals/Shared/NoTasks.vue';

export default {
  components: {
    CompletedTasks,
    TodoTasks,
    AddTask,
    NoTasks,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  mounted() {
    this.$root.$on('addTask', () => {
      this.showAddTask = true;
    });
  },
  computed: {
    ...mapState('tasks', { tasksDownloaded: 'tasksDownloaded' }),
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
