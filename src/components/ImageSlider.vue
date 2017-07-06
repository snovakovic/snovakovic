<template>
  <section>
    <slider animation="fade" :auto="false" height="400px">
      <slider-item v-for="(img, index) in images" :key="index">
        <img :src="img" alt="">
      </slider-item>
    </slider>
  </section>
</template>


<style lang="scss" scoped>
  img {
    height: 100%;
    display: block;
    margin: 0 auto;
  }
</style>


<script>
  import { Slider, SliderItem } from 'vue-easy-slider';

  export default {
    props: {
      images: Array
    },
    data() {
      return { list: null };
    },
    components: {
      Slider,
      SliderItem
    }
  };
</script>
