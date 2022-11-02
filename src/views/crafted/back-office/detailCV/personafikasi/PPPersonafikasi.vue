<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile">
          <div class="title-card">
            <span>Personifikasi</span>
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
                            :value="data.id"
                            id="defaultCheck1" />
                          <label class="form-check-label" for="defaultCheck1">
                            {{ data.name }}
                          </label>
                        </div>
                      </div>
                      <span v-show="personifikasiModule.validator.sosmed_linkedin" class="col-sm-10 text-danger">Wajib Memilih minimal 1.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="title-card">
            <span>Akun Sosial Media </span>
          </div>
          <div class="body-card">
            <div class="container personal">
              <div class="form-group row">
                <label
                  for="staticEmail"
                  class="col-sm-2 col-form-label personal__label"
                  >Facebook<span class="text-danger">*</span></label
                >
                <div class="col-sm-10">
                  <input
                    type="email"
                    v-model="personifikasiModule.formData.sosmed_facebook"
                    class="form-control personal__form"
                    id="inputPassword" />
                  <span v-show="personifikasiModule.validator.sosmed_facebook" class="col-sm-10 text-danger">Wajib Diisi.</span>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="staticEmail"
                  class="col-sm-2 col-form-label personal__label"
                  >Instagram<span class="text-danger">*</span></label
                >
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control personal__form"
                    v-model="personifikasiModule.formData.sosmed_instagram"
                    id="inputPassword" />
                  <span v-show="personifikasiModule.validator.sosmed_instagram" class="col-sm-10 text-danger">Wajib Diisi.</span>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="staticEmail"
                  class="col-sm-2 col-form-label personal__label"
                  >Twitter<span class="text-danger">*</span></label
                >
                <div class="col-sm-10">
                  <input
                    type="email"
                    v-model="personifikasiModule.formData.sosmed_twitter"
                    class="form-control personal__form"
                    id="inputPassword" />
                  <span v-show="personifikasiModule.validator.sosmed_twitter" class="col-sm-10 text-danger">Wajib Diisi.</span>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="staticEmail"
                  class="col-sm-2 col-form-label personal__label"
                  >LinkedIn<span class="text-danger">*</span></label
                >
                <div class="col-sm-10">
                  <input
                    type="email"
                    v-model="personifikasiModule.formData.sosmed_linkedin"
                    class="form-control personal__form"
                    id="inputPassword" />
                  <span v-show="personifikasiModule.validator.sosmed_linkedin" class="col-sm-10 text-danger">Wajib Diisi.</span>
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

export default {
  name: "BackOfficePengaturan",
  computed: {
    ...mapState({
      personifikasiModule: (state) => state.personifikasiModule.data,
    })
  },
  mounted() {
    this.getPersonifikasi();
    this.getBidangKeminatan();
  },
  methods: {
    ...mapActions('personifikasiModule', [
      'getPersonifikasi',
      'submitPersonifikasi',
      'getBidangKeminatan',
      'validateForm',
    ]),
    async submit() {
      const validating = await this.validateForm()
      console.log(validating)
      if (validating) {
        const submit = await this.submitPersonifikasi()
        if (submit) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Berhasil Disimpan!',
            showConfirmButton: false,
            timer: 1500,
          })
          this.router.push({ name: "ProfilePersonafikasi" });
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Something went wrong, please try again later!',
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
