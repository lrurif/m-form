import { defineStore, StoreDefinition } from "pinia";

type state = {
    userName: string
}
type getters = {
}
type actions = {
}
const useUserStore: StoreDefinition<
"user",
    state,
    getters,
    actions
> = defineStore("user", {
    state: () => {
        return {
            userName: "11",
        };
    }
});
export default useUserStore;
