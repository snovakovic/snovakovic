<template>
  <header class="cf">
    <div class="content">
        <img class="profile-img" src="/assets/images/profile.jpg" :alt="name"></img>
        <div class="profile-content">
          <h1 class="name">{{ name }}</h1>
          <h2 class="desc">{{ description }}</h2>
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
    text-align: center;
    padding: 30px 0;
    background: $light-bg-color;
    border-top: 10px solid $dark-brand-color;
  }

  .profile-img {
    width: 150px;
    border-radius: 50%;
  }

  .name {
    font-size: 34px;
    margin-bottom: 0;
    margin-top: 15px;
  }

  .desc {
    font-weight: normal;
    color: $txt-color;
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 15px;
  }

  .social-wrapper {
    margin-top: 40px;
  }

  @include md-screen {
    header {
      text-align: left;
    }

    .profile-img {
      margin-right: 30px;
    }

    .social-wrapper {
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
    data() {
      return {
        name: 'Stefan Novakovic',
        description: 'Senior Software Developer'
      };
    },
    components: {
      Social
    }
  };
</script>
