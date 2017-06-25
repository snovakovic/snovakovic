<template>
  <card class="about-me">
    <h2>About me</h2>
    <blockquote class="tldr">
      <b>TL;DR - </b> JavaScript enthusiast that writes clean, readable and modular code.
    </blockquote>
    <p>
      I'm Professional software developer with a Master’s degree in Computer Science and
      more than {{ yearOfExperiance }} years of industry experience working on multiple projects from
      small one person ventures to large 15+ person projects. Agile, direct
      communication with internal stakeholders, external clients, code reviews and
      unit testing. I have in-depth experience across the entire development cycle.
    </p>
    <p>
      I'm <b>passionate</b> about <b>Full Stack JavaScript</b> development.
      Beside JavaScript I have lot of experiance in C# (.NET) but in recent years that part has been negliected in favor of JavaScript.
    </p>
  </card>
</template>


<style lang="scss" scoped>
  .tldr {
    font-style: normal;
  }
</style>


<script>
  import Card from './Card.vue';

  const begeningOfWOrk = new Date(2011, 9);

  export default {
    computed: {
      yearOfExperiance() {
        const DifMs = Date.now() - begeningOfWOrk.getTime();
        return Math.abs((new Date(DifMs)).getUTCFullYear() - 1970);
      }
    },
    components: {
      Card
    }
  };
</script>
