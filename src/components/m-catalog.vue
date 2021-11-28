<template>
  <div class="m-catalog">
    <router-link :to="{ name: 'cart', params: {} }">
      <div class="m-main--link-to-cart">Cart: 0</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="v-catalog--list">
      <m-catalog-item
        v-for="product in products"
        :key="product.article"
        v-bind:productData="product"
        @sendArticle="showArticleConsole"
      />
    </div>
  </div>
</template>

<script>
import mCatalogItem from "./m-catalog-item.vue";

export default {
  name: "m-catalog",
  components: {
    mCatalogItem,
  },
  props: {},
  data() {
    return {
      products: [
        {
          image: "avatar1.png",
          name: "T-shirt 1",
          price: 2100,
          article: "T1",

          category: "Мужские",
        },
        {
          image: "avatar1.png",
          name: "T-shirt 2",
          price: 3150,
          article: "T2",

          category: "Женские",
        },
        {
          image: "avatar1.png",
          name: "T-shirt 3",
          price: 4200,
          article: "T3",

          category: "Женские",
        },
        {
          image: "avatar1.png",
          name: "T-shirt 4",
          price: 5300,
          article: "T4",

          category: "Мужские",
        },
        {
          image: "avatar1.png",
          name: "T-shirt 5",
          price: 6500,
          article: "T5",

          category: "Женские",
        },
        {
          image: "avatar1.png",
          name: "T-shirt 6",
          price: 8700,
          article: "T6",

          category: "Женские",
        },
      ],
    };
  },
  methods: {
    showArticleConsole(data) {
      console.log(data);
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.m-catalog {
  &--list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
