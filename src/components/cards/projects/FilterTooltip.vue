<template>
  <section class="filter-tooltip">
    <transition name="fade">
      <div class="tooltip" v-if="show">
        Apply type or technology filter by cliking on project tag or on item in skills/summary section.
      </div>
    </transition>
    <i class="fa fa-info" @mouseover="show=true" @mouseout="show=false"></i>
  </section>
</template>


<style lang="scss">
  @import '~styles/constants';

  .filter-tooltip {
    color: $alt-brand-color;

    .tooltip {
      position: absolute;
      width: 240px;
      background-color: #d9edf7;
      border: 1px solid #bce8f1;
      padding: 5px 10px;
      border-radius: 6px;
      font-size: 12px;
      text-align: center;
      line-height: 15px;
      top: -60px;
      left: -215px;
      z-index: 1;
      overflow: hidden;
    }

    i {
      cursor: help;
      font-size: 18px;
      padding: 5px;
    }
  }
</style>


<script>
  export default {
    data() {
      return {
        show: false
      };
    }
  };
</script>
