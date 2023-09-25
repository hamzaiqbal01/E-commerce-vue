<template>
  <div class="product-details-container container col-md-8 mx-auto">
    <div class="product-image-column">
      <img :src="productDetails.thumbnail" alt="Product Image" />
    </div>

    <!-- Product Text Column -->
    <div class="product-text-column">
      <h1 class="text-start">{{ productDetails.title }}</h1>
      <h5 class="text-start">{{ productDetails.brand }}</h5>
      <p class="text-start">{{ productDetails.description }}</p>
      <h3 class="text-start">Price: ${{ productDetails.price }}</h3>
      <h4 class="text-start">
        Discount: ${{ productDetails.discountPercentage }}
      </h4>
      <a href="#" class="buy-btn mt-3">Buy Now</a>
      <!-- Add more details as needed -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productDetails: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.product-details-container {
  display: flex;
  align-items: center;
  gap: 0px 33px;
  border: 1px solid gray;
  padding: 0px !important;
  box-shadow: 0px 0px 9px 2px #bbafaf;
  margin-top: 42px;
  border: 1px solid transparent;
}
.buy-btn {
  background: #003159;
  height: 4vh;
  color: white;
  padding: 9px 45px;
  border-radius: 19px;
  text-decoration: none;
}
</style>
