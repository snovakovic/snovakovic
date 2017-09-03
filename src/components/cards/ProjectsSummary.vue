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
      color: $brand-color;
    }
  }
</style>


<script>
  import Projects from 'data/Projects';
  import ProjectType from 'common/ProjectType';

  import Card from './Card.vue';

  export default {
    data() {
      return {
        types: [ProjectType.FEATURED, ProjectType.OPENSOURCE,
          ProjectType.FREELANCE, ProjectType.TEAM, ProjectType.FULLSTACK]
      };
    },
    computed: {
      total() { return Projects.length; },
      filter() { return this.$store.state.projects.filter; }
    },
    methods: {
      countByType(type) {
        return Projects.filter((p) => p.type.some((t) => t === type)).length;
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
