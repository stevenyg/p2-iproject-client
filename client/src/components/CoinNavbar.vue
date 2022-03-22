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
              <div
                class="tab-pane fade show active"
                id="login"
                role="tabpanel"
                aria-labelledby="login-tab"
              >
                <div class="mt-3">
                  <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div class="d-flex justify-content-center">
                      <button type="submit" class="btn btn-warning">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="signup"
                role="tabpanel"
                aria-labelledby="signup-tab"
              >
                <div class="mt-3">
                  <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Full name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputFullName"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                      />
                    </div>
                    <div class="d-flex justify-content-center">
                      <button type="submit" class="btn btn-warning">
                        Submit
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
          <a class="navbar-brand text-warning font-weight-bold" href="#"
            >Uppsala Coin</a
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
                <a class="nav-link text-warning font-weight-bold" href="#"
                  >Profile
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-warning font-weight-bold" href="#"
                  >Subscribe</a
                >
              </li>

              <li class="nav-item">
                <a
                  type="button"
                  class="nav-link text-warning font-weight-bold"
                  data-toggle="modal"
                  data-target="#myModal"
                  >Login</a
                >
              </li>

              <li class="nav-item">
                <a class="nav-link text-warning font-weight-bold" href="#"
                  >Logout</a
                >
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
};
</script>

<style>
</style>