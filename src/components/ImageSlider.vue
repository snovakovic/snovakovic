<template>
  <section>
    <div v-if="images.length">
      <div class="siema">
        <img v-for="(img, index) in images" :key="index" :src="img" alt="">
      </div>
      <div class="navigation">
        <button class="prev">Prev</button>
        <button class="next">Next</button>
      </div>
    </div>
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

  .navigation {
    display: none;
  }
</style>


<script>
  import Siema from 'siema';

  export default {
    props: {
      images: Array
    },
    data() {
      return { list: null };
    },
    mounted() {

      const mySiema = new Siema();
      document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
      document.querySelector('.next').addEventListener('click', () => mySiema.next());
    }
  };
</script>
