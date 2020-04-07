<template>
  <q-card>
    <form @submit.prevent="onSubmit">
      <modal-header>Add Task</modal-header>

      <modal-task-name :name.sync="newTask.name" ref="modalName" />

      <modal-due-date :dueDate.sync="newTask.dueDate" />

      <modal-due-time v-if="newTask.dueDate" :dueTime.sync="newTask.dueTime" />

      <q-card-actions align="right">
        <q-btn type="submit" label="SAVE" color="primary" />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import ModalHeader from 'src/components/Tasks/Modals/Shared/ModalHeader.vue';
import ModalTaskName from 'src/components/Tasks/Modals/Shared/ModalTaskName.vue';
import ModalDueDate from 'src/components/Tasks/Modals/Shared/ModalDueDate';
import ModalDueTime from 'src/components/Tasks/Modals/Shared/ModalDueTime';

export default {
  components: {
    ModalHeader,
    ModalTaskName,
    ModalDueDate,
    ModalDueTime,
  },
  data() {
    return {
      newTask: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.modalName.$refs.name.validate();
      if (!this.$refs.modalName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.$store.dispatch('tasks/addTask', this.newTask);
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped></style>
