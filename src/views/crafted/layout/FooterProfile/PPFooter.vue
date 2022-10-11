<template>
  <footer class="footer-profile">
    <div class="container">
      <div class="copyright">
        <div class="d-flex mb-3">
          <div class="company_name">
            Copyright 2022 Portal Pelamar BUMN | All Right Reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { footerWidthFluid } from "@/core/helpers/config";

export default defineComponent({
  name: "KTFooter",
  setup() {
    return {
      footerWidthFluid,
    };
  },
});
</script>
