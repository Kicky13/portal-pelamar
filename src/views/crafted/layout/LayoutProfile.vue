<template>
  <div>
    <NavbarLayout />
    <div class="container page-profile">
      <Informasi :titlePage="titlePage" />
      <div class="row mt-5">
        <div class="col-sm-2">
          <AssideProfile />
        </div>
        <div class="col-sm-10">
          <div class="content flex-row-fluid">
            <slot />
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
import Informasi from "@/views/crafted/layout/InformasiLayout/PPInformasi.vue";
export default {
  props: {
    titlePage: {
      type: String,
      default: null,
    },
  },
  components: {
    FooterLayout,
    NavbarLayout,
    AssideProfile,
    Informasi,
  },
};
</script>
