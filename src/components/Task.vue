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
      <q-icon name="today" size="18px" />
      <q-item-label caption>{{ task.dueDate }}</q-item-label>
      <q-item-label caption
        ><small>{{ task.dueTime }}</small></q-item-label
      >
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    task: {
      type: Object,
    },
    id: {
      type: String,
    },
  },
  methods: {
    updateTask() {
      return this.$store.dispatch('tasks/updateTask', {
        id: this.id,
        updates: { completed: !this.task.completed },
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
