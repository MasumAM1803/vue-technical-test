<script setup lang="ts">
// const props = defineProps(['id'])
// import { storeToRefs } from 'pinia';
// import { useProductsStore } from '~/store/products';

// const { fetchProduct } = useProductsStore();
// const { product } = storeToRefs(useProductsStore());

// const user = ref({
//     id: props.id,
// })
// await fetchProduct(user.value)

const product = ref({
    title: '',
})

// const router = useRouter();
// const delete = async () => {
//     await fetchProduct(props.id)
//     if (authenticated) {
//         router.push('/product');
//     }
// }

// console.log(user.value.id)
// console.log(user.value.id)
</script>

<template>
    <div>
        <div id="delete-product-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div class="p-4 md:p-5 text-center">
                        <h3 class="text-lg font-semibold text-gray-500 dark:text-gray-400">
                            Product "name"
                        </h3>
                        <h3 class="mb-5 text-lg font-semibold text-gray-500 dark:text-gray-400">
                            will be deleted. Proceed
                        </h3>
                        <div class="flex items-center justify-end space-x-2 ">
                            <button data-modal-hide="delete-product-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 min-w-[80px]">Cancel</button>
                            <button type="button" class="text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800 min-w-[80px]">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>