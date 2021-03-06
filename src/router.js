import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import HtmlTable from './views/HtmlTable.vue';
import TreeTable from './views/TreeTable.vue';
import VueTable from './views/VueTable.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/vue-table',
      name: 'vue-table',
      component: VueTable,
    },
    {
      path: '/html-table',
      name: 'html-table',
      component: HtmlTable,
    },
    {
      path: '/tree-table',
      name: 'tree-table',
      component: TreeTable,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
