import Vue from 'vue';

export default Vue.mixin({
  mounted() {
    this.hello();
  },
  methods: {
    hello() {
      // eslint-disable-next-line
      console.log('hello from mixin!');
    },
  },
});
