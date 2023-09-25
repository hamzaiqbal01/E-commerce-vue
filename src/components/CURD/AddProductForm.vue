<template>
  <div>
    <div v-if="isProductAdded" class="alert alert-success mt-3">
      Product added successfully!
    </div>
    <form @submit.prevent="addProduct" class="needs-validation mt-4" novalidate>
      <h2 class="mb-4">Add Product</h2>
      <div class="mb-3">
        <label for="productName" class="form-label">Product Name</label>
        <input
          type="text"
          v-model="product.name"
          class="form-control"
          id="productName"
          required
        />
        <div class="invalid-feedback">Please enter a product name.</div>
      </div>
      <div class="mb-3">
        <label for="productDescription" class="form-label"
          >Product Description</label
        >
        <textarea
          v-model="product.description"
          class="form-control"
          id="productDescription"
          required
        ></textarea>
        <div class="invalid-feedback">Please enter a product description.</div>
      </div>
      <div class="mb-3">
        <label for="productPrice" class="form-label">Price</label>
        <input
          type="number"
          v-model="product.price"
          class="form-control"
          id="productPrice"
          required
        />
        <div class="invalid-feedback">Please enter a valid price.</div>
      </div>
      <div class="mb-3">
        <label for="productBrand" class="form-label">Brand</label>
        <input
          type="text"
          v-model="product.brand"
          class="form-control"
          id="productBrand"
          required
        />
        <div class="invalid-feedback">Please enter a product brand.</div>
      </div>
      <div class="mb-3">
        <label for="productDiscount" class="form-label">Discount</label>
        <input
          type="number"
          v-model="product.discount"
          class="form-control"
          id="productDiscount"
          required
        />
        <div class="invalid-feedback">Please enter a valid discount.</div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <!-- Success message -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: "",
        description: "",
        price: null,
        brand: "",
        discount: null,
      },
      isProductAdded: false,
    };
  },
  methods: {
    addProduct() {
      // Make the API call to add the product
      fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.product),
      })
        .then((res) => res.json())
        .then(() => {
          console.log("Product added successfully!");
          this.isProductAdded = true; // Show success message
        })
        .catch((error) => console.error("Error adding product:", error));
    },
  },
};
</script>
<style scoped>
form {
  width: 30rem;
  margin: auto;
  /* border: 1px solid gray; */
  padding: 24px 16px;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 3px #e4e4e4;
}
</style>
