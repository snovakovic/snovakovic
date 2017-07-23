<template>
  <section class="filter-tooltip">
    <div class="tooltip">
      You can apply type or technology filter by cliking on project tag or skills/summary section.
    </div>
    <i class="fa fa-info"></i>
  </section>
</template>


<style lang="scss">
  @import '~styles/constants';

  .filter-tooltip {
    color: $info-color;
    padding: 5px;

    .tooltip {
      opacity: 0;
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
      left: -108px;
      z-index: 1;
      transition: 1s opacity;
    }

    &:hover {
      .tooltip {
        opacity: 1;
      }
    }

    i {
      font-size: 18px;
    }
  }
</style>
