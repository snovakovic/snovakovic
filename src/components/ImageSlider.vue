<template>
  <section class="sn-slider">
    <slider :auto="false" v-if="images.length" :control-btn="images.length > 1" height="350px">
      <slider-item v-for="(img, index) in images" :key="index">
        <img :src="img" alt="">
      </slider-item>
    </slider>
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


<style lang="scss">
  @import '~styles/constants';

  .sn-slider {
    .slider-btn {
      background: none;
      opacity: 1;
      margin-top: -5px;
    }

    .slider-icon {
      border-left: 3px solid $alt-brand-color;
      border-bottom: 3px solid $alt-brand-color;
    }


    .slider-indicator-icon {
      background: rgba(33, 33, 33, 0.4);

      &.slider-indicator-active {
        background: rgba(3, 41, 79, 0.8);
      }
    }
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
