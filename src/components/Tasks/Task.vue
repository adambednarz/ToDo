<template>
  <q-item
    v-ripple
    clickable
    @click="updateTask()"
    :class="{ 'bg-green-1': task.completed }"
  >
    <q-item-section side>
      <q-checkbox :value="task.completed" class="no-pointer-events" />
    </q-item-section>
    <q-item-section>
      <q-item-label :class="{ 'text-strikethroughout': task.completed }">
        {{ task.name }}
      </q-item-label>
    </q-item-section>
    <q-item-section side top>
      <q-item-label caption>{{ task.dueDate }}</q-item-label>
      <q-item-label caption
        ><small>{{ task.dueTime }}</small></q-item-label
      >
    </q-item-section>
    <q-item-section side right>
      <small
        ><q-btn
          @click.stop="showEditTask = true"
          flat
          dense
          round
          color="primary"
          icon="edit"
        />
        <q-btn
          @click.stop="promptToDelete(id)"
          flat
          dense
          round
          color="red"
          icon="delete"
        />
      </small>
    </q-item-section>

    <q-dialog v-model="showEditTask">
      <edit-task :task="task" :id="id" @close="showEditTask = false" />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex';
import EditTask from 'src/components/Tasks/Modals/EditTask';

export default {
  components: {
    EditTask,
  },
  props: {
    task: {
      type: Object,
    },
    id: {
      type: String,
    },
  },
  data() {
    return {
      showEditTask: false,
    };
  },
  methods: {
    updateTask() {
      return this.$store.dispatch('tasks/updateTask', {
        id: this.id,
        updates: { completed: !this.task.completed },
      });
    },
    promptToDelete(id) {
      this.$q
        .dialog({
          title: 'Confirm',
          message: 'Would you like to delete task?',
          ok: {
            push: true,
          },
          cancel: {
            color: 'negative',
          },
          persistent: true,
        })
        .onOk(() => {
          return this.$store.dispatch('tasks/removeTask', id);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
