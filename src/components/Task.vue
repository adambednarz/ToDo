<template>
  <q-item
    v-ripple
    clickable
    @click="task.completed = !task.completed"
    :class="{ 'bg-green-1': task.completed }"
  >
    <q-item-section side>
      <q-checkbox v-model="task.completed" />
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
export default {
  props: {
    task: {
      type: Object,
    },
    id: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
