<template>
  <card class="info">
    <ul class="list-unstyled">
      <li>
        <span class="icon"><i class="fa fa-map-marker"></i></span>
        <a :href="location.link">{{ location.name }}</a>
      </li>
      <li>
        <span class="icon"><i class="fa fa-envelope-o"></i></span>
        <a :href="mailto">{{ email }}</a>
      </li>
    </ul>
    <div class="resume" @click="donwloadResume">Download Resume</div>
  </card>
</template>


<style lang="scss" scoped>
  @import '~styles/constants.scss';

  .info {
    padding-bottom: 70px!important;
    position: relative;

    .icon {
      display: inline-block;
      width: 25px;
    }

    .fa-map-marker {
      margin-left: 2px;
    }

    li {
      margin-bottom: 15px;
    }
  }

  .resume {
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: $brand-color;
    transition: background .5s;
    text-align: center;
    padding: 15px 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.9em;
    cursor: pointer;
    transition: all .75s;

    &:hover {
      letter-spacing: 2px;
    }
  }
</style>


<script>
  import Card from './Card.vue';

  export default {
    data() {
      return {
        location: {
          name: 'Split, Croatia',
          link: 'https://goo.gl/maps/kaLwrJyfmGT2'
        }
      };
    },
    computed: {
      profile() { return this.$store.state.profile; },
      email() { return this.$store.state.profile.email; },
      mailto() { return `mailto:${this.email}`; }
    },
    methods: {
      donwloadResume() {
        window.open(this.profile.resume, '_blank');
      }
    },
    components: {
      Card
    }
  };
</script>
