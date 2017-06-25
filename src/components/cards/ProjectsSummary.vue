<template>
  <card class="projects cf">
    <h2>Projects Summary</h2>

    <div class="item"
      :class="{ active: !filter.type}"
      @click="filterByType(undefined)">
      <span class="number">{{ total }}</span> Total
    </div>
    <div class="item"
      :class="{ active: type === filter.type}"
      v-for="type in types" :key="type"
      @click="filterByType(type)">
      <span class="number">{{ countByType(type) }}</span> {{ type }}
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
  import projects from 'common/projects';
  import type from 'common/projectType';

  import Card from './Card.vue';


  export default {
    data() {
      return {
        types: [type.FEATURED, type.OPENSOURCE, type.FREELANCE,
          type.TEAM, type.FULLSTACK]
      };
    },
    computed: {
      total() { return projects.length; },
      filter() { return this.$store.state.projects.filter; }
    },
    methods: {
      countByType(projectType) {
        return projects.filter((p) =>
          p.type.some((t) => t === projectType)).length;
      },
      filterByType(typeFilter) {
        this.$store.commit('setTypeFilter', typeFilter);
      }
    },
    components: {
      Card
    }
  };
</script>
