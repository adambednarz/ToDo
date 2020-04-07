<template>
  <q-card-section class="q-pt-none">
    <q-input
      clearable
      outlined
      label="Due Date"
      :value="dueDate"
      @input="$emit('update:dueDate', $event)"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-date :value="dueDate" @input="$emit('update:dueDate', $event)" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <!-- {{ dueDate }} -->
  </q-card-section>
</template>

<script>
export default {
  props: {
    dueDate: {},
  },
};
</script>

<style lang="scss" scoped>
</style>
