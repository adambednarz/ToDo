const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/Todo.vue'),
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () => import('pages/Settings.vue'),
      },
      {
        path: '/auth',
        name: 'Auth',
        component: () => import('pages/Auth.vue'),
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
