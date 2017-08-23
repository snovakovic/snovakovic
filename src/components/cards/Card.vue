<template>
  <section class="card">
    <slot></slot>
  </section>
</template>


<style lang="scss" scoped>
  @import '~styles/constants.scss';

  .card {
    background-color: white;
    padding: 30px 25px;
    margin-bottom: 30px;
    box-shadow: -2px 3px 5px $dark-bg-color;
    border: 1px solid $dark-bg-color;
  }

  h2 > i {
    margin-right: 8px;
  }
</style>
