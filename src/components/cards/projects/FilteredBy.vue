<template>
  <section class="filtered-by">
    <span>Filtered By:</span>
    <span v-if="typeFilter" class="tag"
      title="Click to remove filter"
      @click="clearTypeFilter" >
      <i class="fa fa-times"></i>{{ typeFilter }}
    </span>
    <span v-if="technologyFilter" class="tag"
      title="Click to remove filter"
      @click="clearTechnologyFilter" >
      <i class="fa fa-times" ></i>{{ technologyFilter }}
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
        margin-right: 2px;
        top: -2px;
        font-size: 12px;
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
