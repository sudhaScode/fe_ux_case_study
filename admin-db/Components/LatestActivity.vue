<template>
  <div class="latest-update-box" id="widget4">
    <template v-for="(item, index) in latest_activity" :key="item.activity_type">
      <div :class="{
        'row p-t-20 p-b-30': index === 0,
        'row p-b-30': index > 0
      }">
        <div class="col-auto text-right update-meta p-r-0">
          <i :class="{
            'b-primary': index > 4 || index <= 1,
            'b-success': index === 2,
            'b-danger': index === 3
          }" class="update-icon ring"></i>
        </div>
        <div class="col p-l-5">
          <a href="#!">
            <h6>{{ item.activity_type }}</h6>
          </a>
          <p class="text-muted m-b-0">
            {{ item.activity }},
            <a :href="item.readmore_link" class="text-c-blue">Read More</a>
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latest_activity: [],
    };
  },
  created() {
    fetchJsonData("Latest_Activity.json")
      .then((res) => {
        this.latest_activity = res.latest_activity;
      })
      .catch((error) => {
        console.error("Fetching failed", error);
      });
  },
};
</script>
