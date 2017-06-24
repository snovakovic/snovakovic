<template>
  <card class="music">
    <h2>
      <i class="fa fa-music"></i>
      Favorite coding Music
    </h2>
    <ul>
      <li v-for="song in music" :key="song.name">
        <a class="dark" :href="song.link">
          {{ song.author }}: {{ song.title }}
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

  const music = [{
    author: 'Frank Sinatra',
    title: 'Killing me softly',
    link: 'https://www.youtube.com/watch?v=8tbP3f3i03E'
  }, {
    author: 'Elvis Presley',
    title: 'My Way',
    link: 'https://www.youtube.com/watch?v=JRpVBTVlQSI'
  }, {
    author: 'Leonard Cohen',
    title: 'A Thousand Kisses Deep',
    link: 'https://www.youtube.com/watch?v=46cSksKVzzs'
  }, {
    author: 'Tito & Tarantula',
    title: 'When you cry',
    link: 'https://www.youtube.com/watch?v=lMk89hMadms'
  }, {
    author: 'Everlast',
    title: 'Black Coffee',
    link: 'https://www.youtube.com/watch?v=ETKhRG0-bGU'
  }, {
    author: 'Jimmy Sax',
    title: 'No man no cry',
    link: 'https://www.youtube.com/watch?v=89_KXT5ztTU'
  }];

  export default {
    data() {
      return { music };
    },
    components: {
      Card
    }
  };
</script>
