<template>
  <form>
    <div class="form-field">
      <label for="login">Логин</label>
      <input id="login" type="text" required />
    </div>
    <div class="form-field">
      <label for="password">Пароль</label>
      <input id="password" type="password" required />
    </div>
    <button type="submit" class="submit-btn">Войти</button>
    <div class="acuion-link">
      <span>Нет аккаунта?</span>
      <a @click="redirect" class="link-btn">Зарегистрироваться</a>
    </div>
  </form>
</template>

<script>
export default {
  name: "m-login-form",
  components: {},
  data() {
    return {};
  },
  methods: {
    redirect() {
      this.$router.push('/registration')
    }
  }
};
</script>

<style>
</style>