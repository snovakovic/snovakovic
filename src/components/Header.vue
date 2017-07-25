<template>
  <header class="cf">
    <div class="content">
        <img class="profile-img" src="assets/images/profile.jpg" :alt="name"></img>
        <div class="profile-content">
          <h1 class="name">Stefan Novakovic</h1>
          <h2 class="desc">Senior Software Developer</h2>
        </div>
        <div class="social-wrapper">
          <social></social>
        </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
  @import '~styles/constants.scss';
  @import '~styles/mixins.scss';

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    text-align: center;
    padding: 15px 0;
    background: $alt-brand-color;
    border-top: 7px solid $brand-color;

    h1, h2 {
      color: $bg-color;
      text-shadow: 0px 1px 5px $dark-color;
    }
  }

  .profile-img {
    width: 150px;
    border-radius: 50%;
    box-shadow: 0px 1px 5px $dark-color;
  }

  .name {
    font-size: 34px;
    margin-bottom: 0;
    margin-top: 15px;
  }

  .desc {
    font-weight: normal;
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 15px;
  }

  .social-wrapper {
    margin-top: 10px;
    display: inline-block;
  }

  @include md-screen {
    header {
      text-align: left;
    }

    .profile-img {
      margin-right: 30px;
    }

    .social-wrapper {
      margin-top: 40px;
      float: right;
    }

    .name {
      margin-top: 30px;
    }

    .profile-img,
    .profile-content {
      float: left;
    }
  }
</style>


<script>
  import Social from './Social.vue';

  export default {
    components: {
      Social
    }
  };
</script>
