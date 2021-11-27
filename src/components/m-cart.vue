<template>
    <div class="m-cart">
        <h1>Cart</h1>
        <mCartItem/>
    </div>
</template>

<script>
import mCartItem from './m-cart-item.vue'

export default {
    name: 'm-cart',
    components: {
        mCartItem,
    },
    data() {
        return {}
    },
}
</script>

<style>

</style>