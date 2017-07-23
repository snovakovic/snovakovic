<template>
  <section class="pagination">
    <i class="fa fa-chevron-left unselectable"
      :class="{ inactive: currentPage === 1}" @click="prev"></i>
      <span class="state"> {{ currentPage }} / {{ noPages }} </span>
    <i class="fa fa-chevron-right unselectable"
      :class="{ inactive: currentPage === noPages}" @click="next"></i>
  </section>
</template>


<style lang="scss" scoped>
  @import '~styles/constants';

  .pagination {
    text-align: center;

    i {
      font-size: 22px;
      transition: .5s color;

      &.inactive {
        color: $light-txt-color;
      }

      &:not(.inactive) {
        cursor: pointer;

        &:hover {
          color: $alt-brand-color;
        }
      }
    }

    .state {
      margin: 0 10px;
      margin-bottom: 10px;
      position: relative;
      top: -3px;
      font-weight: bold;
    }
  }
</style>


<script>
  export default {
    props: {
      items: { type: Array },
      perPage: {
        type: Number,
        default() { return 3; }
      }
    },
    data() {
      return { currentPage: 1 };
    },
    watch: {
      items() { this.reset(); }
    },
    computed: {
      noPages() { return Math.ceil(this.items.length / this.perPage); }
    },
    methods: {
      update() {
        const from = (this.currentPage - 1) * this.perPage;
        const items = this.items.slice(from, from + this.perPage);
        this.$emit('change', items);
      },
      reset() {
        this.currentPage = 1;
        this.update();
      },
      prev() {
        if (this.currentPage <= 1) {
          return;
        }
        this.currentPage -= 1;
        this.update();
      },
      next() {
        if (this.currentPage >= this.noPages) {
          return;
        }
        this.currentPage += 1;
        this.update();
      }
    },
    created() {
      this.reset();
    }
  };
</script>
