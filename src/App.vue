<template>
  <div id="app">
    <page-header class="header"></page-header>
    <div class="content">
      <div v-if="isDesktop" class="cf">
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
          <open-source></open-source>
          <books></books>
        </aside>
      </div>
      <div v-else>
        <info></info>
        <about-me></about-me>
        <projects-summary></projects-summary>
        <projects></projects>
        <work-history></work-history>
        <skills></skills>
        <education></education>
        <testimonials></testimonials>
        <open-source></open-source>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  @import '~styles/mixins.scss';

  $header-height: 187px;
  $content-top-padding: 40px;

  .content {
    padding-top: $content-top-padding;
  }

  @include md-screen {
    .content {
      padding-top: $content-top-padding + $header-height;
    }

    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9999;
    }
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
  import OpenSource from './components/cards/OpenSource.vue';
  import Books from './components/cards/Books.vue';

  export default {
    computed: {
      isDesktop() { return this.$store.state.isDesktop; }
    },
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
      OpenSource,
      Books
    }
  };
</script>
