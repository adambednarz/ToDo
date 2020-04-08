<template>
  <div>
    <list-header bgColor="bg-green-4"> Completed</list-header>
    <q-list separator bordered>
      <task
        v-for="(task, index) in completedTasks"
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
    completedTasks: {
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
