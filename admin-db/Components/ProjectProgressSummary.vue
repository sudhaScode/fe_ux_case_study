<template>
  <div class="row" id="widget2">
    <template v-for="progress in progress_summary" :key="progress.title">
      <div class="col-xl-3 col-md-6">
        <h6>{{ progress.title }}</h6>
        <h5 class="m-b-30 f-w-700">
          {{ progress.value }}
          <span class="text-c-green m-l-10">{{ progress.percentage }}</span>
        </h5>
        <div class="progress">
          <div class="progress-bar"
            :class="{ 'bg-c-red': progress.status < 40, 'bg-c-green': progress.status >= 80, 'bg-c-yellow': progress.status < 80 }"
            :style="{ width: progress.status + '%' }">
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress_summary: [],
    };
  },
  created() {
    fetchJsonData("Project_Progress_Summary.json")
      .then((res) => {
        this.progress_summary = res.project_progress_summary.map((summary) => {
          const percentageValue = summary.percentage.replace(/\%$/, "").replace(/^\+|\-/, "");
          summary.status = Number(percentageValue);
          return summary;
        });
      })
      .catch((error) => {
        console.error("Fetching failed", error);
      });
  },
};
</script>

