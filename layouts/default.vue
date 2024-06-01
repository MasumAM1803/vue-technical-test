<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

const { getUser, refreshToken, logoutUser} = useAuthStore();
const { user, authenticated } = storeToRefs(useAuthStore());
await getUser();

const router = useRouter();
const logout = async () => {
    await logoutUser();
    if (authenticated.value === false) {
        router.push('/login');
    }
}
if (user === null) {
    await refreshToken();
}

const items = [
  [{
    slot: 'account',
    disabled: true
  }], [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: () => {logout()}
  }]
]
</script>

<template>
    <div>
        <nav class="fixed top-0 z-50 md:z-20 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
                <div class="flex items-center justify-between">
                    <div class="md:ms-64 flex items-center justify-start rtl:justify-end">
                        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span class="sr-only">Open sidebar</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                        <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white ms-2 md:me-24">Vue Technical Test</span>
                    </div>
                    <UDropdown v-if="user !== null" :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start'}">
                        <UAvatar :src="user.image" />

                        <template #account="{ item }">
                        <div class="text-left max-w-full">
                            <p>
                                {{ user.firstName }} {{ user.lastName }}
                            </p>
                            <p class="font-medium text-gray-900 dark:text-white break-words">
                                {{ user.email }}
                            </p>
                        </div>
                        </template>

                        <template #item="{ item }">
                        <span class="truncate">{{ item.label }}</span>
                        <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
                        </template>
                    </UDropdown>
                </div>
            </div>
        </nav>

        <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 md:pt-3 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul class="space-y-2 font-medium">
                    <li>
                        <NuxtLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
                            </svg>
                            <span class="ms-3">Home</span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/product" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z"/>
                            </svg>
                            <span class="flex-1 ms-3 whitespace-nowrap">Product</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </aside>

        <div class="p-4 sm:ml-64">
            <div class="p-4 rounded-lg mt-14">
                <slot />
            </div>
        </div>
        
        <UModals />
    </div>
  </template>