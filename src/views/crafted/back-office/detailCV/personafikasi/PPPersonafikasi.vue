<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile">
          <div class="title-card">
            <span class="title__general">Personifikasi</span>
          </div>
          <div class="body-card">
            <div class="container personal">
              <div class="">
                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-form-label personal__label"
                    >Nilai Pribadi<span class="text-danger">*</span>
                  </label>
                  <div class="col-sm-10">
                    <textarea
                      name=""
                      id=""
                      rows="10"
                      v-model="personifikasiModule.formData.nilai_pribadi"
                      class="w-100 custom_textarea">
                    </textarea>
                    <span v-show="personifikasiModule.validator.nilai_pribadi" class="col-sm-10 text-danger">Wajib Diisi.</span>
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-form-label personal__label"
                    >Visi Pribadi<span class="text-danger">*</span>
                  </label>
                  <div class="col-sm-10">
                    <textarea
                      name=""
                      id=""
                      rows="10"
                      v-model="personifikasiModule.formData.visi_pribadi"
                      class="w-100 custom_textarea">
                    </textarea>
                    <span v-show="personifikasiModule.validator.visi_pribadi" class="col-sm-10 text-danger">Wajib Diisi.</span>
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="inputPassword"
                    class="col-sm-2 col-form-label personal__label"
                    >Aspirasi Bidang Keminatan<span class="text-danger">*</span>
                  </label>
                  <div class="col-sm-10">
                    <div class="row">
                      <div v-for="(data, index) in personifikasiModule.listMinat" class="col-sm-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            v-model="personifikasiModule.formData.minat"
                            :value="data.id"
                            :id="'defaultCheck'+index" />
                          <label class="form-check-label" for="defaultCheck1">
                            {{ data.name }}
                          </label>
                        </div>
                      </div>
                      <span v-show="personifikasiModule.validator.minat" class="col-sm-10 text-danger">Wajib Memilih minimal 1.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="title-card">
            <span class="title__general">Akun Sosial Media (<i>Silakan isi minimal 1</i>)</span>
          </div>
          <div class="body-card">
            <div class="container personal">
              <div class="form-group row">
                <label
                  for="staticEmail"
                  class="col-sm-2 col-form-label personal__label"
                  >Facebook</label
                >
                <div class="col-sm-10">
                  <input
                    type="email"
                    v-model="personifikasiModule.formData.sosmed_facebook"
                    class="form-control personal__form"
                    id="inputPassword" />
                  <span v-show="personifikasiModule.validator.sosmed" class="col-sm-10 text-danger">Salah Satu Wajib Diisi.</span>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="staticEmail"
                  class="col-sm-2 col-form-label personal__label"
                  >Instagram</label
                >
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control personal__form"
                    v-model="personifikasiModule.formData.sosmed_instagram"
                    id="inputPassword" />
                  <span v-show="personifikasiModule.validator.sosmed" class="col-sm-10 text-danger">Salah Satu Wajib Diisi.</span>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="staticEmail"
                  class="col-sm-2 col-form-label personal__label"
                  >Twitter</label
                >
                <div class="col-sm-10">
                  <input
                    type="email"
                    v-model="personifikasiModule.formData.sosmed_twitter"
                    class="form-control personal__form"
                    id="inputPassword" />
                  <span v-show="personifikasiModule.validator.sosmed" class="col-sm-10 text-danger">Salah Satu Wajib Diisi.</span>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="staticEmail"
                  class="col-sm-2 col-form-label personal__label"
                  >LinkedIn</label
                >
                <div class="col-sm-10">
                  <input
                    type="email"
                    v-model="personifikasiModule.formData.sosmed_linkedin"
                    class="form-control personal__form"
                    id="inputPassword" />
                  <span v-show="personifikasiModule.validator.sosmed" class="col-sm-10 text-danger">Salah Satu Wajib Diisi.</span>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <router-link to="#" class="btn btn-transparent-portal-soft">
                      Kembali
                    </router-link>
                    <button v-if="!personifikasiModule.isSubmitLoading" @click="submit" class="btn btn-success-portal-soft">
                      <span class="indicator-label">Selanjutnya</span>
                    </button>
                    <button v-else disabled class="btn btn-success-portal-soft">
                      <span class="indicator-label">Mohon Tunggu
                        <span
                          class="spinner-border spinner-border-sm align-middle ms-2">
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutProfileAside>
</template>
<script>
import LayoutProfileAside from "@/views/crafted/layout/LayoutProfile.vue";
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useRouter } from "vue-router";

export default {
  name: "BackOfficePengaturan",
  computed: {
    ...mapState({
      personifikasiModule: (state) => state.personifikasiModule.data,
    })
  },
  setup() {
    const router = useRouter();
    return {
      router
    }
  },
  mounted() {
    this.getPersonifikasi();
    this.getBidangKeminatan();
  },
  methods: {
    ...mapActions('personifikasiModule', [
      'getPersonifikasi',
      'storePersonifikasi',
      'getBidangKeminatan',
      'validateForm',
      'clearForm',
    ]),
    async submit() {
      const validating = await this.validateForm()
      console.log(this.personifikasiModule.formData)
      if (validating) {
        const submit = await this.storePersonifikasi()
        if (submit) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Berhasil Disimpan!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.clearForm();
          this.getPersonifikasi();
          this.router.push({ name: "ProfileRiwayatPekerjaan" });
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Gagal Simpan, pastikan data yang anda masukkan sudah benar!',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    },
  },
  data() {
    return {
      title: "Personifikasi",
    };
  },

  components: {
    LayoutProfileAside,
  },
};
</script>
