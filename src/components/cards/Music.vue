<template>
  <card class="music">
    <h2>
      <i class="fa fa-music"></i>
      Favorite coding Music
    </h2>
    <ul>
      <li v-for="music in $me.musics" :key="music.name">
        <a class="dark" :href="music.link">
          {{ music.author }}: {{ music.title }}
        </a>
      </li>
    </ul>
  </card>
</template>


<style lang="scss" scoped>
  .fa-music {
    margin-right: 4px;
  }

  li {
    &:not(:last-child) {
      margin-bottom: 12px;
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
