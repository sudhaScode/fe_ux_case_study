import Vue from 'vue';
import Summary from './Components/Summary.vue';

const app = Vue.createApp({
  components: {
    Summary
  },
  template: `
    <div>
      <Summary />
    </div>
  `
});

app.mount('#widgets');

/**
 unused vue app
 */
