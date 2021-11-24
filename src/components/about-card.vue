<template>
  <body>
    <!-- /* карточка about */ -->
    <div @mouseover="onMouseOver" class="aboutcard">
      <img :src="logo" alt="avatar" style="width: 50%" />
      <div class="container">
        <h2><b> Харитонов Алексей </b></h2>
        <h3><b> Группа: БСБО-08-19 </b></h3>
        <p>
          <b>
            <a
              href="https://github.com/Wa1gala/Python-Telegram-Bot"
              target="_blank"
              >GITHUB</a
            >
          </b>
        </p>
        <div class="counter">
          {{ counter }}
        </div>
        <button @click="onCounterClick">Count + 1</button>
      </div>
    </div>
    <!-- /* карточка contact */-->
    <div class="feedback">
      <h1>Feedback</h1>
      <form
        @keyup.shift.enter="sendFormData"
        @submit.prevent="onFormSubmit"
        id="form"
        class="feedback-form"
      >
        <ul>
          <li>
            <input
              v-model="myForm.inputName"
              required
              type="text"
              placeholder="Логин"
            />
          </li>
          <li>
            <input
              v-model="myForm.emailInput"
              required
              type="email"
              placeholder="Email"
            />
          </li>
          <li>
            <textarea
              v-model="myForm.inputEmai"
              required
              placeholder="Enter your message here"
            ></textarea>
          </li>
          <li class="button">
            <button @click="btnHandler" id="submitBtn" type="submit">
              Submit
            </button>
          </li>
        </ul>
      </form>
    </div>
  </body>
</template>

<script>
import avatar from "@/assets/images/avatar1.png";
import feedbackAvatar from "@/assets/images/feedback.jpg";

export default {
  name: "HelloWorld",
  components: {},
  data: function () {
    return {
      logo: avatar,
      image: feedbackAvatar,
      counter: 1,
      myForm: {
        inputName: "",
        inputEmai: "",
        description: "",
      },
    };
  },
  methods: {
    onCounterClick() {
      this.counter += 1;
    },
    btnHandler($event) {
      console.log('Hello');
      console.warn($event);
    },
    onMouseOver($event) {
      console.warn($event);
    },
    onFormSubmit($event) {
      console.warn($event);
    },
  },

  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* карточка about */
.aboutcard {
  float: left;
  height: 50vh;
  width: 50vh;
  background: navajowhite;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  transition: 0.6s;
  color: #bdb76b;
  border-radius: 50%;
  margin: 0;
}
.aboutcard:hover {
  box-shadow: 4px 16px 16px 0 rgba(0, 0, 0, 0.2);
  color: #899889;
}
.aboutcard:active {
  color: red;
}
/* карточка contact */
.feedback {
  float: right;
}
form {
  transition: 0.6s;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  background: navajowhite;
  width: 400px;
  padding: 20px;
  border: 1px solid navajowhite;
  border-radius: 16px;
}
form:hover {
  box-shadow: 4px 16px 16px 0 rgba(0, 0, 0, 0.2);
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
form li {
  margin-top: 4px;
}
label {
  color: #bdb76b;
  display: inline-block;
  width: 90px;
  text-align: center;
}
input,
textarea {
  outline: none;
  font: 15px sans-serif;
  width: 260px;
  box-sizing: border-box;
  border: 1px solid navajowhite;
  border-radius: 8px;
  resize: none;
}
input:focus,
textarea:focus {
  color: #bdb76b;
  border-color: #888;
}
textarea {
  color: #bdb76b;
  vertical-align: top;
  height: 5em;
}

li.button {
  background: linear-gradient(to bottom, #ffffff, #e6e6e6) #f5f5f5 repeat-x;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) #b3b3b3;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset,
    0 1px 2px rgba(0, 0, 0, 0.05);
  color: #333333;
  text-decoration: none;
  display: block;
  font-size: 14px;
  width: 120px;
  line-height: 20px;
  margin: 20px auto;
  padding: 4px 12px;
  text-align: center;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
  position: relative;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: -webkit-transform;
  transition-property: transform;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
li.button:before {
  pointer-events: none;
  position: absolute;
  z-index: -1;
  content: "";
  top: 100%;
  left: 5%;
  height: 10px;
  width: 90%;
  opacity: 0;
  background: -webkit-radial-gradient(
    center,
    ellipse,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0) 80%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0) 80%
  );
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: -webkit-transform, opacity;
  transition-property: transform, opacity;
}
li.button:hover {
  -webkit-transform: translateY(-5px);
  -ms-transform: translateY(-5px);
  transform: translateY(-5px);
}
li.button:hover:before {
  opacity: 1;
  -webkit-transform: translateY(5px);
  -ms-transform: translateY(5px);
  transform: translateY(5px);
}
</style>
