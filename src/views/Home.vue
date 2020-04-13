<template>
  <div class="home">
    <h1 class="home__title">Home Party 🤭</h1>
    <a class="home__button waves-effect waves-light btn-small indigo" href="#"
      >パーティーを始める</a
    >
  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.min.js';

export default {
  name: 'Home',
  components: {},
  mounted() {
    M.AutoInit();
  }
};
</script>

<style lang="scss" scoped>
.home {
  &__title {
    font-size: 24px;
    margin-bottom: 16px;
  }
}
</style>
