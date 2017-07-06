<template>
  <section>
    <slider animation="fade" :auto="false">
      <slider-item v-for="(img, index) in images" :key="index">
        <img :src="img" alt="">
      </slider-item>
    </slider>
  </section>
</template>


<style lang="scss" scoped>
  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }

  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }

  .slide2 {
    background-color: #ffd705;
    color: #000;
  }

  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
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
    mounted() {
      this.list = [
        { backgroundColor: '#3f51b5', width: '100%', height: '100%' },
        { backgroundColor: '#eee', width: '100%', height: '100%' },
        { backgroundColor: '#f44336', width: '100%', height: '100%' }
      ];
    },
    components: {
      Slider,
      SliderItem
    }
  };
</script>
