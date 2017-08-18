<template>
  <section class="image-slider">
    <div v-if="images.length">
      <div class="siema">
        <div class="image-wrapper" v-for="(img, index) in images" :key="index">
          <img :src="img" alt="">
        </div>
      </div>
      <i class="fa fa-angle-left prev" v-if="images.length > 1"></i>
      <i class="fa fa-angle-right next" v-if="images.length > 1"></i>
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
    height: 400px;
  }

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

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }
</style>


<script>
  import Siema from 'siema';

  export default {
    props: {
      images: Array
    },
    data() {
      return {
        list: null,
        slider: null
      };
    },
    mounted() {
      if (this.images.length > 1) {
        this.slider = new Siema();
        this.$el.querySelector('.prev').addEventListener('click', () => this.slider.prev());
        this.$el.querySelector('.next').addEventListener('click', () => this.slider.next());
      }
    },
    beforeDestroy() {
      if (this.slider) {
        this.slider.destroy();
      }
    }
  };
</script>
