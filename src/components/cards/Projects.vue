<template>
  <card class="projects">
    <h2>Projects</h2>
    <div class="item" v-for="project in projects" :key="project.title">
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
      </div>
    </div>
  </card>
</template>


<style lang="scss" scoped>
  @import '~styles/constants';

  .item {
    margin-bottom: 30px;
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
    padding-left: 20px;

    p {
      margin-top: 5px;
    }
  }
</style>


<script>
  import projects from 'common/projects';

  import Card from './Card.vue';

  export default {
    computed: {
      projects() {
        return projects.filter((p) => p.featured).slice(0, 3);
      }
    },
    methods: {
      imagePath(project) {
        return `assets/images/projects/${project.id}/1.png`;
      }
    },
    components: {
      Card
    }
  };
</script>
