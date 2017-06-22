<template>
  <card class="info">
    <ul class="list-unstyled">
      <li>
        <span class="icon"><i class="fa fa-map-marker" /></span>
        <a :href="$me.location.link">{{ $me.location.name }}</a>
      </li>
      <li>
        <span class="icon"><i class="fa fa-envelope-o"/></span>
        </i><a :href="mailto">{{ $me.email }}</a>
      </li>
    </ul>
    <div class="resume"> Download Resume</div>
  </card>
</template>


<style lang="scss" scoped>
  @import '~styles/constants.scss';

  .info {
    padding-bottom: 70px;
    position: relative;

    .icon {
      display: inline-block;
      width: 35px;
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
      background: $dark-brand-color;
      letter-spacing: 2px;
    }
  }
</style>


<script>
  import Card from './Card.vue';

  export default {
    computed: {
      mailto() { return `mailto:${this.$me.mail}`; }
    },
    components: {
      Card
    }
  };
</script>
