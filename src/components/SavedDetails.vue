<template>
  <div class="saved-details-container">
    <div class="section-part section-part-personal">
      <h2 class="section-title">Персональные данные</h2>
      <p class="text-main" v-if="personNameInStore && personAgeInStore">
        {{ personNameInStore }}, {{ personAgeInStore }} лет
      </p>
    </div>
    <div class="section-part section-part-kids">
      <h2 class="section-title">Дети</h2>
      <div
        class="saved-details-kid"
        v-for="kid in personKidsInStore"
        :key="kid.id"
      >
        <p class="text-main">{{ kid.kidName }}, {{ kid.kidAge }} лет</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["personNameInStore", "personAgeInStore", "personKidsInStore"]),
  },
};
</script>

<style lang="scss" scoped></style>
