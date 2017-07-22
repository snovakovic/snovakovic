<template>
  <section class="filtered-by">
    <span class="title">Filtered By:</span>
    <span v-if="typeFilter" class="tag">
      <i class="fa fa-times" @click="clearTypeFilter" title="Clear type filter"></i>
      {{ typeFilter }}
    </span>
    <span v-if="technologyFilter" class="tag">
      <i class="fa fa-times" @click="clearTechnologyFilter" title="Clear technology filter"></i>
      {{ technologyFilter }}
    </span>
  </section>
</template>


<style lang="scss">
  @import '~styles/constants';

  .filtered-by {
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    padding: 10px;
    font-weight: bold;
    color: $light-txt-color;

    .title {
      margin-right: 5px;
    }

    .tag {
      font-size: 10px;

      i {
        cursor: pointer;
      }
    }
  }
</style>


<script>
  export default {
    computed: {
      typeFilter() { return this.$store.state.projects.filter.type; },
      technologyFilter() { return this.$store.state.projects.filter.technology; }
    },
    methods: {
      clearTypeFilter() {
        this.$store.commit('setTypeFilter', undefined);
      },
      clearTechnologyFilter() {
        this.$store.commit('setTechnologyFilter', undefined);
      }
    }
  };
</script>
