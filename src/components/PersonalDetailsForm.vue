<template>
  <div class="form-container">
    <form action="#" class="form" @submit.prevent="handleSubmit">
      <div class="section-part section-part-personal">
        <h2 class="section-title">Персональные данные</h2>
        <div class="input-container">
          <p class="input-title">Имя</p>
          <input type="text" v-model="personName" />
        </div>
        <div class="input-container">
          <p class="input-title">Возраст</p>
          <input type="number" v-model="personAge" />
        </div>
      </div>
      <div class="section-part">
        <div class="title-container">
          <h2 class="section-title">Дети (макс. 5)</h2>
          <button
            type="button"
            class="btn btn-add"
            v-if="showBtnAdd"
            @click="handleAddKid"
          >
            <span>+</span> Добавить ребенка
          </button>
        </div>
        <div class="kids-list-container" v-if="personKids.length > 0">
          <kid-details
            v-for="(item, idx) in personKids"
            :key="item.id"
            :kidDetails="item"
            :idx="idx"
            @kidDetailsChange="handleKidDetailsChange"
            @removeKid="handleRemoveKid"
          />
        </div>
      </div>
      <div class="form-btn-save-wrapper">
        <button class="btn btn-save" type="submit">Сохранить</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import KidDetails from "./KidDetails.vue";

export default {
  data() {
    return {
      personName: this.$store.getters.getPersonName,
      personAge: this.$store.getters.getPersonAge,
      personKids: this.$store.getters.getPersonKids,
    };
  },
  components: { KidDetails },
  computed: {
    showBtnAdd() {
      return this.personKids.length < 5;
    },
  },
  methods: {
    ...mapMutations(["setPersonDetails"]),
    handleAddKid() {
      this.personKids.push({ id: Math.random(), kidName: "", kidAge: "" });
    },
    handleSubmit() {
      this.setPersonDetails({
        name: this.personName,
        age: this.personAge,
        kids: this.personKids,
      });
      this.$router.push("/saved-details");
    },
    handleKidDetailsChange(value) {
      console.log(this.personKids[value.idx]);
      this.personKids[value.idx] = {
        ...this.personKids[value.idx],
        kidName: value.name,
        kidAge: value.age,
      };
    },
    handleRemoveKid(idx) {
      this.personKids = this.personKids.filter((kid) => kid.id !== idx);
    },
  },
};
</script>

<style scoped></style>
