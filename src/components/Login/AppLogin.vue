<template>
  <section class="mt-5">
    <div class="wrapper py-5 border h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form>
            <div
              class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start"
            >
              <h2 class="mb-0 me-3">Sign in</h2>
            </div>

            <!-- Email input -->
            <div class="text-start my-4">
              <label class="text-start form-label" for="form3Example3"
                >Email address</label
              >
              <input
                v-model="email"
                type="email"
                id="form3Example3"
                class="form-control form-control-lg"
                placeholder="Enter a valid email address"
                required
              />
              <span class="error-message text-danger" v-if="!isValidEmail"
                >Please enter a valid email address.</span
              >
            </div>

            <!-- Password input -->
            <div class="text-start mb-3">
              <label class="text-start form-label" for="form3Example4"
                >Password</label
              >
              <input
                v-model="password"
                type="password"
                id="form3Example4"
                class="form-control form-control-lg"
                placeholder="Enter password"
              />
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button
                type="button"
                class="btn btn-primary btn-lg"
                style="padding-left: 2.5rem; padding-right: 2.5rem"
                @click="loginUser"
              >
                Login
              </button>
              <p class="small fw-bold mt-2 pt-1 mb-0 text-danger">
                {{ loginMessage }}
              </p>
            </div>
            <p class="text-start small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?
              <a href="#!" class="link-danger">Register</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppLogin",

  data() {
    return {
      email: "",
      password: "",
      loginMessage: "",
      isValidEmail: true, // Flag to track email validity
      isToastVisible: false,
    };
  },
  methods: {
    loginUser() {
      this.isValidEmail = this.validateEmail(this.email);

      if (!this.isValidEmail) {
        this.loginMessage = "Please enter a valid email address.";
        return;
      }

      if (this.email === "atuny0@sohu.com" && this.password === "9uQFF1Lh") {
        this.loginMessage = "Login successful!";

        // Save user details in local storage
        const userDetails = {
          email: this.email,
          password: this.password,
        };
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
      } else {
        this.loginMessage = "Login failed. Please check your credentials.";
      }
    },

    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
  },
};
</script>
<style>
.wrapper {
  width: 70%;
  margin: auto;
  box-shadow: 0px 0px 4px 1px #c7c5c5;
}
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
.h-custom {
  height: calc(100% - 73px);
}
@media (max-width: 450px) {
  .h-custom {
    height: 100%;
  }
}
</style>
