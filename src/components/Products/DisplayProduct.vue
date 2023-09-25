<template>
  <div class="container d-flex flex-column mt-5">
    <!-- Category dropdown and search bar -->
    <div class="category d-flex justify-content-between">
      <h3 class="text-start">Products</h3>
      <input
        v-model="searchQuery"
        @input="performSearch"
        type="text"
        placeholder="Search product"
        class="search col-md-6 mx-auto"
      />
      <select v-model="selectedCategory" @change="fetchProductsByCategory">
        <option value="">All Categories</option>
        <option v-for="category in categories" :key="category">
          {{ category }}
        </option>
      </select>
    </div>

    <!-- Display searched products -->
    <div class="products mt-4">
      <div
        v-for="product in displayedProducts"
        :key="product.id"
        class="card"
        @click="showProductDetails(product)"
      >
        <img
          :src="product.thumbnail"
          class="card-img-top"
          alt="Product Image"
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p class="card-text">Price: ${{ product.price }}</p>
          <a href="#" class="buy-btn">Buy Now</a>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="pagination mt-4">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="{
          'pagination-btn': currentPage === page,
          'pagination-outline-btn': currentPage !== page,
        }"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
// import ProductDetail from "./ProductDetail.vue";

export default {
  name: "DisplayProduct",
  components: {
    // ProductDetail,
  },
  data() {
    return {
      products: [],
      currentPage: 1,
      productsPerPage: 12,
      selectedCategory: "",
      categories: [],
      searchQuery: "",
    };
  },

  computed: {
    displayedProducts() {
      const start = (this.currentPage - 1) * this.productsPerPage;
      const end = start + this.productsPerPage;
      return this.products.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.products.length / this.productsPerPage);
    },
  },

  mounted() {
    // Fetch categories
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        this.categories = data;
      })
      .catch((error) => console.error("Error fetching categories:", error));

    // Fetch all products initially
    this.fetchProductsByCategory();
  },

  methods: {
    fetchProductsByCategory() {
      let apiUrl = "https://dummyjson.com/products";
      if (this.selectedCategory) {
        apiUrl += `/category/${this.selectedCategory}`;
      }
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          this.products = data.products;
        })
        .catch((error) => console.error("Error fetching products:", error));
    },

    changePage(page) {
      this.currentPage = page;
    },

    showProductDetails(product) {
      fetch(`https://dummyjson.com/products/${product.id}`)
        .then((res) => res.json())
        .then((productDetails) => {
          this.$router.push({
            name: "product-detail",
            params: { productDetails },
          });
        })
        .catch((error) =>
          console.error("Error fetching product details:", error)
        );
    },

    performSearch() {
      fetch(`https://dummyjson.com/products/search?q=${this.searchQuery}`)
        .then((res) => res.json())
        .then((data) => {
          this.products = data.products;
        })
        .catch((error) => console.error("Error fetching products:", error));
    },
  },
};
</script>

<style>
/* Styles for product cards */
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  width: 19rem;
  margin-bottom: 20px;
  box-shadow: 0px 0px 2px 2px #e6e2e2;
  border: 1px solid transparent !important;
  position: relative;
}
.card .card-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
}
.buy-btn {
  background: #003159;
  height: 4vh;
  color: white;
  padding: 9px 45px;
  border-radius: 19px;
  text-decoration: none;
}
@media (max-width: 991px) {
  .card {
    flex: 1 1 calc(50% - 20px);
  }
}

@media (max-width: 767px) {
  .card {
    flex: 1 1 calc(100% - 20px);
    margin: 3px 32px;
  }
  .search {
    width: 10rem;
  }
}

.card-img-top {
  width: 100%;
  height: 200px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
}
.pagination-btn,
.pagination-outline-btn {
  background: #003159;
  border-radius: 50%;
  color: white;
  padding: 4px 12px;
}
.pagination-outline-btn {
  background: transparent;
  color: black;
}
.pagination button:focus {
  outline: none;
}
select {
  bottom: 1px solid transparent;
  background: #003159;
  color: white;
  border-radius: 3px;
  padding: 0px 4px;
}
.search {
  padding: 1px 15px;
  border: 1px solid darkgrey;
  border-radius: 20px;
}
.search:focus {
  outline: none !important;
}
</style>
