<template>
  <div class="home">
    <h1>Home Party 🤭</h1>
    <a class="waves-effect waves-light btn-small" href="#">Wave</a>
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
