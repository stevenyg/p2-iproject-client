<template>
  <div>
    <div class="modal" id="myModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-dark">Uppsala Coin</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active text-dark"
                  id="login-tab"
                  data-toggle="tab"
                  href="#login"
                  role="tab"
                  aria-controls="login"
                  aria-selected="true"
                  >Login</a
                >
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link text-dark"
                  id="signup-tab"
                  data-toggle="tab"
                  href="#signup"
                  role="tab"
                  aria-controls="signup"
                  aria-selected="false"
                  >Sign Up</a
                >
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <!-- ini form login -->
              <div
                class="tab-pane fade show active"
                id="login"
                role="tabpanel"
                aria-labelledby="login-tab"
              >
                <div class="mt-3">
                  <form @submit.prevent="loginHandler">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address1</label>
                      <input
                        v-model="emailLogin"
                        type="email"
                        class="form-control"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        v-model="passwordLogin"
                        type="password"
                        class="form-control"
                      />
                    </div>
                    <div class="d-flex justify-content-center">
                      <button type="submit" class="btn btn-warning">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <!-- ini form register -->
              <div
                class="tab-pane fade"
                id="signup"
                role="tabpanel"
                aria-labelledby="signup-tab"
              >
                <div class="mt-3">
                  <form @submit.prevent="registerHandler">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        v-model="emailRegister"
                        type="email"
                        class="form-control"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        v-model="passwordRegister"
                        type="password"
                        class="form-control"
                      />
                    </div>
                    <div class="d-flex justify-content-center">
                      <button type="submit" class="btn btn-warning">
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="modal-footer">
            </div> -->
        </div>
      </div>
    </div>

    <div class="row" style="box-shadow: 0px 5px 10px #000000">
      <div class="col-md-6">
        <nav
          class="navbar navbar-expand-lg navbar-light"
          style="background-color: #14161a"
        >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <router-link
            to="/"
            class="navbar-brand text-warning font-weight-bold"
            href="#"
            >Uppsala Coin</router-link
          >
        </nav>
      </div>
      <div class="col-md-6 d-flex justify-content-end">
        <nav
          class="navbar navbar-expand-lg navbar-light"
          style="background-color: #14161a"
        >
          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link
                  to="/profile"
                  class="nav-link text-warning font-weight-bold"
                  href="#"
                  >Profile
                </router-link>
              </li>
              <li v-if="loginStatus === false" class="nav-item">
                <a
                  type="button"
                  class="nav-link text-warning font-weight-bold"
                  data-toggle="modal"
                  data-target="#myModal"
                  >Login</a
                >
              </li>

              <li
                v-if="loginStatus === true"
                @click.prevent="logoutHandler"
                class="nav-item"
              >
                <a class="nav-link text-warning font-weight-bold">Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CoinNavbar",
  data() {
    return {
      emailLogin: "",
      passwordLogin: "",
      emailRegister: "",
      passwordRegister: "",
    };
  },
  computed: {
    loginStatus() {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    loginHandler() {
      const payload = {
        email: this.emailLogin,
        password: this.passwordLogin,
      };

      this.$store.dispatch("doLogin", payload);
    },
    registerHandler() {
      const payload = {
        email: this.emailRegister,
        password: this.passwordRegister,
      };

      this.$store.dispatch("doRegister", payload);
    },
    logoutHandler() {
      this.$store.commit("CHANGE_ISLOGINTOFALSE");
      localStorage.clear();
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style>
</style>