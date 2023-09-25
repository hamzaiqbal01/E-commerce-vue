<template>
  <div class="dashbord">
    <h1 class="mt-5">Dashbord</h1>
    <button @click="goToAddProduct" class="action-button">Add Product</button>
    <button @click="goToDeleteProduct" class="action-button">
      Delete Product
    </button>
    <button @click="goToUpdateProduct" class="action-button">
      Update Product
    </button>
  </div>
</template>

<script>
export default {
  name: "AppDashbord",
  methods: {
    goToAddProduct() {
      this.$router.push({ name: "add-product-form" });
    },
    goToDeleteProduct() {
      // Navigate to the delete product page
      this.$router.push({ name: "delete-product-form" });
    },
    goToUpdateProduct() {
      // Navigate to the update product page
      this.$router.push({ name: "update-product" });
    },
  },
};
</script>

<style>
.dashbord {
  height: 34vh;
}
.action-button {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #007bff; /* Blue color, you can change this */
  cursor: pointer;
  transition: background-color 0.3s;
}

.action-button:hover {
  background-color: #0056b3; /* Darker blue on hover, you can change this */
}
</style>
