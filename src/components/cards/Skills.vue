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
  import technology from 'common/technology';

  import Card from './Card.vue';


  const skills = [];
  function add(name, proficiency, featured = false) {
    skills.push({ name, proficiency, featured });
  }

  add(technology.JAVASCRIPT, 90, true);
  add(technology.ES6, 90);
  add(technology.NODE, 85, true);
  add(technology.VUE, 85, true);
  add(technology.HAPI, 80, true);
  add(technology.JQUERY, 80);
  add(technology.CSHARP, 75, true);
  add(technology.Angular1, 75);
  add(technology.MSSQL, 70, true);
  add(technology.MYSQL, 70);
  add(technology.POSTGRESQL, 70);
  add(technology.MONGO, 65, true);
  add(technology.REDIS, 65, true);
  add(technology.ZEROMQ, 60);
  add(technology.ELASTICSEARCH, 55);
  add(technology.EXPRESS, 55);
  add(technology.ENTITYFRAMEWORK, 50);
  add(technology.PHP, 35);


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
