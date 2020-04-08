<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar class="glossy">
        <q-toolbar-title class="absolute-center">
          Todo app
        </q-toolbar-title>
        <q-btn
          v-if="!loggedIn"
          :to="{ name: 'Auth' }"
          class="absolute-right"
          flat
          icon-right="account_circle"
          label="Login"
        />
        <q-btn
          v-if="loggedIn"
          @click="logoutUser"
          class="absolute-right"
          flat
          icon-right="account_circle"
          label="Logout"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Navigation
        </q-item-label>

        <q-item
          clickable
          exact
          v-for="(nav, index) in navs"
          :key="index"
          :to="{ name: nav.page }"
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-footer>
      <q-toolbar class="glossy">
        <q-tabs class="autoMargin">
          <q-route-tab
            v-for="(nav, index) in navs"
            :key="index"
            :icon="nav.icon"
            :label="nav.label"
            :to="{ name: nav.page }"
          />
        </q-tabs>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MainLayout',
  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          page: 'Home',
        },
        {
          label: 'Settings',
          icon: 'settings',
          page: 'Settings',
        },
      ],
    };
  },
  computed: {
    ...mapState('auth', {
      loggedIn: 'loggedIn',
    }),
  },
  methods: {
    ...mapActions('auth', ['logoutUser']),
  },
};
</script>
<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
.q-footer {
  .q-tabs {
    margin: auto;
  }
}
</style>
