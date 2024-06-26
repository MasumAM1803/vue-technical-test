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
                    expiresInMins: 30 * 60,
                }
            });
            this.loading = pending;

            if (data.value) {
                const accessToken = useCookie('accessToken');
                accessToken.value = data?.value?.token;
                this.authenticated = true;
            }
        },

        async refreshToken() {
            const accessToken = useCookie('accessToken');
            if (accessToken) {
                const { data }: any = await useFetch('https://dummyjson.com/auth/refresh', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${accessToken.value}`
                    },
                    body: {
                        expiresInMins: 30 * 60,
                    }
                });

                if (data.value) {
                    const accessToken = useCookie('accessToken');
                    accessToken.value = data?.value?.token;
                }
            }
        },

        async getUser() {
            const accessToken = useCookie('accessToken');
            if (accessToken) {
                const { data }: any = await useFetch('https://dummyjson.com/auth/me', {
                    method: 'GET',
                    headers: { 
                        'Authorization': `Bearer ${accessToken.value}`
                    },
                });

                if (data.value) {
                    this.user = data?.value;
                } 
            }
        },

        logoutUser() {
            const accessToken = useCookie('accessToken');
            this.authenticated = false;
            accessToken.value = null;
        }
    }
})