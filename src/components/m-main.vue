<template>
  <div class="m-main">
    <keep-alive> <!-- Сохранение состояния при смене url -->
      <router-view>      
      </router-view>
    </keep-alive>   
  </div>
</template>

<script>
export default {
  name: "m-main",
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss">
.m-main {
  max-width: 600px;
  margin: 0 auto;
  &--link-to-cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: $padding * 2;
    border: solid 1px #aeaeae;
    border-radius: 12%;
    box-shadow: 0 0 8px 0 #aeaeae;
  }
}
</style>
