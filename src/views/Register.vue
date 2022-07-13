<template>
  <div class="container text-white register">
                    <div class="site-heading text-center">
                        <h2>Create <span>Account</span></h2>
                        <h4>Lorem Ipsum is simply dummy text</h4>
                    </div>
    <div class="row">
      <div class="col-md-6 col-xm-12">
        <img src="https://i.postimg.cc/T2j1k3Gk/logo.png" alt="logo" />
      </div>
      <div class="col-md-5 col-xl-5 col-xm-12">
        <form>
          <label for="_name"> Your Name </label>
          <input
            type="text"
            name="_name"
            id="_name"
            placeholder="Name"
            required
          />
          <label for="_replyto"> Your Email </label>
          <input
            type="email"
            name="_replyto"
            id="_replyto"
            placeholder="Email"
            required
          />
          <label for="_name"> Your password </label>
          <input
            type="password"
            name="_password"
            id="_passwrod"
            placeholder="enter password"
            required
          />
<!-- 
          <label for="_replyto"> Subject </label>
          <input
            type="email"
            name="_replyto"
            id="_replyto"
            placeholder="subject"
            required
          /> -->

          <button type="submit" class="button">SUBMIT</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
.register{
    width: 100vw;
    height: 100vh;
}

body {
  /* padding: 5%; */
  font-family: "Montserrat";
  color: rgb(255, 255, 255);
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