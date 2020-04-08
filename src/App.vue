<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  methods: {
    ...mapActions('auth', ['handleAuthStateChange']),
  },
  mounted() {
    this.handleAuthStateChange();
  },
};
</script>

<style lang="scss">
.text-strikethroughout {
  text-decoration: line-through;
}
</style>
