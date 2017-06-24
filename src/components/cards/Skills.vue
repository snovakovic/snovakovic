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
  import Skill from 'common/Skill';

  import Card from './Card.vue';


  const skills = [];
  function add(name, proficiency, featured = false) {
    skills.push({ name, proficiency, featured });
  }

  add(Skill.JAVASCRIPT, 90, true);
  add(Skill.ES6, 90);
  add(Skill.NODE, 85, true);
  add(Skill.VUE, 85, true);
  add(Skill.HAPI, 80, true);
  add(Skill.JQUERY, 80);
  add(Skill.CSHARP, 75, true);
  add(Skill.Angular1, 75);
  add(Skill.MSSQL, 70, true);
  add(Skill.MYSQL, 70);
  add(Skill.POSTGRESQL, 70);
  add(Skill.MONGO, 65, true);
  add(Skill.REDIS, 65, true);
  add(Skill.ZEROMQ, 60);
  add(Skill.ELASTICSEARCH, 55);
  add(Skill.EXPRESS, 55);
  add(Skill.ENTITYFRAMEWORK, 50);
  add(Skill.PHP, 35);


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
