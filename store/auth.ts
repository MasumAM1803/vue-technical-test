import { defineStore } from "pinia";

interface UserPayloadInterface {
    username: string;
    password: string;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
        user: null,
    }),
    actions: {
        async authenticateUser({ username, password }: UserPayloadInterface) {
            const { data, pending }: any = await useFetch('https://dummyjson.com/auth/login', {
                method: 'POST',
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

        async getUser() {
            const token = useCookie('token');
            if (token) {
                const { data }: any = await useFetch('https://dummyjson.com/auth/me', {
                    method: 'GET',
                    headers: { 
                        'Authorization': `Bearer ${token.value}`
                    },
                });

                if (data.value) {
                    this.user = data?.value;
                }
            }
        },

        logoutUser() {
            const token = useCookie('token');
            this.authenticated = false;
            token.value = null;
        }
    }
})