<template>
  <q-card-section class="q-pt-none">
    <q-input
      clearable
      outlined
      label="Due Time"
      :value="dueTime"
      @input="$emit('update:dueTime', $event)"
    >
      >
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time
              format24h
              :value="dueTime"
              @input="$emit('update:dueTime', $event)"
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </q-card-section>
</template>

<script>
export default {
  props: {
    dueTime: {},
  },
};
</script>

<style lang="scss" scoped>
</style>
