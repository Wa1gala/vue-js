<template>
  <form>
     <div class="form-field">
      <label for="email">Почта</label>
      <input id="email" type="text" required />
    </div>
    <div class="form-field">
      <label for="login">Логин</label>
      <input id="login" type="text" required />
    </div>
    <div class="form-field">
      <label for="password">Пароль</label>
      <input id="password" type="password" required />
    </div>
    <button type="submit" class="submit-btn">Регистрация</button>
    <div class="acuion-link">
      <span>Уже есть аккаунт? </span>
      <a @click="redirect" class="link-btn"> Войти</a>  
    </div>
  </form>
</template>

<script>
export default {
  name: "m-reg-form",
  components: {},
  data() {
    return {};
  },
  methods: {
    redirect() {
      this.$router.push('/login')
    }
  }
};
</script>

<style>
</style>