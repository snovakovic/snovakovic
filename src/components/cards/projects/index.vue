<template>
  <card id="projects-card" class="projects">
    <h2>Projects</h2>
    <div class="item" v-for="project in activeProjects" :key="project.title">
      <div class="title">
        <h3>{{ project.title }}</h3>
        <p>{{ project.summary }}</p>
      </div>
      <div class="image-wrapper">
        <div class="inner">
          <image-slider :images="getImages(project)"></image-slider>
        </div>
      </div>
      <div class="info">
        <p v-html="project.description"></p>
        <div class="breakdown">
          <p>
            <span class="group">Period:</span>
            <span>{{ formatPeriod(project.period) }}</span>
          </p>
          <p v-if="project.client">
            <span class="group">Client:</span>
            <a v-if="project.client.link" :href="project.client.link">{{ project.client.name }}</a>
            <span v-else>{{ project.client.name }}</span>
          </p>
          <p v-if="project.duties">
            <span class="group">Duties:</span><span>{{ project.duties }}</span>
          </p>
          <p v-if="project.link">
            <span class="group">Link:</span>
            <a href="project.link">{{ project.link }}</a>
          </p>
          <p class="type">
            <span class="group">Type:</span>
            <span class="tag" v-for="type in project.type" :key="type">{{ type }}</span>
          </p>
          <p>
            <span class="group">Technologies:</span>
            <span class="tag" v-for="technology in project.technologies" :key="technology">
              {{ technology }}
            </span>
          </p>
        </div>
      </div>
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

  .title {
    text-align: center;
    margin-bottom: 20px;

    h3 {
      margin-bottom: 0;
    }

    p {
      color: $light-txt-color;
      margin-top: 0px;
    }
  }

  .image-wrapper {
    border: 2px solid $alt-brand-color;
    padding: 5px;

    .inner {
      min-height: 250px;
    }
  }

  .info {
    padding: 10px 30px 20px 30px;

    p {
      color: $txt-color;
    }

    .breakdown {
      text-align: left;
      p { margin: 7.5px 0; }
      p.type { margin: 15px 0 10px 0; }
    }

    .group {
      text-transform: uppercase;
      font-weight: bold;
      color: $header-color;
      font-size: 13px;
      margin-right: 5px;
      display: inline-block;
      min-width: 52px;
    }
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
  import months from 'common/months';
  import projects from 'common/projects';
  import scrollTo from 'common/scrollTo';

  import Card from '../Card.vue';
  import FilterTooltip from './FilterTooltip.vue';
  import FilteredBy from './FilteredBy.vue';
  import ImageSlider from '../../ImageSlider.vue';
  import Pagination from '../../Pagination.vue';

  export default {
    data() {
      return {
        activeProjects: []
      };
    },
    computed: {
      typeFilter() { return this.$store.state.projects.filter.type; },
      technologyFilter() { return this.$store.state.projects.filter.technology; },
      projects() {
        return projects.filter((p) =>
          (!this.typeFilter || p.type.some((t) => t === this.typeFilter))
          && (!this.technologyFilter
            || p.technologies.some((t) => t === this.technologyFilter)));
      }
    },
    methods: {
      getImages(project) {
        const images = [];
        if (project.images && project.images.total) {
          const extension = project.images.extension || 'jpg';
          for (let i = 1; i <= project.images.total; i++) { // eslint-disable-line no-plusplus
            images.push(`assets/images/projects/${project.images.folder}/${i}.${extension}`);
          }
        }
        return images;
      },
      setActive(items) {
        this.activeProjects = items;
        if (this.$el) {
          scrollTo(this.$el);
        }
      },
      formatPeriod(period) {
        const start = `${months[period.start.getMonth()]} ${period.start.getFullYear()}`;
        if (!period.end) {
          return `${start} - Present`;
        }
        return `${start} - ${months[period.end.getMonth()]} ${period.end.getFullYear()}`;
      }
    },
    components: {
      Card,
      FilterTooltip,
      FilteredBy,
      ImageSlider,
      Pagination
    }
  };
</script>
