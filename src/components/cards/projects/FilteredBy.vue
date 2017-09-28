<template>
  <section class="filtered-by">
    <span>Filtered By:</span>
    <span v-if="typeFilter" class="tag"
      title="Click to remove filter"
      @click="clearTypeFilter" >
      {{ typeFilter }}<i class="fa fa-times"></i>
    </span>
    <span v-if="technologyFilter" class="tag"
      title="Click to remove filter"
      @click="clearTechnologyFilter" >
      {{ technologyFilter }}<i class="fa fa-times" ></i>
    </span>
  </section>
</template>


<style lang="scss">
  @import '~styles/constants';

  .filtered-by {
    position: relative;
    text-align: center;
    text-transform: uppercase;
    font-size: 12px;
    margin-top: 15px;
    font-weight: bold;
    color: $light-txt-color;

    .tag {
      cursor: pointer;
      font-size: 10px;
      padding: 5px 10px;
      margin-left: 7px;

      i {
        top: -3px;
        left: 6px;
        font-size: 10px;
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
