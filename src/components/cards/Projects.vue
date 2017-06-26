<template>
  <card class="projects">
    <h2>Projects</h2>
    <div class="item" v-for="project in activeProjects" :key="project.title">
      <div class="title">
        <h3>{{ project.title }}</h3>
        <p>{{ project.summary }}</p>
      </div>
      <div class="image-wrapper">
        <div class="inner">
          <img :src="imagePath(project)" v-if="project.noImages"
            class="img-responsive" :alt="project.title" >
        </div>
      </div>
      <div class="info">
        <p v-html="project.description"></p>
        <div class="breakdown">
          <p>
            <span class="group">Period:</span>
            <span>{{ project.period }}</span>
          </p>
          <p v-if="project.client">
            <span class="group">Client:</span>
            <span>
              <a href="project.client.link">{{ project.client.name }}</a>
            </span>
          </p>
          <p v-if="project.duties">
            <span class="group">Duties:</span>
            <span>{{ project.duties }}</span>
          </p>
          <p>
            <span class="group">Type:</span>
            <span class="tag" v-for="type in project.type" :key="type">
              {{ type }}
            </span>
          </p>
          <p>
            <span class="group">Technologies:</span>
            <span class="tag"
              v-for="technology in project.technologies" :key="technology">
              {{ technology }}
            </span>
          </p>
        </div>
      </div>
    </div>
    <pagination :items="projects" @change="setActive"></pagination>
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
    .inner {
      min-height: 250px;
      background: $dark-bg-color;
    }
  }

  .info {
    padding: 10px 30px 0 30px;

    .breakdown {
      p {
        margin: 5px 0;
      }
    }

    .group {
      text-transform: uppercase;
      color: $header-color;
      font-weight: bold;
      font-size: 13px;
      margin-right: 5px;
      display: inline-block;
    }

    .tag {
      display: inline-block;
      margin: 5px;
      background: $bg-color;
      padding: 2px 10px;
      font-size: 12px;
      border-radius: 5px;
    }
  }
</style>


<script>
  import projects from 'common/projects';

  import Card from './Card.vue';
  import Pagination from '../Pagination.vue';

  export default {
    data() {
      return {
        activeProjects: []
      };
    },
    computed: {
      typeFilter() {
        return this.$store.state.projects.filter.type;
      },
      technologyFilter() {
        return this.$store.state.projects.filter.technology;
      },
      projects() {
        return projects.filter((p) =>
          (!this.typeFilter || p.type.some((t) => t === this.typeFilter))
          && (!this.technologyFilter
            || p.technologies.some((t) => t === this.technologyFilter)));
      }
    },
    methods: {
      imagePath(project) {
        return `assets/images/projects/${project.id}/1.png`;
      },
      setActive(items) {
        this.activeProjects = items;
      }
    },
    components: {
      Card,
      Pagination
    }
  };
</script>
