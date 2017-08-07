import Vue from 'vue';
import Vuex from 'vuex';

import projectType from 'common/projectType';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDesktop: undefined,
    projects: {
      list: [],
      filter: {
        type: projectType.FEATURED,
        technology: undefined
      }
    }
  },
  mutations: {
    setIsDesktop(state, isDesktop) {
      state.isDesktop = isDesktop;
    },
    setTypeFilter(state, type) {
      state.projects.filter.type = type;
    },
    setTechnologyFilter(state, technology) {
      state.projects.filter.technology = technology;
    }
  }
});
