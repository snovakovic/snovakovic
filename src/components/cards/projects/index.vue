<template>
  <card id="projects-card" class="projects">
    <h2>Projects</h2>
    <div class="item" v-for="project in activeProjects" :key="project.title">
      <project :project="project"></project>
    </div>
    <div class="pagination">
      <pagination :items="projects" @change="setActive"></pagination>
      <filtered-by v-if="typeFilter || technologyFilter"></filtered-by>
      <filter-tooltip class="filter-tooltip-wrapper"></filter-tooltip>
    </div>
  </card>
</template>


<style lang="scss" scoped>
  @import '~styles/constants';

  .item {
    margin-bottom: 30px;
    border-bottom: 1px solid $bg-color;
  }

  .pagination {
    position: relative;

    .filter-tooltip-wrapper {
      position: absolute;
      top: -5px;
      right: 10px;
    }
  }
</style>


<script>
  import Projects from 'data/Projects';
  import scrollTo from 'dom/scrollTo';

  import Card from '../Card.vue';
  import FilterTooltip from './FilterTooltip.vue';
  import FilteredBy from './FilteredBy.vue';
  import Pagination from '../../Pagination.vue';
  import Project from './Project.vue';

  export default {
    data() {
      return { activeProjects: [] };
    },
    computed: {
      typeFilter() { return this.$store.state.projects.filter.type; },
      technologyFilter() { return this.$store.state.projects.filter.technology; },
      projects() {
        return Projects.filter((p) =>
          (!this.typeFilter || p.type.some((t) => t === this.typeFilter))
          && (!this.technologyFilter
            || p.technologies.some((t) => t === this.technologyFilter)));
      }
    },
    methods: {
      setActive(items) {
        this.activeProjects = items;
        if (this.$el) {
          scrollTo(this.$el);
        }
      }
    },
    components: {
      Card,
      FilterTooltip,
      FilteredBy,
      Pagination,
      Project
    }
  };
</script>
