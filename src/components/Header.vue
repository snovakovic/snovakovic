<template>
  <header class="cf">
    <div class="content">
        <img class="profile-img" :src="$me.image" :alt="$me.fullName" />
        <div class="profile-content">
          <h1 class="name">{{ $me.fullName }}</h1>
          <h2 class="desc">{{ $me.description }}</h2>
        </div>
        <div class="social"><social></social></div>
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

  .social { margin-top: 20px; }

  @include md-screen {
    header { text-align: left; }
    .profile-img { margin-right: 30px; }
    .social { float: right; }
    .name { margin-top: 30px; }

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
