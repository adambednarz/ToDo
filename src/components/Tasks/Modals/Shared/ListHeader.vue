<template>
  <q-banner
    dense
    glossy
    inline-actions
    text-subtitle1
    :class="bgColor"
    class="text-white  text-center list-header"
  >
    <span class="text-bold"><slot>Default name</slot></span>
  </q-banner>
</template>

<script>
export default {
  props: ['bgColor'],
};
</script>

<style lang="scss">
.list-header {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
