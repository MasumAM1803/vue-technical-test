<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 0
  }
});

import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

const { authenticateUser } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

const user = ref({
    username: 'emilys',
    password: 'emilyspass',
})
const router = useRouter();

const login = async () => {
    await authenticateUser(user.value)
    if (authenticated) {
        router.push('/');
    }
}
console.log(props.type)
</script>

<template>
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-4 md:mx-0 dark:bg-gray-800 dark:border-gray-700">
        <div v-if="type === 'login'" class="space-y-6 form">
            <div class="flex justify-center">
                <img src="/img/mam-logo.png" alt="Logo Apps" class="w-[80px]"/>
            </div>
            <h5 class="text-2xl font-medium capitalize text-center font-bold text-gray-900 dark:text-white">Vue Technical Test</h5>
            <div>
                <label for="username" class="block mb-2 text-sm font-medium capitalize text-gray-900 dark:text-white">username</label>
                <input v-model="user.username" type="username" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required />
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium capitalize text-gray-900 dark:text-white">password</label>
                <input v-model="user.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
            </div>
            <button type="submit" @click.prevent="login" class="w-full text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Login</button>
        </div>

        <div v-if="type === 'profile'" class="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-4 mt-6 rounded-full shadow-lg" src="/img/mam-logo.png" alt="Bonnie image"/>
            <h5 class="mb-1 text-sm font-medium text-gray-600 dark:text-white">created by</h5>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Ma'sum Abdul Matin</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Junior Software Developer</span>
            <div class="flex mt-4 md:mt-6">
                <a href="https://masumam.site/" target="_blank" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">WEB</a>
            </div>
        </div>
    </div>
</template>