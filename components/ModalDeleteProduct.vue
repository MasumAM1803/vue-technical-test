<script setup lang="ts">
import { ModalDeleteProduct } from '#components';
import { storeToRefs } from 'pinia';
import { useProductsStore } from '~/store/products';

const modal = useModal()
const { deleteProduct } = useProductsStore();
const { isDeleted } = storeToRefs(useProductsStore());
const props = defineProps({
  id: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    default: ''
  }
});
const productId = ref({
    id: props.id,
    title: props.title,
})


const router = useRouter();
const confirm = async () => {
    await deleteProduct(productId.value)
    if (isDeleted) {
        alert('Deleted Product Successfully')
        modal.close()
    }
}

const closeModal = () => {
    modal.close()
}

// console.log(product.value)
</script>

<template>
    <UModal>
        <UCard>
            <div class="p-4 md:p-5 text-center">
                <h3 class="text-lg font-semibold text-gray-500 dark:text-gray-400">
                    Product "{{ title }}"
                </h3>
                <h3 class="mb-5 text-lg font-semibold text-gray-500 dark:text-gray-400">
                    will be deleted. Proceed
                </h3>
                <div class="flex items-center justify-end space-x-2 ">
                    <button @click.prevent="closeModal()" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 min-w-[80px]">Cancel</button>
                    <button @click.prevent="confirm()" type="button" class="text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800 min-w-[80px]">Delete</button>
                </div>
            </div>
        </UCard>
    </UModal>
</template>