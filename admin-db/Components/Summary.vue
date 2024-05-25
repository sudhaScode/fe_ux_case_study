<template>
  <div class="col-md-12 col-xl-4" id="widget1">
    <div v-for="summaryItem in summary" :key="summaryItem.title" class="card comp-card">
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col">
            <h6 class="m-b-25">{{ summaryItem.title }}</h6>
            <h3 class="f-w-700" :class="getClass(summaryItem.title)">
              {{ summaryItem.value }}
            </h3>
            <p class="m-b-0">{{ summaryItem.duration }} ({{ summaryItem.year }})</p>
          </div>
          <div class="col-auto">
            <i :class="getIconClass(summaryItem.title)"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  data() {
    return {
      summary: [],
    };
  },
  created() {
    fetch('jsons/summary.json')
      .then(response => response.json())
      .then(data => {
        this.summary = data.summary;
        console.log(this.summary, "::Debug");
      })
      .catch(error => {
        console.error('Fetching failed', error);
      });
  },
  methods: {
    getClass(title) {
      if (title === 'Impressions') return 'text-c-blue';
      if (title === 'Goal') return 'text-c-green';
      if (title === 'Impact') return 'text-c-yellow';
      return '';
    },
    getIconClass(title) {
      if (title === 'Impressions') return 'fas fa-eye bg-c-blue';
      if (title === 'Goal') return 'fas fa-bullseye bg-c-green';
      if (title === 'Impact') return 'fas fa-hand-paper bg-c-yellow';
      return '';
    },
  },
};
</script>
