import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      personNameInStore: "",
      personAgeInStore: "",
      personKidsInStore: [],
    };
  },
  getters: {
    getPersonName(state) {
      return state.personNameInStore;
    },
    getPersonAge(state) {
      return state.personAgeInStore;
    },
    getPersonKids(state) {
      return state.personKidsInStore;
    },
  },
  mutations: {
    setPersonDetails(state, values) {
      state.personNameInStore = values.name;
      state.personAgeInStore = values.age;
      state.personKidsInStore = values.kids;
    },
  },
  actions: {},
});

export default store;

// { kidName: "", kidAge: "" }
