<template>
  <div class="m-main">

    <keep-alive> <!-- Сохранение состояния при смене url -->
      <router-view>      
      </router-view>
    </keep-alive>   

    <router-view> </router-view>
    <!-- <m-catalog />
    <m-cart /> -->

  </div>
</template>

<script>
// import mCatalog from "./m-catalog";
// import mCart from "./m-cart.vue";

export default {
  name: "m-main",
  // components: {
  //   // mCatalog,
  //   // mCart,
  // },
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log("Hello!");
  },
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

  display: inline-block;
}
</style>
