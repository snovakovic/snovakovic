<template>
  <div id="app">
    <page-header></page-header>
    <div class="content">
      <div class="pure-g">
        <main class="pure-u-1 pure-u-md-2-3">
          <about-me></about-me>
          <current-project></current-project>
          <projects></projects>
          <work-history></work-history>
        </main>
        <aside class="pure-u-1 pure-u-md-1-3">
          <short-info></short-info>
          <skills></skills>
          <education></education>
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

  @include md-screen {
    main > * {
      margin-right: 20px;
    }
  }
</style>


<script>
  import PageHeader from './components/Header.vue';

  import AboutMe from './components/AboutMe.vue';
  import CurrentProject from './components/CurrentProject.vue';
  import Projects from './components/Projects.vue';
  import WorkHistory from './components/WorkHistory.vue';

  import ShortInfo from './components/ShortInfo.vue';
  import Skills from './components/Skills.vue';
  import Education from './components/Education.vue';
  import Music from './components/Music.vue';
  import Books from './components/Books.vue';

  export default {
    components: {
      PageHeader,
      AboutMe,
      CurrentProject,
      Projects,
      WorkHistory,
      ShortInfo,
      Skills,
      Education,
      Music,
      Books
    }
  }
</script>
