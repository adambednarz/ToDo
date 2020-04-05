<template>
  <q-page padding>
    <q-list separator bordered>
      <q-item
        v-for="task in tasks"
        :key="task.id"
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
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: 'Go to shop',
          completed: true,
          dueDate: '2019/05/12',
          dueTime: '18:30',
        },
        {
          id: 2,
          name: 'Get bananas',
          completed: false,
          dueDate: '2019/05/13',
          dueTime: '18:40',
        },
        {
          id: 3,
          name: 'Get apples',
          completed: false,
          dueDate: '2019/05/14',
          dueTime: '18:50',
        },
      ],
    };
  },
  computed: {
    check() {
      return console.log(this.tasks);
    },
  },
};
</script>
