<template>
  <div>
    <router-link class="btn btn-back-previous" :to="linkPage">
        <i class="fas fa-angle-left	"></i>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "Button Back",
  props: {
    linkPage: String,
  },
};
</script>
