<template>
  <div class="kid-details-container">
    <div class="input-container">
      <p class="input-title">Имя</p>
      <input type="text" v-model="kidName" @change="handleKidDetailsChange" />
    </div>
    <div class="input-container">
      <p class="input-title">Возраст</p>
      <input type="number" v-model="kidAge" @change="handleKidDetailsChange" />
    </div>
    <button type="button" class="btn btn-delete" @click="handleRemove">
      Удалить
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kidName: this.kidDetails.kidName,
      kidAge: this.kidDetails.kidAge,
    };
  },
  props: ["kidDetails", "idx"],
  methods: {
    // функция обработки ввода информации о детях
    handleKidDetailsChange() {
      this.$emit("kidDetailsChange", {
        idx: this.idx,
        name: this.kidName,
        age: this.kidAge,
      });
    },
    // функция обработки нажатия кнопки "Удалить"
    handleRemove() {
      this.$emit("removeKid", this.kidDetails.id);
    },
  },
};
</script>

<style scoped></style>
