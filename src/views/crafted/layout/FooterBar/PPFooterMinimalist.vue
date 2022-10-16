<template>
    <footer class="footer">
      <div class="container">
        <div class="row circle-footer">
          <div class="col-sm-4">
            <img
              class="img-fluid"
              src="media/kbumn/images/icon/ic_footer.svg"
              alt="" />
          </div>
        </div>
        <div class="copyright">
          <div class="d-flex justify-content-start mb-3">
            <div style="font-size: 36; color: white;">
              Copyright @2022 - Portal Pelamar BUMN
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
  