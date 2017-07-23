<template>
  <card class="skills">
    <h2><i class="fa fa-cogs"></i>Skills</h2>
    <div class="item" v-for="skill in skills" :key="skill.technology">
      <h4 class="level-title"
        :class="{ active: skill.technology === filter.technology }"
        @click="onTechnologySelect(skill.technology)">
        {{ skill.technology }}
        <span class="no-projects">
          {{ countByTechnology(skill.technology) }} projects
        </span>
      </h4>
      <div class="level-bar">
        <div class="level-bar-inner" :style="getWidth(skill)"></div>
      </div>
    </div>
  </card>
</template>


<style lang="scss" scoped>
  @import '~styles/constants';

  .level-title {
    margin-bottom: 5px;
    cursor: pointer;

    .no-projects {
      font-size: 11px;
      color: $light-txt-color;
      float: right;
    }

    &.active {
      color: $alt-brand-color;
    }
  }

  .level-bar {
    background: $dark-bg-color;
    width: 100%;
    height: 15px;

    .level-bar-inner {
      height: 100%;
      background: $light-alt-brand-color;
    }
  }
</style>


<script>
  import projects from 'common/projects';
  import tech from 'common/technology';

  import Card from './Card.vue';

  const skills = [];
  function add(technology, proficiency, featured = false) {
    skills.push({ technology, proficiency, featured });
  }

  add(tech.JAVASCRIPT, 90, true);
  add(tech.ES6, 90);
  add(tech.NODE, 85, true);
  add(tech.VUE, 85, true);
  add(tech.HAPI, 80, true);
  add(tech.JQUERY, 80);
  add(tech.CSHARP, 75, true);
  add(tech.Angular1, 75);
  add(tech.MSSQL, 70, true);
  add(tech.MYSQL, 70);
  add(tech.POSTGRESQL, 70);
  add(tech.MONGO, 65, true);
  add(tech.REDIS, 65, true);
  add(tech.ZEROMQ, 60);
  add(tech.ELASTICSEARCH, 55);
  add(tech.EXPRESS, 55);
  add(tech.ENTITYFRAMEWORK, 50);
  add(tech.PHP, 35);


  export default {
    computed: {
      skills() { return skills.filter((s) => s.featured); },
      filter() { return this.$store.state.projects.filter; }
    },
    methods: {
      getWidth(skill) {
        return `width: ${skill.proficiency}%;`;
      },
      countByTechnology(technology) {
        return projects.filter((p) =>
          p.technologies.some((t) => t === technology)).length;
      },
      onTechnologySelect(technology) {
        if (technology === this.filter.technology) {
          technology = undefined; // eslint-disable-line no-param-reassign
        }
        this.$store.commit('setTechnologyFilter', technology);
      }
    },
    components: {
      Card
    }
  };
</script>
