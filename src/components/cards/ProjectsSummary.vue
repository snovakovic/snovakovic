<template>
  <card class="projects cf">
    <h2><i class="fa fa-bar-chart"></i>Projects Summary</h2>
    <div class="item"
      :class="{ active: !filter.type }"
      @click="onTypeSelect(undefined)">
      <span class="number">{{ total }}</span> Total
    </div>
    <div class="item"
      :class="{ active: type === filter.type }"
      v-for="type in types" :key="type"
      @click="onTypeSelect(type)">
      <span class="number">{{ countByType(type) }}</span>{{ type }}
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
    cursor: pointer;

    .number {
      font-size: 32px;
      margin-right: 5px;
    }

    &.active {
      color: $alt-brand-color;
    }
  }
</style>


<script>
  import projects from 'common/projects';
  import projectType from 'common/projectType';

  import Card from './Card.vue';

  export default {
    data() {
      return {
        types: [projectType.FEATURED, projectType.OPENSOURCE,
          projectType.FREELANCE, projectType.TEAM, projectType.FULLSTACK]
      };
    },
    computed: {
      total() { return projects.length; },
      filter() { return this.$store.state.projects.filter; }
    },
    methods: {
      countByType(type) {
        return projects.filter((p) => p.type.some((t) => t === type)).length;
      },
      onTypeSelect(type) {
        if (type === this.filter.type) {
          type = undefined; // eslint-disable-line no-param-reassign
        }
        this.$store.commit('setTypeFilter', type);
      }
    },
    components: {
      Card
    }
  };
</script>
