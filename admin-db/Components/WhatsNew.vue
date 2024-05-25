<template>
  <div id="widget3">
    <template v-for="update in data" :key="update.message">
      <div class="row p-t-20 p-b-30">
        <div class="col-auto text-right update-meta p-r-0">
          <template v-if="update.flag === 'success'">
            <template v-if="update.created_by === 'Jonny michel'">
              <img src="./template_files/avatar-4.jpg" alt="user image" class="img-radius img-40 align-top m-r-15 update-icon" />
            </template>
            <template v-else>
              <i class="feather icon-check f-w-600 bg-c-green update-icon"></i>
            </template>
          </template>
          <template v-else-if="update.flag === 'pending'">
            <i class="feather icon-briefcase bg-c-red update-icon"></i>
          </template>
        </div>
        <div class="col p-l-5">
          <a href="#!">
            <h6>{{ update.message }}</h6>
          </a>
          <p class="text-muted m-b-0">
            {{ update.created_by }}
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
      data: [],
    };
  },
  created() {
    fetchJsonData("Whats_New.json")
      .then((res) => {
        this.data = res.what_new_items.map((update) => {
          if (update.message.includes("Posted")) {
            update.flag = "success";
          } else if (update.message.includes("Received")) {
            update.flag = "success";
          } else if (update.message.includes("pending")) {
            update.flag = "pending";
          }
          return update;
        });
      })
      .catch((error) => {
        console.error("Fetching failed", error);
      });
  },
};
</script>
