import { defineStore } from "pinia";

interface ProductPayloadInterface {
    title: string;
    description: string;
    category: string;
    price: number;
    stock: number;
}

interface IdPayloadInterface {
    id: string;
}

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
        product: {},
        title: '',
        isDeleted: false,
        status: false
    }),
    actions: {
        async fetchProducts() {
            const { data }: any = await useFetch('https://dummyjson.com/products');
            if (data.value) {
                this.products = data.value.products
            }
        },

        async fetchProduct({ id }: IdPayloadInterface) {
            const { data }: any = await useFetch(`https://dummyjson.com/products/${id}`);
            if (data.value) {
                this.product = data.value
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
                this.title = data.value.title;
                this.status = true;
            }
        },

        async updateProduct({ title, description, category, price, stock }: ProductPayloadInterface) {
            const { data }: any = await useFetch('https://dummyjson.com/products/add', {
                method: 'PUT',
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

        async deleteProduct({ id }: IdPayloadInterface) {
            const { data }: any = await useFetch(`https://dummyjson.com/products/${id}`, {
                method: 'DELETE',
            });

            if (data.value) {
                this.isDeleted = data.value.isDeleted
            }
        },
    }
})