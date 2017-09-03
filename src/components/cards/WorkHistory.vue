<template>
  <card class="work-history">
    <h2>Work History</h2>
    <div class="item">
      <h3 class="title">
        Sr. Software Developer <i class="fa fa-circle"></i>
        <span class="company"><a href="https://extensionengine.com/">ExtensionEngine</a></span>
        <span class="year">Aug 2014 - Present</span>
      </h3>
      <p>
        Back to roots at ExtensionEngine but this time in new role as Senior Software Developer.
        Now I'm no longer the one who is learning I'm the one who is passing knowlage,
        expiriance and mentoring to junior team members.Swithced my focus from
        Full Stack C#(.NET) development to Full Stack JavaScript development which become
        my main focus and passion.Worked on multiple interesting international projects with main
        focus on projects for Ellevation Education,QSF and the current project for University of NotreDame. Take a look at projects sections for more information on them.
      </p>
    </div>
    <div class="item">
      <h3 class="title">
        Software Developer <i class="fa fa-circle"></i>
        <span class="company"><a href="http://www.king-ict.hr/">King ICT</a></span>
        <span class="year">Jan 2014 - Aug 2014</span>
      </h3>
      <p>
        Relocated to Zagreb to work for one of bigest Croatian IT companies.
        They main focuse are big projects for goverment.
        My whole time there I was working on new business application for Zagreb Municipal Transit System (ZET).
      </p>
    </div>
    <div class="item">
      <h3 class="title">
        Jr. Software Developer <i class="fa fa-circle"></i>
        <span class="company"><a href="https://extensionengine.com/">ExtensionEngine</a></span>
        <span class="year">Sept 2011 – Jan 2014</span>
      </h3>
      <p>
        Fresh from collage thrown in fire of large international projects,
        learned a lot in first 2 years of working for ExtensionEngine.
        Mostly worked with JavaScript and C# programming languages.
        Most important projects form this period are Frontier Strategy Group and PHT.
        Take a look at projects section for more information on those projects.
      </p>
    </div>
  </card>
</template>


<style lang="scss" scoped>
  @import '~styles/constants';

  .title {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: 5px;
    line-height: 1.5;

    .fa-circle {
      font-size: 6px;
      top: -2px;
    }

    .company a,
    .year {
      color: $light-txt-color;
      font-weight: normal;
      font-size: 15px;
    }

    .year {
      float: right;
      margin-top: 1px;
    }
  }
</style>


<script>
  import Card from './Card.vue';

  export default {
    components: {
      Card
    }
  };
</script>
