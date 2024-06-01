<script setup lang="ts">
import { ModalDeleteProduct } from '#components';
import { storeToRefs } from 'pinia';
import { useProductsStore } from '~/store/products';

const modal = useModal()
const { updateProduct } = useProductsStore();
const { status } = storeToRefs(useProductsStore());
const props = defineProps({
  product: {
    type: Object,
    default: 0
  },
});

const product = ref({
    id: props.product.id,
    title: props.product.title,
    description: props.product.description,
    category: props.product.category,
    price: props.product.price,
    stock: props.product.stock,
})

const update = async () => {
    await updateProduct(product.value)
    if (status) {
        alert('Update Product Successfully')
        modal.close()
    } else {
        alert('Update Product Failed')
        modal.close()
    }
}

const closeModal = () => {
    modal.close()
}
</script>

<template>
    <UModal>
        <UCard>
            <div class="p-6 space-y-6">
                <h3 class="text-lg font-bold text-gray-900 lg:text-2xl dark:text-white">
                    Update Product
                </h3>
                <div>
                    <label for="title" class="block mb-2 text-sm font-medium capitalize text-gray-900 dark:text-white">Title</label>
                    <input v-model="product.title" type="title" name="title" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div>
                    <label for="description" class="block mb-2 text-sm font-medium capitalize text-gray-900 dark:text-white">Description</label>
                    <input v-model="product.description" type="description" name="description" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div>
                    <label for="category" class="block mb-2 text-sm font-medium capitalize text-gray-900 dark:text-white">Category</label>
                    <input v-model="product.category" type="category" name="category" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-48">
                    <div>
                        <label for="price" class="block mb-2 text-sm font-medium capitalize text-gray-900 dark:text-white">Price</label>
                        <input v-model="product.price" type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div>
                        <label for="stock" class="block mb-2 text-sm font-medium capitalize text-gray-900 dark:text-white">Stock</label>
                        <input v-model="product.stock" type="number" name="stock" id="stock" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                </div>
                <div class="flex items-center justify-end space-x-2 ">
                    <button @click.prevent="closeModal()" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 min-w-[80px]">Cancel</button>
                    <button @click.prevent="update()" type="button" class="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 min-w-[80px]">Save</button>
                </div>
            </div>
        </UCard>
    </UModal>
</template>