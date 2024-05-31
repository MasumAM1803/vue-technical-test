import { defineStore } from "pinia";

interface UserPayloadInterface {
    username: string;
    password: string;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
    }),
    actions: {
        async authenticateUser({ username, password }: UserPayloadInterface) {
            console.log(username)
            console.log(password)
            const { data, pending }: any = await useFetch('https://dummyjson.com/auth/login', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    username,
                    password,
                    expiresInMins: 30,
                }
            });
            this.loading = pending;

            if (data.value) {
                const token = useCookie('token');
                token.value = data?.value?.token;
                this.authenticated = true;
            }
        },

        logoutUser() {
            const token = useCookie('token');
            this.authenticated = false;
            token.value = null;
        }
    }
})