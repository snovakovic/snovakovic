<template>
  <div id="app">
    <page-header></page-header>
    <div class="content">
      <div class="cf">
        <main>
          <about-me></about-me>
          <projects></projects>
          <work-history></work-history>
        </main>
        <aside>
          <info></info>
          <projects-summary></projects-summary>
          <skills></skills>
          <education></education>
          <testimonials></testimonials>
          <music></music>
          <books></books>
        </aside>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  @import '~styles/mixins.scss';

  .content {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @include desktop-screen {
    main, aside {
      float: left;
    }
    main {
      width: 70%;
      & > * {
        margin-right: 20px;
      }
    }
    aside { width: 30%; }
  }
</style>


<script>
  import PageHeader from './components/Header.vue';

  import AboutMe from './components/cards/AboutMe.vue';
  import Projects from './components/cards/projects/index.vue';
  import ProjectsSummary from './components/cards/ProjectsSummary.vue';
  import WorkHistory from './components/cards/WorkHistory.vue';

  import Info from './components/cards/Info.vue';
  import Skills from './components/cards/Skills.vue';
  import Education from './components/cards/Education.vue';
  import Testimonials from './components/cards/Testimonials.vue';
  import Music from './components/cards/Music.vue';
  import Books from './components/cards/Books.vue';

  export default {
    components: {
      PageHeader,
      AboutMe,
      ProjectsSummary,
      Projects,
      WorkHistory,
      Info,
      Skills,
      Education,
      Testimonials,
      Music,
      Books
    }
  };
</script>
