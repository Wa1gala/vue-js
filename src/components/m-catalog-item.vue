<template>
  <div class="m-catalog-item">
    <img
      class="m-catalog-item__img"
      v-bind:src="require('../assets/images/' + product_data.image)"
      alt="img"
      style="width: 25%"
    />
    <p class="m-catalog-item__name">{{ product_data.name }}</p>
    <p class="m-catalog-item__price">Price: {{ product_data.price }}</p>
    <button 
    class="m-catalog-item__addBtn btn"
    @click="sendData"
    >
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "m-catalog-item",
  components: {},
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    sendData() {
      this.$emit("sendArticle", this.product_data.article);
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.m-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__img {
    background: $color;
    border-radius: 50%;
  }
}
</style>