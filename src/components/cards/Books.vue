<template>
  <card class="books">
    <h2>
      <i class="fa fa-book"></i>
      Favorite coding Books
    </h2>
    <ul>
      <li v-for="book in $me.books" :key="book.name">
        <a class="dark" :href="book.link">
          {{ book.title }} by {{ book.author }}
        </a>
      </li>
    </ul>
  </card>
</template>


<style lang="scss" scoped>
  .fa-book {
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
