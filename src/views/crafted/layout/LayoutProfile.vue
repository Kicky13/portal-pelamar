<template>
  <div>
    <NavbarLayout />
    <div class="container page-profile">
      <div class="row mt-5">
        <div class="col-sm-3">
          <AssideProfile />
        </div>
        <div class="col-sm-9">
          <div class="content flex-row-fluid">
            <router-view />
          </div>
        </div>
      </div>
    </div>
    <FooterLayout />
  </div>
</template>
<script>
import NavbarLayout from "@/views/crafted/layout/Navbar/PPNavbar.vue";
import FooterLayout from "@/views/crafted/layout/FooterProfile/PPFooter.vue";
import AssideProfile from "@/views/crafted/layout/AssideProfile/PPAssideProfile.vue";

export default {
  components: {
    FooterLayout,
    NavbarLayout,
    AssideProfile,
  },
};
</script>
