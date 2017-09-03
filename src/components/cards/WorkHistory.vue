<template>
  <card class="work-history">
    <h2>Work History</h2>
    <div class="item" v-for="item in workHistory" :key="item.period">
      <h3 class="title">
        {{ item.position }}
        <i class="fa fa-circle"></i>
        <span class="company">
          <a v-if="item.company.link" :href="item.link">{{ item.company.name }}</a>
          <span v-else>{{ item.company.name }}</span>
        </span>
        <span class="year">{{ item.period }}</span>
      </h3>
      <p v-html="item.summary"></p>
    </div>
  </card>
</template>

<style lang="scss">
  .work-history {
    p { margin-top: 8px; }

    ul {
      margin-top: 0px;

      &.in-content {
        margin-top: 8px;
      }
    }
  }
</style>

<style lang="scss" scoped>
  @import '~styles/constants';

  .title {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 5px;
    line-height: 1.5;

    .fa-circle {
      font-size: 6px;
      top: -2px;
    }

    .company,
    .company a,
    .year {
      color: $light-txt-color;
      font-weight: normal;
      font-size: 15px;
    }

    .year {
      float: right;
      margin-top: 1px;
    }
  }
</style>


<script>
  import WorkHistory from 'data/WorkHistory';
  import Card from './Card.vue';

  export default {
    data() {
      return {
        workHistory: WorkHistory
      };
    },
    components: {
      Card
    }
  };
</script>
