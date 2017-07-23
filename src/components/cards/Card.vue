<template>
  <section class="card">
    <slot></slot>
  </section>
</template>


<style lang="scss" scoped>
  @import '~styles/constants.scss';

  .card {
    background-color: white;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: -2px 3px 5px #e5e5e5
  }

  h2 > i {
    margin-right: 8px;
  }
</style>
