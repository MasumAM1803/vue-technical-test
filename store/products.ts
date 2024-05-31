import { defineStore } from "pinia";

interface ProductPayloadInterface {
    title: string;
    description: string;
    category: string;
    price: number;
    stock: number;
}

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
        status: false
    }),
    actions: {
        async fetchProducts() {
            const { data }: any = await useFetch('https://dummyjson.com/products');
            if (data.value) {
                this.products = data.value.products
            }
        },

        async storeProduct({ title, description, category, price, stock }: ProductPayloadInterface) {
            const { data }: any = await useFetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    title,
                    description,
                    category,
                    price,
                    stock,
                }
            });

            if (data.value) {
                this.status = true
            }
        },
    }
})