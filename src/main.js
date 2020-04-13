import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { firestorePlugin } from 'vuefire';

import 'materialize-css/dist/css/materialize.min.css';

Vue.config.productionTip = false;
Vue.use(firestorePlugin, { wait: true });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
