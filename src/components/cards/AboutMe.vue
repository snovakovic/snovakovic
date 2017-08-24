<template>
  <card class="about-me">
    <h2>About me</h2>
    <blockquote class="tldr">
      <b>TL;DR - </b> JavaScript enthusiast that writes clean, readable and modular code.
    </blockquote>
    <p></p>
    <p>
      I'm a professional software developer with a Master’s degree in Computer Science and
      more than {{ yearOfExperiance }} years of industry experience.
      Agile, direct communication with internal stakeholders, external clients, code reviews and
      unit testing. I have in-depth experience across the entire development cycle.
    </p>
    <p>
      I'm <b>passionate</b> about <b>Full Stack JavaScript</b> development.
      Beside JavaScript I have lot of experience in C# (.NET) but in recent years that part has been neglected in favor of JavaScript.
    </p>
    <p>
      <b>Interesting in seing my work in action?</b> Take a peek at my <a href="https://github.com/snovakovic">github</a>
      account, my open source projects on <a href="https://www.npmjs.com/~snovakovic">npm</a>
      or at any of my contributions to Open Source projects which become my passion in recent time.
      I belive it's time to give back to community after all these years of using greate open source projects in every day development.
    </p>
  </card>
</template>


<style lang="scss" scoped>
  @import '~styles/constants.scss';

  .tldr {
    font-style: normal;
    border-color: $brand-color;
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
