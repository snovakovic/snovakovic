<template>
    <ul class="social list-inline">
      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
      <li><a href="#"><i class="fa fa-github"></i></a></li>
      <li><a href="#"><i class="fa fa-stack-overflow"></i></a></li>
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
