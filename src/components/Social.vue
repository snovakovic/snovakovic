<template>
    <ul class="social list-inline">
      <li><a href="#">t</a></li>
      <li><a href="#">g</a></li>
      <li><a href="#">l</a></li>
      <li><a href="#">g</a></li>
    </ul>
</template>


<style lang="scss" scoped>
  @import '~styles/constants.scss';

  .social {
    a {
      background: $bg-color;
      width: 36px;
      height: 36px;
      display: inline-block;
      border-radius: 50%;
      color: white;
      text-align: center;
      font-size: 20px;
      padding-top: 8px;

      &:hover {
        background: $dark-bg-color;
      }
    }
  }
</style>
