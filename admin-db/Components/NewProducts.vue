<template>
  <tbody id="widget5">
    <template v-for="product in new_products" :key="product.product_code">
      <tr>
        <td>{{ product.name }}</td>
        <td>{{ product.product_code }}</td>
        <td>{{ product.customer }}</td>
        <td>
          <label class="label label-danger">{{ product.status }}</label>
        </td>
        <td>
          <template v-for="n in 5">
            <i
              class="fa fa-star f-12 text-c-yellow"
              v-if="n <= product.rating"
            ></i>
            <i class="fa fa-star f-12 text-default" v-else></i>
          </template>
        </td>
      </tr>
    </template>
  </tbody>
</template>

<script>
export default {
  data() {
    return {
      new_products: [],
    };
  },
  created() {
    fetchJsonData("New_Products.json")
      .then((res) => {
        this.new_products = res.new_products;
      })
      .catch((error) => {
        console.error("Fetching failed", error);
      });
  },
};
</script>
