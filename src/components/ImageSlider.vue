<template>
  <section class="sn-slider">
    <slider v-if="images.length"
      height="350px"
      ref="slider"
      :auto="false"
      :indicators="images.length > 1 ? 'center': false"
      :control-btn="images.length > 1">
      <slider-item v-for="(img, index) in images" :key="index">
        <img :src="img" alt="">
      </slider-item>
    </slider>
    <div v-else class="no-picture">
      <i class="fa fa-picture-o"></i>
      <p>NO PICTURE</p>
    </div>
  </section>
</template>


<style lang="scss" scoped>
  @import '~styles/constants';

  img {
    max-height: 100%;
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }

  .no-picture {
    text-align: center;
    color: $dark-bg-color;

    p {
      font-weight: bold;
      font-size: 18px;
      margin-top: 5px;
    }

    i {
      font-size: 104px;
      margin-top: 65px;
    }
  }
</style>


<style lang="scss">
  @import '~styles/constants';

  .sn-slider {
    .btn {
      background: none!important;
      opacity: 1;
      margin-top: -5px;

      &:hover {
        .slider-icon {
          border-color: $brand-color;
        }
      }
    }

    .slider-icon {
      transition: .5s border-color;
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
    methods: {
      reRenderSlider() {
        if (this.$refs.slider) {
          this.$refs.slider.$emit('$VueEasySlider:reRender');
        }
      }
    },
    mounted() {
      window.addEventListener('resize', this.reRenderSlider);
    },
    components: {
      Slider,
      SliderItem
    }
  };
</script>
