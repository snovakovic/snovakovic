<template>
  <section>
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
        <p v-if="project.link" class="truncate">
          <span class="group">Link:</span>
          <a :href="project.link" class="">{{ project.link }}</a>
        </p>
        <p>
          <span class="group group-tag">Type:</span>
          <span class="tag" v-for="type in project.type" :key="type"
            :class="{ active: type === typeFilter }"
            title="Click to apply this filter"
            @click="setTypeFilter(type)">{{ type }}</span>
        </p>
        <p>
          <span class="group group-tag">Technologies:</span>
          <span class="tag" v-for="technology in project.technologies" :key="technology"
            :class="{ active: technology === technologyFilter }"
            title="Click to apply this filter"
            @click="setTechnologyFilter(technology)">{{ technology }}</span>
        </p>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
  @import '~styles/constants';
  @import '~styles/mixins';

  .title {
    text-align: center;
    margin-bottom: 20px;

    h3 { margin-bottom: 0; }

    p {
      color: $light-txt-color;
      margin-top: 0px;
    }
  }

  .image-wrapper {
    background: $bg-color;
    padding: 5px;
    border: 6px double $dark-bg-color;
  }

  .info {
    padding: 10px 10px 20px 10px;

    p { color: $txt-color; }
    .tag { cursor: pointer; }

    .breakdown {
      text-align: left;

      p { margin: 7.5px 0; }
      p.type { margin: 15px 0 10px 0; }
      p > a { margin-left: -1px; }
    }

    .group {
      text-transform: uppercase;
      font-weight: bold;
      color: $header-color;
      font-size: 13px;
      margin-right: 5px;
      display: inline-block;
      min-width: 52px;

      &.group-tag {
        min-width: 0;
        margin-right: 10px;
      }
    }
  }

  @include sm-screen {
    .info {
      padding: 10px 30px 20px 30px;
    }
  }
</style>


<script>
  import ImageSlider from '../../ImageSlider.vue';

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
    'Sept', 'Oct', 'Nov', 'Dec'];

  export default {
    props: { project: Object },
    computed: {
      typeFilter() { return this.$store.state.projects.filter.type; },
      technologyFilter() { return this.$store.state.projects.filter.technology; }
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
      formatPeriod(period) {
        const start = `${months[period.start.getMonth()]} ${period.start.getFullYear()}`;
        if (!period.end) {
          return `${start} - Present`;
        }
        return `${start} - ${months[period.end.getMonth()]} ${period.end.getFullYear()}`;
      },
      setTypeFilter(type) {
        this.$store.commit('setTypeFilter', type);
      },
      setTechnologyFilter(technology) {
        this.$store.commit('setTechnologyFilter', technology);
      }
    },
    components: {
      ImageSlider
    }
  };
</script>
