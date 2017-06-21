<template>
  <card class="info">
    <ul class="list-unstyled">
      <li><i class="fa fa-map-marker"></i><a href="#">Split, Croatia</a></li>
      <li><i class="fa fa-envelope-o"></i><a href="#">stefan.novakovich@gmail.com</a></li>
    </ul>
    <div class="resume"> Download Resume</div>
  </card>
</template>


<style lang="scss" scoped>
  @import '~styles/constants.scss';

  .info {
    padding-bottom: 70px;
    position: relative;

    i { margin-right: 15px; }
    li { margin-bottom: 15px; }
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
    padding: 15px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.9em;
    cursor: pointer;

    &:hover {
      background: $darker-brand-color;
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
