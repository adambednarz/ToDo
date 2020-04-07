<template>
  <div>
    <list-header>Todo </list-header>
    <q-list v-if="Object.keys(todoTasks).length" separator bordered>
      <task
        v-for="(task, index) in todoTasks"
        :key="index"
        :task="task"
        :id="index"
      ></task>
    </q-list>
  </div>
</template>

<script>
import Task from 'src/components/Tasks/Task.vue';
import ListHeader from 'src/components/Tasks/Modals/Shared/ListHeader.vue';

export default {
  props: {
    todoTasks: {
      type: Object,
    },
  },
  components: {
    Task,
    ListHeader,
  },
};
</script>

<style lang="scss" scoped>
</style>
