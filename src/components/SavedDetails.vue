<template>
  <div>
    <div>saved details</div>
    <p>{{ personNameInStore }}</p>
    <p>{{ personAgeInStore }}</p>
    <div v-for="kid in personKidsInStore" :key="kid">
      <p>{{ kid.kidName }}</p>
      <p>{{ kid.kidAge }}</p>
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
