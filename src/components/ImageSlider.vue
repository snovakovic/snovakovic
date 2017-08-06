<template>
  <section class="peppermint peppermint-inactive">
    <figure v-for="(img, index) in images" :key="index">
      <img :src="img" alt="">
    </figure>
  </section>
</template>


<style lang="scss" scoped>
  img {
    max-height: 100%;
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
</style>


<script>
  import peppermint from '../peppermint/peppermint';

  export default {
    props: {
      images: Array
    },
    data() {
      return { list: null, slider: undefined };
    },
    mounted() {
      console.log(peppermint);
      this.slider = peppermint(this.$el);
    }
  };
</script>
