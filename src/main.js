import Vue from 'vue';

import App from './App.vue';

import Store from './Store';

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store: Store,
  render: (h) => h(App)
});
