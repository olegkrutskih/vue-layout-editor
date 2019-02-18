import Vue from 'vue';
import Router from 'vue-router';
import Layouts from './views/Layouts.vue';
import LayoutEditor from './views/LayoutEditor.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'layouts'
    },
    {
      path: '/layouts',
      name: 'layouts',
      component: Layouts
    },
    {
      path: '/layout-editor/:layout',
      component: LayoutEditor
    },
    {
      path: '*',
      redirect: 'layouts'
    }
  ]
});
