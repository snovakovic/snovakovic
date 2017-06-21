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
    transition: background-color .5s;

    &:hover {
      background-color: $light-bg-color;
    }
  }
</style>
