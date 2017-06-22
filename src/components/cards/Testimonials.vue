<template>
  <card class="testimonials">
    <h2>Testimonials</h2>
    <div v-for="testimonial in $me.testimonial.list" :key="testimonial.id">
      <blockquote class="quote">
        <i class="fa fa-quote-left"></i>{{ testimonial.content }}
      </blockquote>
      <p class="source smallest">{{ testimonial.by }}</p>
    </div>
    <a class="more-link" :href="$me.testimonial.source.url">
      <i class="fa fa-external-link smallest"></i>
      {{ $me.testimonial.source.description }}
    </a>
  </card>
</template>


<style lang="scss" scoped>
  @import '~styles/constants.scss';

  .quote {
    color: $txt-color;

    i {
      margin-right: 15px;
      color: $brand-color;
    }
  }

  .source {
    padding-left: 30px;
    color: $light-txt-color;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 30px;
  }

  .more-link {
    margin-top: 30px;

    i {
      font-size: 0.9em;
      margin-right: 5px;
    }
  }
</style>


<script>
  import Card from './Card.vue';

  export default {
    components: {
      Card
    }
  };
</script>
