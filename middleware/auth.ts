import { useAuthStore } from "~/store/auth"

export default defineNuxtRouteMiddleware((to, from) => {
    const { authenticated } = storeToRefs(useAuthStore());
    const token = useCookie('token');

    if(token.value) {
        authenticated.value = true;
    }

    if(token.value && to?.name === 'login') {
        return navigateTo('/product');
    }

    if(!token.value && to?.name !== 'login') {
        abortNavigation();
        return navigateTo('/login');
    }
  })