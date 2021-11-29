<template>
  <form>
    <div @submit.prevent="onFormSubmit" class="form-field">
      <label for="login">Логин</label>
      <input v-model="login" id="login" type="text" required />
    </div>
    <div class="form-field">
      <label for="password">Пароль</label>
      <input v-model="password" id="password" type="password" required />
    </div>
    <button type="submit" class="submit-btn">Войти</button>
    <div class="acuion-link">
      <span>Нет аккаунта?</span>
      <a @click="redirect" class="link-btn">Зарегистрироваться</a>
    </div>
  </form>
</template>

<script>
import { doLogin } from "@/assets/netClient/dataService";

export default {
  name: "m-login-form",
  data: () => ({
    login: "",
    password: "",
  }),
  methods: {
    async onFormSubmit() {
      try {
        const login = await doLogin(this.login.trim(), this.password.trim());
        if (login) {
          this.$router.push("/");
        }
      } catch (error) {
        console.error({ error });
      }
    },
    redirect() {
      this.$router.push("/registration");
    },
  },
};
</script>

<style>

</style>