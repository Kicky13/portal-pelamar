<template>
  <div>
    <NavbarLayout />
    <div class="content flex-row-fluid">
      <router-view />
    </div>
    <FooterLayout />
  </div>
</template>
<script>
import NavbarLayout from "@/views/crafted/layout/Navbar/PPNavbar.vue";
import FooterLayout from "@/views/crafted/layout/FooterBar/PPFooter.vue";

export default {
  components: {
    FooterLayout,
    NavbarLayout,
  },
};
</script>
