<template>
  <card class="skills">
    <h2>Skills</h2>
    <div class="item" v-for="skill in skills" :key="skill.name">
      <h4 class="level-title">{{ skill.name }}</h4>
      <div class="level-bar">
        <div class="level-bar-inner" :style="getWidth(skill)">
        </div>
      </div>
    </div>
  </card>
</template>


<style lang="scss" scoped>
  @import '~styles/constants';

  .level-title {
    margin-bottom: 5px;
  }

  .level-bar {
    background: $bg-color;
    width: 100%;
    height: 15px;

    .level-bar-inner {
      height: 100%;
      background: $dark-brand-color;
    }
  }
</style>


<script>
  import Technology from 'common/Technology';

  import Card from './Card.vue';


  const skills = [];
  function add(name, proficiency, featured = false) {
    skills.push({ name, proficiency, featured });
  }

  add(Technology.JAVASCRIPT, 90, true);
  add(Technology.ES6, 90);
  add(Technology.NODE, 85, true);
  add(Technology.VUE, 85, true);
  add(Technology.HAPI, 80, true);
  add(Technology.JQUERY, 80);
  add(Technology.CSHARP, 75, true);
  add(Technology.Angular1, 75);
  add(Technology.MSSQL, 70, true);
  add(Technology.MYSQL, 70);
  add(Technology.POSTGRESQL, 70);
  add(Technology.MONGO, 65, true);
  add(Technology.REDIS, 65, true);
  add(Technology.ZEROMQ, 60);
  add(Technology.ELASTICSEARCH, 55);
  add(Technology.EXPRESS, 55);
  add(Technology.ENTITYFRAMEWORK, 50);
  add(Technology.PHP, 35);


  export default {
    computed: {
      skills() {
        return skills.filter((s) => s.featured);
      }
    },
    methods: {
      getWidth(skill) {
        return `width: ${skill.proficiency}%;`;
      }
    },
    components: {
      Card
    }
  };
</script>
