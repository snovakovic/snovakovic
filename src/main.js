import Vue from 'vue';

import HeaderResizer from './dom/HeaderResizer';
import Store from './Store';
import Wiggle from './common/Wiggle';

import App from './App.vue';

Wiggle.on('desktop', () => Store.commit('setIsDesktop', true));
Wiggle.off('desktop', () => Store.commit('setIsDesktop', false));

Vue.nextTick().then(() => {
  Wiggle.off('mobile', () => HeaderResizer.init());
  Wiggle.on('mobile', () => HeaderResizer.unwatch());
});

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store: Store,
  render: (h) => h(App)
});
