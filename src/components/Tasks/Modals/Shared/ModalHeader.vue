<template>
  <q-card-section class="row">
    <div class="text-h6">
      <slot>Default name</slot>
    </div>
    <q-space />
    <small>
      <q-btn v-close-popup flat dense round color="gray" icon="close" />
    </small>
  </q-card-section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
