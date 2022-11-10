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
            <div class="dashboard-profile">
              <div class="row d-flex align-items-center">
                <div class="col-sm-6 d-flex align-items-center">
                  <div class="images-profile">
                    <img
                      :src="
                        require('@/assets/images/icon/ic_image_profile.png')
                      "
                      alt="" />
                   
                  </div>
                  <div class="upload-btn-wrapper__PoP">
                      <button class="btn__upload">
                        <i class="fas fa-edit" aria-hidden="true"></i>
                      </button>
                      <input type="file" name="myfile" />
                    </div>
                  <div class="informasi-profile">
                    <label for="">Nurul Jannah</label>
                    <div class="email">nama@gmail.com</div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="informasi-persentase d-flex align-items-center">
                    <div class="jabatan-dilamar text-center">
                      <label for="" class="total">2</label>
                      <p for="" class="wording">Jabatan Dilamar</p>
                    </div>
                    <div class="jabatan-dilamar text-center">
                      <label for="" class="total">100%</label>
                      <p for="" class="wording">Prosentase CV</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
