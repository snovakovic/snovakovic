<template>
  <section class="image-slider">
    <div v-if="images.length">
      <div class="siema">
        <div class="image-wrapper" v-for="(img, index) in images" :key="index">
          <img :src="img" alt="">
        </div>
      </div>
      <span v-if="haveSlides">
        <i class="fa fa-angle-left prev"></i>
        <i class="fa fa-angle-right next"></i>
        <div class="slide-indicators">
          <span class="dot" :class="{ active: index === currentSlideNo }"
            v-for="(img, index) in images" :key="index"
            @click="changeSlide(index)"></span>
        </div>
      </span>
    </div>
    <div v-else class="no-picture">
      <i class="fa fa-picture-o"></i>
      <p>NO PICTURE</p>
    </div>
  </section>
</template>


<style lang="scss" scoped>
  @import '~styles/constants';

  .image-slider {
    position: relative;
  }

  .image-wrapper {
    width: 100%;
    height: 300px;
  }

  img {
    max-height: 100%;
    max-width: 99%;
    display: block;
    margin: 0 auto;
  }

  .no-picture {
    text-align: center;
    color: $dark-bg-color;

    p {
      font-weight: bold;
      font-size: 18px;
      margin-top: 0;
    }

    i {
      font-size: 104px;
      margin: 20px 0;
    }
  }

  .prev,
  .next {
    font-size: 50px;
    color: $alt-brand-color;
    position: absolute;
    top: 50%;
    margin-top: -25px;
    transition: .5s color;
    cursor: pointer;

    &:hover {
      color: $brand-color;
    }
  }

  .prev { left: 10px; }
  .next { right: 10px; }

  .slide-indicators {
    $dot-size: 12px;
    text-align: center;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;

    .dot {
      display: inline-block;
      width: $dot-size;
      height: $dot-size;
      border-radius: 50%;
      background: $alt-brand-color;
      margin: 0 3px;
      cursor: pointer;
      opacity: 0.7;

      &.active {
        background: $brand-color;
      }
    }
  }
</style>


<script>
  import Siema from 'siema';

  const IMAGE_RATIO = 1.75;

  export default {
    props: {
      images: Array
    },
    data() {
      return {
        list: null,
        slider: null,
        slides: null
      };
    },
    computed: {
      haveSlides() {
        return this.images.length > 1;
      },
      currentSlideNo() {
        return this.slider && this.slider.currentSlide;
      }
    },
    methods: {
      changeSlide(slideNo) {
        this.slider.goTo(slideNo);
      },
      setWrapperHeight() {
        if (this.slider) {
          const height = this.slider.selector.clientWidth / IMAGE_RATIO;
          if (!this.slides) {
            this.slides = Array.from(this.slider.selector.querySelectorAll('.image-wrapper'));
          }
          this.slides.forEach(($slide) => { $slide.style.height = `${Math.max(120, height)}px`; });
        }
      }
    },
    mounted() {
      if (!this.images.length) {
        return;
      }

      this.slider = new Siema({
        selector: this.$el.querySelector('.siema'),
        loop: true,
        duration: 500
      });

      this.setWrapperHeight();
      window.addEventListener('resize', this.setWrapperHeight);

      if (this.haveSlides) {
        this.$el.querySelector('.prev').addEventListener('click', () => this.slider.prev());
        this.$el.querySelector('.next').addEventListener('click', () => this.slider.next());
      }
    },
    beforeDestroy() {
      if (this.slider) {
        this.slider.destroy();
        window.removeEventListener('resize', this.setWrapperHeight);
      }
    }
  };
</script>
