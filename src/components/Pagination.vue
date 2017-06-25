<template>
  <section class="pagination">
    <i class="fa fa-chevron-left" @click="prev"></i>
      <span class="state"> {{ currentPage }} / {{ noPages }} </span>
    <i class="fa fa-chevron-right" @click="next"></i>
  </section>
</template>


<style lang="scss" scoped>
  @import '~styles/constants';

  .pagination {
    text-align: center;

    i {
      font-size: 22px;
      cursor: pointer;
      transition: .5s color;

      &:hover {
        color: $brand-color;
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
    data() {
      return {
        currentPage: 1
      };
    },
    props: {
      items: { type: Array },
      perPage: {
        type: Number,
        default() {
          return 3;
        }
      }
    },
    watch: {
      items() {
        this.reset();
      }
    },
    computed: {
      noPages() {
        return Math.ceil(this.items.length / this.perPage);
      }
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
