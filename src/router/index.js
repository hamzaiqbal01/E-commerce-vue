import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AppLogin from "../components/Login/AppLogin.vue";
import AppDashbord from "../components/CURD/AppDashbord.vue";
import ProductDetail from "../components/Products/ProductDetail.vue";
import AddProductForm from "../components/CURD/AddProductForm.vue";
import DeleteProduct from "../components/CURD/DeleteProduct.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "AppLogin",
    component: AppLogin,
  },
  {
    path: "/dashbord",
    name: "AppDashbord",
    component: AppDashbord,
  },
  {
    path: "/product/:id",
    name: "product-detail",
    component: ProductDetail,
    props: true,
  },
  {
    path: "/add-product", // Add a route for the product form
    name: "add-product-form",
    component: AddProductForm,
  },
  {
    path: "/delete-product", // Route for delete product form
    name: "delete-product-form",
    component: DeleteProduct,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
