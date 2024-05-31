import { useAuthStore } from "~/store/auth"

export default defineNuxtRouteMiddleware((to, from) => {
    const { authenticated } = storeToRefs(useAuthStore());
    const accessToken = useCookie('accessToken');

    if(accessToken.value) {
        authenticated.value = true;
    }

    if(accessToken.value && to?.name === 'login') {
        return navigateTo('/');
    }

    if(!accessToken.value && to?.name !== 'login') {
        abortNavigation();
        return navigateTo('/login');
    }
  })