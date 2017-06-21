<template>
  <header class="cf">
    <div class="content">
      <img class="profile-img img-responsive" src="assets/images/logo.png" alt="Stefan Novakovic" />
      <div class="profile-content">
        <h1 class="name">{{ name }}</h1>
        <h2 class="desc">{{ desc }}</h2>
      </div>
      <div class="social pull-right">
        <social></social>
      </div>
    </div>
  </header>
</template>


<style lang="scss" scoped>
  @import '~styles/constants.scss';
  @import '~styles/mixins.scss';

  header {
    padding: 30px 0;
    background: $light-bg-color;
    border-top: 10px solid $alt-brand-color;
  }

  .profile-img {
    max-width: 150px;
    border-radius: 50%;
    transition: filter 2s;

    &:hover {
      filter: grayscale(50%);
    }
  }

  .name {
    color: #545e69;
    font-size: 34px;
    margin-bottom: 5px;
    margin-top: 30px;
  }

  .desc {
    font-weight: 400;
    font-size: 24px;
    margin-top: 0;
    margin-bottom: 15px;
  }

  .social {
    margin-top: 20px;
  }

  @include md-screen {
    .profile-img {
      margin-right: 30px;
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
        desc: 'Senior Software Developer'
      };
    },
    components: {
      Social
    }
  };
</script>

