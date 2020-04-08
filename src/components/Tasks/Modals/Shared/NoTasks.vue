<template>
  <q-banner class="bg-grey-3 radius-border">
    <template v-slot:avatar>
      <q-icon name="check" color="primary" />
    </template>
    No tasks to do today!
    <template v-slot:action>
      <q-btn
        @click="$root.$emit('addTask')"
        flat
        color="primary"
        label="Add Task"
      />
    </template>
  </q-banner>
</template>

<script>
export default {};
</script>

<style lang="scss">
.radius-border {
  border-radius: 5px;
}
</style>>
