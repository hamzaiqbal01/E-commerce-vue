<template>
  <div>
    <div v-if="isProductDeleted" class="alert alert-success mt-3">
      Product deleted successfully!
    </div>
    <form
      @submit.prevent="deleteProduct"
      class="needs-validation mt-4"
      novalidate
    >
      <h2 class="mb-4">Delete Product</h2>
      <div class="mb-3">
        <label for="productId" class="form-label">Product ID</label>
        <input
          type="text"
          v-model="productId"
          class="form-control"
          id="productId"
          required
        />
        <div class="invalid-feedback">Please enter a product ID.</div>
      </div>
      <button type="submit" class="btn btn-danger">Delete</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "DeleteProduct",
  data() {
    return {
      productId: "",
      isProductDeleted: false, // Flag to indicate if the product is deleted
    };
  },
  methods: {
    deleteProduct() {
      // Make the API call to delete the product
      fetch("https://dummyjson.com/products/1", {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            console.log("Product deleted successfully.");
            this.isProductDeleted = true; // Set the flag to true on success
          } else {
            console.error("Failed to delete product. Status:", res.status);
          }
        })
        .catch((error) => console.error("Error deleting product:", error));
    },
  },
};
</script>

<style scoped>
form {
  width: 30rem;
  margin: auto;
  padding: 24px 16px;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 3px #e4e4e4;
}
</style>
