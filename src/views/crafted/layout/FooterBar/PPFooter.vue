<template>
  <footer class="footer">
    <div class="container">
      <div class="row circle-footer">
        <div class="col-sm-4"></div>
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <img
            class="img-fluid"
            src="media/kbumn/images/icon/ic_footer.svg"
            alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-10">
          <div class="row">
            <div class="col-sm-4">
              <div class="content">
                <img
                  class="img-fluid"
                  src="media/kbumn/images/logo/lg_bumn.png"
                  alt="" />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="detail_footer">
                <label for="title-label">Hubungi Kami </label>
                <ul class="p-0">
                  <li>
                    <img src="media/kbumn/images/icon/ic_globe.svg" alt="" />
                    portalpelamar.bumn.go.id
                  </li>
                  <li>
                    <img src="media/kbumn/images/icon/ic_mail.svg" alt="" />
                    tanyapelamar@bumn.go.id
                  </li>
                  <li>
                    <img src="media/kbumn/images/icon/ic_message.svg" alt="" />
                    081238284482
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="detail_footer">
                <label for="title-label">Media Sosial</label>

                <ul class="p-0">
                  <li>@BUMNportalpelamar</li>
                  <li>@BUMNportalpelamar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div class="copyright">
        <div class="d-flex justify-content-center mb-3">
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
