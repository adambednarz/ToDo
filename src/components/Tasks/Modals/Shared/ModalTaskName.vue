<template>
  <q-card-section class="q-pt-none">
    <q-input
      ref="name"
      outlined
      :value="name"
      @input="$emit('update:name', $event)"
      label="Task name"
      lazy-rules
      autofocus
      clearable
      :rules="[val => (val && val.length > 0) || 'Field can not be empty']"
    />
  </q-card-section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
