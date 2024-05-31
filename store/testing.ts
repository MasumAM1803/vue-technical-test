import { defineStore } from "pinia";

export const useTestingsStore = defineStore('testings', {
    state: () => ({
        testings: [],
    }),
    actions: {
        async fetchTestings() {
            const { data }: any = await useFetch('https://dummyjson.com/test');
            if (data.value) {
                this.testings = data.value
            }
        }
    }
})