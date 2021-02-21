<template>
  <div class="profile">
    <div class="container profile__container">
      <h1>Профиль пользователя</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Profile',

  date: () => ({
    //
  }),

  methods: {
    ...mapActions({
      //
    }),
  },

  computed: {
    ...mapGetters({
      //
    }),
  },
};
</script>

<style lang="scss">
@import "../styles/vars", "../styles/mixins";

.profile {
  &__container {
    @include flex-column;
    padding-top: 44px;
  }
}
</style>
