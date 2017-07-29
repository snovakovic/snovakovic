import Vue from 'vue';

import HeaderResizer from './dom/HeaderResizer';

import App from './App.vue';

import Store from './Store';

Vue.nextTick(() => {
  HeaderResizer.init();
  HeaderResizer.setSize();
});

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store: Store,
  render: (h) => h(App)
});
