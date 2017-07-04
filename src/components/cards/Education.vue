<template>
  <card class="education">
    <h2><i class="fa fa-graduation-cap"></i> Education</h2>
    <div class="item" v-for="study in education" :key="study.title">
      <h4 class="title">{{ study.title }}</h4>
      <p class="university">
        <a class="dark" :href="study.university.link">{{ study.university.name }}</a>
        <span class="year">({{ study.period }})</span>
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

    .year {
      color: $light-txt-color;
      font-weight: lighter;
      float: right;
    }
  }
</style>


<script>
  import Card from './Card.vue';

  const university = {
    name: 'Technical University of Split',
    link: 'https://eng.fesb.unist.hr/'
  };

  const education = [{
    title: 'MSc Computer Science',
    period: '2009-2011',
    university
  }, {
    title: 'BSc Computer Science',
    period: '2006-2009',
    university
  }];


  export default {
    data() {
      return { education };
    },
    components: {
      Card
    }
  };
</script>
