<template>
  <div class="m-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="m-catalog--link-to-cart">Back to catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="cartData">Нет вещей в корзине...</p>
    <m-cart-item />
  </div>
</template>

<script>
import mCartItem from "./m-cart-item.vue";

export default {
  name: "m-cart",
  components: {
    mCartItem,
  },
  props: {
    cartData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>