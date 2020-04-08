<template>
  <form @submit.prevent="onSubmit">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        <span v-if="tab == 'register'">
          Register to acces your todos anywhere!
        </span>
        <span v-else> Login to acces your todos anywhere! </span>
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
        ref="email"
        outlined
        class="col"
        v-model="formData.email"
        label="Email"
        lazy-rules
        :rules="[val => isValidEmail(val) || 'Email is incorect']"
      />
    </div>
    <div class="row q-mb-md row">
      <q-input
        ref="password"
        class="col"
        outlined
        type="password"
        v-model="formData.password"
        label="Password"
        lazy-rules
        :rules="[val => val.length >= 6 || 'Please use at least 6 characters']"
      />
    </div>
    <div class="row q-mb-md">
      <q-space />
      <q-btn color="primary" :label="tab" type="submit" />
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['tab'],
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser']),
    onSubmit() {
      this.$refs.email.validate();
      this.$refs.password.validate();
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab == 'login') {
          this.loginUser(this.formData);
        } else {
          this.registerUser(this.formData);
        }
      }
    },

    isValidEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
};
</script>

<style lang="scss" scoped></style>
