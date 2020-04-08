<template>
  <div>
    <div class="q-mb-lg">
      <list-header bgColor="bg-orange-4">Todo </list-header>
      <q-list separator bordered>
        <task
          v-for="(task, index) in todoTasks"
          :key="index"
          :task="task"
          :id="index"
        ></task>
      </q-list>
    </div>
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
