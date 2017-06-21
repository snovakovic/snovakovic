<template>
  <card class="testimonials">
    <h2>Testimonials</h2>
    <div v-for="testemonial in list">
      <blockquote class="quote">
        <i class="fa fa-quote-left"></i>{{ testemonial.content }}
      </blockquote>
      <p class="source smallest">{{ testemonial.by }}</p>
    </div>
    <a class="more-link" :href="source.url">
      <i class="fa fa-external-link smallest"></i> {{ source.description }}
    </a>
  </card>
</template>


<style lang="scss" scoped>
  @import '~styles/constants.scss';

  .quote {
    color: $lighter-txt-color;

    i {
      margin-right: 15px;
      color: $brand-color;
    }
  }

  .source {
    padding-left: 30px;
    color: $lightest-txt-color;
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
    data() {
      return {
        source: {
          url: 'https://www.upwork.com/o/profiles/users/_~017c648c2aba395f29/',
          description: 'More on Upwork'
        },
        list: [{
          by: 'Upwork client',
          content: `Stefan is an amazingly talented programmer. Not only that,
                    he takes the time to walk me through back-end updates,
                    and fixes things other programmers have done wrong without
                    asking. He's my new go-to developer`
        }, {
          by: 'Upwork client',
          content: `Excellent programmer. Highly recommend. Very easy to
                    work with and great communication. Provided exactly what I
                    asked for in terms of programming, and even provided
                    documentation and instructions for updating. Top notch.
                    Will continue to use for any future development needs.`
        }]
      };
    },
    components: {
      Card
    }
  };
</script>
