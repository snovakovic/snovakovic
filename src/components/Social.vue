<template>
  <section class="social">
    <a v-for="social in $me.social"
      :href="social.link"
      :title="getTitle($me.social)">
      <i :class="social.icon"></i>
    </a>
  </section>
</template>


<style lang="scss" scoped>
  @import '~styles/constants.scss';
  @import '~styles/mixins.scss';

  $size: 45px;

  .social {
    a {
      background: $bg-color;
      width: $size;
      height: $size;
      line-height: $size;
      display: inline-block;
      border-radius: 50%;
      color: white;
      text-align: center;
      font-size: 24px;

      &:not(:last-child) {
        margin-right: 20px;
      }

      &:hover {
        background: $dark-bg-color;
      }
    }
  }

  @include md-screen {
    .social a:not(:last-child) {
      margin-right: 10px;
    }
  }
</style>


<script>
  export default {
    methods: {
      getTitle(social) {
        return `Go to ${social.name} profile`;
      }
    }
  };
</script>
