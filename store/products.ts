import { defineStore } from "pinia";

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
    }),
    actions: {
        async fetchProducts() {
            const { data }: any = await useFetch('https://dummyjson.com/products');
            if (data.value) {
                this.products = data.value.products
            }
        }
    }
})