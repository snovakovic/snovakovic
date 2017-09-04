<template>
  <card class="about-me">
    <h2>About me</h2>
    <blockquote class="tldr">
      <b>TL;DR - </b> JavaScript enthusiast that writes clean, readable and modular code.
    </blockquote>
    <p></p>
    <p>
      I'm a professional software developer with a Master’s Degree in Computer Science and
      more than {{ yearOfExperiance }} years of relevant industry experience.
      Agile, direct communication with internal stakeholders, external clients, code reviews and
      unit testing. I have in-depth experience across the entire development cycle.
    </p>
    <p>
      I'm <b>passionate</b> about <b>full stack JavaScript</b> development.
      I also have lot of experience in C# (.NET) but in recent years that part has
      been neglected in favor of JavaScript.
    </p>
    <p>
      <b>Do you want to see my work in action?</b> Take a peek at my
      <a :href="profile.github">github</a> account, my open source projects on
      <a :href="profile.npm">npm</a> or at any of my contributions to open source projects
      which became my passion in recent time. I belive it's time to give back to community after
      all these years of using greate open source projects in every day development.
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
      profile() { return this.$store.state.profile; },
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
