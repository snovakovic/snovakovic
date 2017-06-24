<template>
  <card class="projects">
    <h2>Projects</h2>
    <div class="item table fixed" v-for="project in projects" :key="project.id">
      <div class="table-cell image-wrapper">
        <div class="inner">
          <img :src="imagePath(project)" v-if="project.noImages"
            class="img-responsive" :alt="project.id" >
        </div>
      </div>
      <div class="table-cell content">
        <h3>{{ project.id }}</h3>
        <p v-html="project.description"></p>
      </div>
    </div>
  </card>
</template>


<style lang="scss" scoped>
  @import '~styles/constants';

  .item {
    margin-bottom: 20px;
  }

  .image-wrapper {
    width: 200px;

    .inner {
      min-height: 150px;
      background: $dark-bg-color;
    }
  }

  .content {
    padding-left: 20px;

    h3 {
      margin: 0;
    }

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
        return projects.filter((p) => p.featured);
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
