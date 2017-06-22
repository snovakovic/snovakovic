<template>
  <card class="education">
    <h2><i class="fa fa-graduation-cap"></i> Education</h2>
    <div class="item" v-for="education in $me.education" :key="education.title">
      <h4 class="title">{{ education.title }}</h4>
      <p class="university">
        <a :href="education.university.link">{{ education.university.name }}</a>
        <span class="year">({{ education.period }})</span>
      </p>
    </div>
  </card>
</template>


<style lang="scss" scoped>
  @import '~styles/constants';

  .item {
    margin-bottom: 15px;
  }

  .title {
    margin: 0;
  }

  .university {
    font-size: 13px;
    font-weight: bold;
    margin-top: 5px;
    padding-left: 15px;

    a {
      color: $txt-color;
    }

    .year {
      color: $light-txt-color;
      font-weight: lighter;
      float: right;
    }
  }
</style>


<script>
  import Card from './Card.vue';

  export default {
    components: {
      Card
    }
  };
</script>
