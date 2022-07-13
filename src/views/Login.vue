<template>
  <div class="container text-white login">
    <div class="row">
      <div class="col-md-6 col-xm-12">
        <img src="https://i.postimg.cc/T2j1k3Gk/logo.png" alt="logo" />
      </div>
      <div class="col-md-5 col-xl-5 col-xm-12">
                          <div class="site-heading text-center my-2">
                        <h2>login to <span>Account</span></h2>
                        <h4></h4>
                    </div>
        <form @submit.prevent="login">
          <label for="_replyto"> Your Email </label>
          <input
            type="email"
            name="_replyto"
            id="_replyto"
            placeholder="Email"
            v-model="email"
            required
          />
          <label for="_name"> Your password </label>
          <input
            type="password"
            name="_password"
            id="_password"
            placeholder="enter password"
            v-model="password"
            required
          />
        <div v-if="users">
          <p class="lead">Welcome {{users[0].firstname}} {{users[0].surname}} 
          to our app
          </p>
        </div>
        <div v-else>
          <router-link to="/register" >Please register</router-link>
        </div>
          <button type="submit" class="button">SUBMIT</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users
    },
    error() {
      return this.$store.state.error
    },
    JTProfile() {
      return this.$store.state.users.profile
    }
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #f8002f;
  background-image: linear-gradient(326deg, #f8002f 0%, #000c14 74%);
}
/* Font: Montserrat 300;400;700
   Color: light blue #d3e2f6
*/
.social-icons {
  font-size: 3rem;
}
.text-primary2 {
  color: aqua;
}

body {
  /* padding: 5%; */
  font-family: "Montserrat";
  color: rgb(255, 255, 255);
}
.login{
    width: 100vw;
    height: 100vh;
}

form input,
form textarea {
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 0.9rem;
  background-color: #edf6f9;
  border-radius: 10px;
}

form input:focus,
form textarea:focus {
  border-color: #93b8e99f;
}

form label {
  margin-top: 1rem;
  display: block;
  color: inherit;
  font-weight: 800;
}

form button {
  background-color: #000000;
  color: rgb(255, 255, 255) ;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  padding: 0.5rem 2rem;
  margin: 0.5rem 0rem;
  border-radius: 10px;
}
 


form button:hover {
  background-color: #ffffff;
  color: rgb(0, 0, 0);
}

.inline {
  display: inline;
  width: initial;
  margin-bottom: 1rem;
}

.text {
  margin-left: 1rem;
}
</style>