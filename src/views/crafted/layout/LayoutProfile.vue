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
                      v-if="changeFoto"
                      :src="fotoUrl"
                    alt="" />
                    <img
                      v-else-if="changeFotoModule.userData.foto"
                      :src="changeFotoModule.userData.foto"
                      alt="" />
                    <img
                      v-else
                      :src="
                        require('@/assets/images/icon/ic_image_profile.png')
                      "
                      alt="" />
                  </div>
                  <div>
                    <div v-show="changeFoto" class="upload-btn-wrapper__PoP">
                      <button @click="cancelChange" class="btn__cancel">
                        <i class="fas fa-ban" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div v-show="changeFoto" class="upload-btn-wrapper__PoP">
                      <button @click="storeChange" class="btn__confirm">
                        <i class="fas fa-check" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div v-show="!changeFoto" class="upload-btn-wrapper__PoP">
                      <button @click="chooseFile()" class="btn__upload">
                        <input @change="onChangeFoto" ref="profilePic" type="file" name="profilePic" id="profilePic" accept="image/*" />
                        <i class="fas fa-edit" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                  <div class="informasi-profile">
                    <label for="">{{ infoUser.name }}</label>
                    <div class="email">{{ infoUser.email }}</div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="informasi-persentase d-flex align-items-center">
                    <div class="jabatan-dilamar text-center">
                      <label for="" class="total">{{ infoUser.jabatan_dilamar }}</label>
                      <p for="" class="wording">Jabatan Dilamar</p>
                    </div>
                    <div class="jabatan-dilamar text-center">
                      <label for="" class="total">{{ infoUser.progress_cv }}%</label>
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
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
export default {
  props: {
    titlePage: {
      type: String,
      default: null,
    },
  },
  computed: {
    ...mapState({
      changeFotoModule: (state) => state.changeFoto.data,
    })
  },
  data() {
    return {
      infoUser: {},
      changeFoto: false,
      profilePics: null,
      fotoUrl: null,
    }
  },
  async mounted() {
    await this.initPage()
  },
  methods: {
    ...mapActions('changeFoto', [
      'storeNewPic',
      'getProfilePic',
    ]),
    async initPage() {
      await this.getProfilePic()
      this.infoUser = JSON.parse(window.localStorage.getItem('user_info'))
    },
    onChangeFoto() {
      this.profilePic = this.$refs.profilePic.files[0]
      this.changeFoto = true
      this.fotoUrl = URL.createObjectURL(this.profilePic)
    },
    cancelChange() {
      this.$refs.profilePic.value = null
      this.changeFoto = false
      this.profilePic = null
      this.fotoUrl = null
    },
    chooseFile() {
      document.getElementById("profilePic").click();
    },
    async storeChange() {
      const formData = new FormData();
      formData.append('foto', this.profilePic)
      const res = await this.storeNewPic(formData)
      if (res) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Foto Berhasil Diubah!',
          showConfirmButton: false,
          timer: 1500,
        })
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Gagal Simpan, pastikan data yang anda masukkan sudah benar!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
      await this.getProfilePic()
      this.cancelChange()
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
