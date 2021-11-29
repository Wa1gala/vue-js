<template>
  <form @submit.prevent="onFormSubmit">
    <div class="form-field">
      <label for="email">Почта</label>
      <input v-model="email" id="email" type="text" required />
    </div>
    <div class="form-field">
      <label for="login">Логин</label>
      <input v-model="login" id="login" type="text" required />
    </div>
    <div class="form-field">
      <label for="password">Пароль</label>
      <input v-model="password" id="password" type="password" required />
    </div>
    <button type="submit" class="submit-btn">Регистрация</button>
    <div class="acuion-link">
      <span>Уже есть аккаунт? </span>
      <a @click="redirect" class="link-btn"> Войти</a>
    </div>
  </form>
</template>

<script>
import { doRegister } from "@/assets/netClient/dataService";

export default {
  name: "m-reg-form",
  components: {},
  data: () => ({
    email: "",
    login: "",
    password: "",
  }),
  methods: {
    async onFormSubmit() {
      try {
        const data = await doRegister(
          this.login.trim(),
          this.password.trim(),
          this.email.trim()
        );
        console.log(data);
      } catch (error) {
        console.error({ error });
      }
      this.$router.push("/login");
    },
    redirect() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>