<template>
  <card class="projects cf">
    <h2>Projects Summary</h2>

    <div class="item">
      <span class="number">{{ total }}</span> Total
    </div>
    <div class="item">
      <span class="number">{{ byType(type.OPENSOURCE) }}</span> Open Source
    </div>
    <div class="item">
      <span class="number">{{ byType(type.FREELANCE) }}</span> Freelance
    </div>
    <div class="item">
      <span class="number">{{ byType(type.TEAM) }}</span> Team
    </div>
    <div class="item">
      <span class="number">{{ byType(type.LARGE) }}</span> Large
    </div>
    <div class="item">
      <span class="number">{{ byType(type.FULLSTACK) }}</span> Full Stack
    </div>
  </card>
</template>


<style lang="scss" scoped>
  @import '~styles/constants';

  .item {
    text-transform: uppercase;
    font-weight: bold;
    float: left;
    width: 50%;
    margin: 10px 0;
    font-size: 14px;
    color: $light-txt-color;

    .number {
      font-size: 32px;
      margin-right: 5px;
    }
  }
</style>


<script>
  import projects from 'common/projects';
  import type from 'common/projectType';

  import Card from './Card.vue';


  export default {
    data() {
      return { type };
    },
    computed: {
      total() { return projects.length; }
    },
    methods: {
      byType(projectType) {
        return projects.filter((p) =>
          p.type.some((t) => t === projectType)).length;
      }
    },
    components: {
      Card
    }
  };
</script>
