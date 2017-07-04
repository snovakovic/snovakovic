<template>
  <card class="books">
    <h2><i class="fa fa-book"></i>Favorite coding Books</h2>
    <ul>
      <li v-for="book in books" :key="book.name">
        <a class="dark" :href="book.link">{{ book.title }} by {{ book.author }}</a>
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


  const books = [{
    author: 'Kyle Simpson',
    title: 'You Don\'t Know JS (series)',
    link: 'https://github.com/getify/You-Dont-Know-JS'
  }, {
    author: 'Steve Mcconnell',
    title: 'Code Complete',
    link: 'http://www.stevemcconnell.com/cc.htm'
  }, {
    author: 'Robert C. Martin',
    title: 'Clean Code',
    link: 'http://www.goodreads.com/book/show/3735293-clean-code'
  }];


  export default {
    data() {
      return { books };
    },
    components: {
      Card
    }
  };
</script>
