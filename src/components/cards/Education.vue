<template>
  <card class="education">
    <h2><i class="fa fa-graduation-cap"></i> Education</h2>
    <div class="item" v-for="study in education" :key="study.title">
      <h4 class="title">{{ study.title }}</h4>
      <p class="institution">
        <a class="dark" :href="study.institution.link">{{ study.institution.name }}</a>
        <span class="year">{{ study.period }}</span>
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

  .fa-graduation-cap {
    margin-right: 2px;
  }

  .institution {
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

  const FESB = {
    name: 'Technical University of Split',
    link: 'https://eng.fesb.unist.hr/'
  };

  export default {
    data() {
      return {
        education: [{
          title: 'MSc Computer Science',
          period: '2009-2011',
          institution: FESB
        }, {
          title: 'BSc Computer Science',
          period: '2006-2009',
          institution: FESB
        }, {
          title: 'Computer Tehnician for Engineering',
          period: '2002-2006',
          institution: {
            name: 'Technical High School of Split',
            link: 'http://ss-tehnicka-st.skole.hr/'
          }
        }]
      };
    },
    components: {
      Card
    }
  };
</script>
