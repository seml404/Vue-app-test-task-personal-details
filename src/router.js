import { createRouter, createWebHistory } from "vue-router";
import PersonalDetailsForm from "./components/PersonalDetailsForm.vue";
import SavedDetails from "./components/SavedDetails.vue";

let routes = [
  {
    path: "/",
    name: "DetailsForm",
    component: PersonalDetailsForm,
  },
  {
    path: "/saved-details",
    name: "SavedDetails",
    component: SavedDetails,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes: routes,
});
