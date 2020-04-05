<template>
  <q-card>
    <form @submit.prevent="onSubmit">
      <q-card-section class="row">
        <div class="text-h6">Add task</div>
        <q-space />
        <small>
          <q-btn v-close-popup flat dense round color="gray" icon="close" />
        </small>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          ref="name"
          outlined
          v-model="newTask.name"
          label="Task name"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Field can not be empty',
          ]"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input outlined label="Due Time" v-model="newTask.dueDate">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  v-model="newTask.dueDate"
                  @input="() => $refs.qDateProxy.hide()"
                />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input outlined label="Due Time" v-model="newTask.dueTime">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time format24h v-model="newTask.dueTime" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn type="submit" label="SAVE" color="primary" />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
export default {
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
      this.$refs.name.validate();
      if (!this.$refs.name.hasError) {
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
