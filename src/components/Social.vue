<template>
  <section class="cf">
    <a :href="profile.linkedin"
      class="linkedin" :title="getTitle('linkedin')">
      <i class="fa fa-linkedin"></i>
    </a>
    <a :href="profile.github"
      class="github" :title="getTitle('github')">
      <i class="fa fa-github"></i>
    </a>
    <a :href="profile.stackoverflow"
      class="stack-overflow" :title="getTitle('stack-overflow')">
      <i class="fa fa-stack-overflow"></i>
    </a>
  </section>
</template>


<style lang="scss" scoped>
  @import '~styles/constants.scss';
  @import '~styles/mixins.scss';

  $size: 45px;

  a {
    background: $bg-color;
    width: $size;
    height: $size;
    line-height: $size;
    display: block;
    float: left;
    border-radius: 50%;
    color: white;
    text-align: center;
    font-size: 24px;
    transition: all .3s;
    border: 1px solid $dark-color;

    &:not(:last-child) {
      margin-right: 20px;
    }

    &:hover {
      border-radius: 0%;
    }
  }

  .linkedin {
    background: #0077B5;
  }

  .github {
    background: #171515;
  }

  .stack-overflow {
    background: #F48020;
  }

  @include md-screen {
    a:not(:last-child) {
      margin-right: 15px;
    }
  }
</style>


<script>
  export default {
    computed: {
      profile() { return this.$store.state.profile; }
    },
    methods: {
      getTitle(name) {
        return `Go to ${name} profile`;
      }
    }
  };
</script>
