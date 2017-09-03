import Vue from 'vue';
import Vuex from 'vuex';

import Profile from 'data/Profile';
import ProjectType from 'common/ProjectType';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDesktop: undefined,
    profile: Profile,
    projects: {
      list: [],
      filter: {
        type: ProjectType.FEATURED,
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
