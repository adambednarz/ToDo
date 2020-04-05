<template>
  <q-layout view="hHh LpR lFf">
    <q-header elevated>
      <q-toolbar class="glossy">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Todo app
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
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
};
</script>
<style>
.autoMargin {
  margin: auto;
}
</style>
