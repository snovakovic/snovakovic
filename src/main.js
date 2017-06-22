import Vue from 'vue';

import App from './App.vue';

import Me from './data/me';

Vue.use({
  install: (vue) => (vue.prototype.$me = Me)
});

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: (h) => h(App)
});
