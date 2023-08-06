import { defineStore, StoreDefinition } from "pinia";

type state = {
    userName: string
}
type getters = {
    spUserName: (arg: state) => string
}
type actions = {
    run: () => Promise<number>,
}
const useStore: StoreDefinition<
"main",
    state,
    getters,
    actions
> = defineStore("main", {
    state: () => {
        return {
            userName: "11",
        };
    },
    getters: {
        spUserName: (state) => {
            return state.userName + "123"
        }
    },
    actions: {
        async run() {
            return 123;
        }
    }
});
export default useStore;
