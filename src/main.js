import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

import LayoutEditor from './views/LayoutEditor.vue';
import Layouts from './views/Layouts.vue';

// Vuetify
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

const requireComponent = require.context(
  './components/layouts',
  false,
  /Layout\d+\.(vue|js)$/
);
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  );
  Vue.component(componentName, componentConfig.default || componentConfig);
});

Vue.component('LayoutEditor', LayoutEditor);
Vue.component('Layouts', Layouts);

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
