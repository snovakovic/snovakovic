<template>
  <header class="cf">
    <img class="profile-image img-responsive pull-left" src="assets/images/logo.png" alt="Stefan Novakovic" />
    <div class="profile-content pull-left">
        <h1 class="name">Stefan Novakovic</h1>
        <h2 class="desc">Senior Software Developer</h2>
        <ul class="social list-inline">
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa fa-github-alt"></i></a></li>
            <li class="last-item"><a href="#"><i class="fa fa-hacker-news"></i></a></li>
        </ul>
    </div>
  </header>
</template>


<style lang="scss" scoped>
  @import '~styles/constants.scss';

  header {
    padding: 30px 0;
    background: $light-bg-color;
    border-top: 10px solid $brand-color;
  }

  .profile-image {
    margin-right: 30px;
  }

  .profile-content {
    .name {
      font-size: 38px;
      margin-bottom: 5px;
      margin-top: 30px;
    }

    .desc {
      font-family: "Lato", arial, sans-serif;
      font-weight: 400;
      font-size: 24px;
      margin-top: 0;
      margin-bottom: 15px;
    }

    .social {
      a {
        background: lighten($bg-color, 20%);
        width: 36px;
        height: 36px;
        display: inline-block;
        border-radius: 50%;
        color: #fff;
        text-align: center;

        &:hover {
          background: $bg-color;
        }

        .fa {
          font-size: 20px;
          padding-top: 8px;
        }
      }
    }
  }
</style>
