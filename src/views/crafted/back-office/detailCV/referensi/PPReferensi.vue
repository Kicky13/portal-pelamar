<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile">
          <div class="title-card d-flex align-items-center">
            <span>Referensi</span>

            <div class="sub-title-card">
              berasal dari pihak internal maupun eksternal perusahaan
            </div>
          </div>
          <div class="body-card">
            <div class="referensi">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Nama<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="dataReferensiModule.formData.nama_ref"
                        id="inputNamaRef" />
                      <span v-show="dataReferensiModule.validator.nama_ref" class="text-danger">Wajib Diisi.</span> 
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Jabatan<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="dataReferensiModule.formData.jabatan"
                        id="inputJabatan" />
                      <span v-show="dataReferensiModule.validator.jabatan" class="text-danger">Wajib Diisi.</span> 
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Perusahaan<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="dataReferensiModule.formData.perusahaan"
                        id="inputPerusahaan" />
                      <span v-show="dataReferensiModule.validator.perusahaan" class="text-danger">Wajib Diisi.</span> 
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >No Handphone<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9 d-flex align-items-center">
                      <div class="flag-id">
                        <div class="flag-red"></div>
                        <div class="flag-white"></div>
                      </div>
                      <label for="" class="number-id">+62</label>
                      <input
                        type="number"
                        class="form-control personal__form"
                        v-model="dataReferensiModule.formData.no_hp"
                        id="inputNoHp" />
                    </div>
                    <div class="col-sm-3"></div><div class="col-sm-9" v-show="dataReferensiModule.validator.no_hp"><span class="text-danger">Wajib Diisi.</span></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <button v-if="!dataReferensiModule.isLoading && dataReferensiModule.idReferensi == 0" @click="submit" class="btn btn-primary-portal">
                      <i class="fas fa-plus"></i> Tambah Referensi
                    </button>
                    <button v-else-if="!dataReferensiModule.isLoading && dataReferensiModule.idReferensi != 0" @click="update" class="btn btn-primary-portal">
                      <i class="fas fa-arrow-circle"></i> Update Referensi
                    </button>
                    <button v-else @click="submit" disabled class="btn btn-primary-portal">
                      <span class="indicator-label">Mohon Tunggu
                        <span
                          class="spinner-border spinner-border-sm align-middle ms-2">
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <KTDatatable
                    class="text-center"
                    @on-sort="sort"
                    @on-items-select="onItemSelect"
                    :loading="dataReferensiModule.isLoading"
                    :data="dataReferensiModule.listReferensi"
                    :header="dataReferensiModule.tableHeader">
                    <template v-slot:nama="{ row: listReferensi }">
                      {{ listReferensi.nama_ref }}
                    </template>
                    <template v-slot:jabatan="{ row: listReferensi }">
                      {{ listReferensi.jabatan }}
                    </template>
                    <template v-slot:perusahaan="{ row: listReferensi }">
                      {{ listReferensi.perusahaan }}
                    </template>
                    <template v-slot:no_hp="{ row: listReferensi }">
                      {{ listReferensi.no_hp }}
                    </template>
                    <template v-slot:action="{ row: listReferensi }">
                      <button @click="edit(listReferensi.id)" class="btn btn-warning">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button @click="konfirmasiDelete(listReferensi.id)" class="btn btn-danger">
                        <i class="fas fa-trash"></i>
                      </button>
                    </template>
                  </KTDatatable>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <router-link to="#" class="btn btn-transparent-portal-soft"
                      >Kembali</router-link
                    >
                    <router-link to="/profile/resume-cv" class="btn btn-success-portal-soft">Selanjutnya</router-link>
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
import KTDatatable from "@/components/kt-datatable/KTDataTable.vue";
import { Field, ErrorMessage } from "vee-validate";
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default {
  name: "BackOfficeReferensi",
  data() {
    return {
      title: "Data Referensi",
    };
  },
  computed: {
    ...mapState({
      dataReferensiModule: (state) => state.dataReferensiModule.data,
    })
  },
  components: {
    LayoutProfileAside,
    Field,
    ErrorMessage,
  },
  mounted() {
    this.getListReferensi(),
    this.cleanForm()
  },
  methods: {
    ...mapActions('dataReferensiModule', [
      'getListReferensi',
      'getReferensiById',
      'submitForm',
      'updateForm',
      'deleteReferensi',
      'validateForm',
      'cleanForm'
    ]),
    async submit() {
      const validateForm = await this.validateForm()
      if (validateForm) {
        const submit = await this.submitForm()
        if (submit) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Berhasil Disimpan!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getListReferensi();
          this.cleanForm();
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
    async edit(id){
      this.$store.commit('dataReferensiModule/changeDataReferensi', {
        idReferensi: id
      })
      await this.getReferensiById()
    },
    async update() {
      const validateForm = await this.validateForm()
      if (validateForm) {
        const update = await this.updateForm()
        if (update) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Berhasil Diubah!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getListReferensi();
          this.cleanForm();
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
    async delReferensi(id) {
      this.$store.commit('dataReferensiModule/changeDataReferensi', {
        idReferensi: id
      })
      const del = await this.deleteReferensi()
      if (del) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Data Berhasil Dihapus!',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getListReferensi();
        this.cleanForm();
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Something went wrong, please try again later!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },
    konfirmasiDelete(id){
      Swal.fire({
        title: "Hapus data referensi ini?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Hapus"
      }).then((result) => {
        if (result.value) {
          this.delReferensi(id);
        }
      });
    }
  },

  components: {
    LayoutProfileAside,
    KTDatatable,
  },
};
</script>
