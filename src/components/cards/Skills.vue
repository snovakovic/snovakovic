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
  import Card from './Card.vue';

  export default {
    computed: {
      skills() {
        return this.$me.skills.filter((s) => s.featured);
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
