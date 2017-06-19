<template>
  <header class="cf">
    <div class="content">
      <img class="profile-img img-responsive" src="https://randomuser.me/api/portraits/women/93.jpg" alt="Stefan Novakovic" />
      <div class="profile-content">
        <h1 class="name">{{ name }}</h1>
        <h2 class="desc">{{ desc }}</h2>
        <ul class="social list-inline">
          <li><a href="#">t</a></li>
          <li><a href="#">g</a></li>
          <li><a href="#">l</a></li>
          <li><a href="#">g</a></li>
        </ul>
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
  export default {
    data() {
      return {
        name: 'Stefan Novakovic',
        desc: 'Senior Software Developer'
      }
    }
  }
</script>

