<template>
  <q-card>
    <form @submit.prevent="onSubmit">
      <modal-header>Edit Task</modal-header>

      <modal-task-name :name.sync="editedTask.name" ref="modalName" />

      <modal-due-date :dueDate.sync="editedTask.dueDate" />

      <modal-due-time
        v-if="editedTask.dueDate"
        :dueTime.sync="editedTask.dueTime"
      />

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
  props: {
    task: Object,
    id: String,
  },
  data() {
    return {
      editedTask: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false,
      },
    };
  },
  mounted() {
    this.editedTask = Object.assign({}, this.task);
  },
  methods: {
    onSubmit() {
      this.$refs.modalName.$refs.name.validate();
      if (!this.$refs.modalName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.$store.dispatch('tasks/updateTask', {
        id: this.id,
        updates: this.editedTask,
      });
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped></style>
