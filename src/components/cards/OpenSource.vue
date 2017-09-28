<template>
  <card class="open-source">
    <h2><i class="fa fa-code"></i>Open Source</h2>
    <h4>Own projects</h4>
    <ul>
      <li v-for="project in ownProjects" :key="project.link">
        <a class="" :href="project.link">{{ project.name }}</a> - {{ project.description }}
      </li>
    </ul>
    <h4 class="contribution">Contributions</h4>
    <ul>
      <li v-for="project in contributions" :key="project.link">
        <a class="" :href="project.link">{{ project.name }}</a> - {{ project.description }}
      </li>
    </ul>
  </card>
</template>


<style lang="scss" scoped>
  ul {
    margin-top: 10px;

    li {
      line-height: 21px;

      &:not(:last-child) {
        margin-bottom: 7.5px;
      }
    }
  }

  h4 {
    margin-bottom: 0;

    &.contribution {
      margin-top: 30px;
    }
  }
</style>


<script>
  import Card from './Card.vue';

  const ownProjects = [{
    name: 'js-flock',
    description: 'Collection of neat modular utilities',
    link: 'https://www.npmjs.com/package/js-flock'
  }, {
    name: 'wiggle',
    description: 'Media queries change listener',
    link: 'https://www.npmjs.com/package/wiggle.js'
  }, {
    name: 'zmq-xpub-xsub ',
    description: 'Central hub for ZeroMQ',
    link: 'https://www.npmjs.com/package/zmq-xpub-xsub'
  }, {
    name: 'fast-sort',
    description: 'Blazing fast array sorting',
    link: 'https://www.npmjs.com/package/fast-sort'
  }];

  const contributions = [{
    name: 'vuejs-datepicker',
    description: 'A simple Vue.js datepicker component',
    link: 'https://github.com/charliekassel/vuejs-datepicker'
  }, {
    name: 'v-click-outside',
    description: 'Vue directive to react on clicks outside an element',
    link: 'https://github.com/snovakovic/v-click-outside'
  }, {
    name: 'vue-easy-slider',
    description: 'Slider Component of Vue.js',
    link: 'https://github.com/shhdgit/vue-easy-slider'
  }];

  export default {
    data() {
      return { ownProjects, contributions };
    },
    components: {
      Card
    }
  };
</script>
