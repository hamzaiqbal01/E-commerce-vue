<template>
  <div class="home">
    <AppHeader />
    <DisplayProduct />
  </div>
</template>

<script>
import DisplayProduct from "@/components/Products/DisplayProduct.vue";
import AppHeader from "@/components/Header/AppHeader.vue";

export default {
  name: "HomeView",
  components: {
    DisplayProduct,
    AppHeader,
  },
};
</script>
