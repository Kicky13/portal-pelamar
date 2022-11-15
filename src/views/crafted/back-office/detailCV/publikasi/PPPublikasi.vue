<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile">
          <div class="title-card d-flex align-items-center">
            <span>Publikasi</span>

            <div class="d-flex align-items-center">
              <div class="sub-title-card">dalam 5 tahun terakhir</div>
              <div class="d-flex align-items-center">
                <i class="fas fa-check"></i> Ada
              </div>
              <div class="d-flex align-items-center">
                <i class="fas fa-times"></i>Tidak Ada
              </div>
            </div>
          </div>
          <div class="body-card">
            <div class="narasumber">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-2 col-form-label narasumber__label"
                      >Judul Publikasi<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        v-model="publikasiModule.formData.judul"
                        class="form-control narasumber__form"
                        id="inputPassword" />
                      <span v-show="publikasiModule.validator.judul" class="text-danger">Wajib Diisi.</span>  
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-2 col-form-label narasumber__label"
                      >Media Publikasi<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-10">
                      <input
                        type="email"
                        v-model="publikasiModule.formData.media"
                        class="form-control narasumber__form"
                        id="inputPassword" />
                      <span v-show="publikasiModule.validator.media" class="text-danger">Wajib Diisi.</span>  
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-2 col-form-label narasumber__label"
                      >Tahun<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-10">
                      <select
                        class="custom_form_select w-25"
                        placeholder="Select..."
                        v-model="publikasiModule.formData.tahun"
                        as="select">
                        <option selected disabled value="">Pilih Salah Satu</option>
                        <option v-for="(data, index) in yearList" :value="data">{{ data }}</option>
                      </select>
                    </div>
                    <div class="col-sm-2"></div>
                    <span v-show="publikasiModule.validator.tahun" class="col-sm-10 text-danger">Wajib Dipilih.</span>  
                  </div>
                 
                </div>
               
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <button @click="handleSubmit" v-if="!publikasiModule.isSubmitLoading && publikasiModule.selectedRecordID == null" class="btn btn-primary-portal">
                      <i class="fas fa-plus"></i> Tambah Publikasi
                    </button>
                    <button @click="handleUpdate" v-else-if="!publikasiModule.isSubmitLoading && publikasiModule.selectedRecordID != null" class="btn btn-primary-portal">
                      <i class="fas fa-plus"></i> Tambah Publikasi
                    </button>
                    <button v-else class="btn btn-primary-portal">
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
                    :data="publikasiModule.listPublikasi"
                    :header="publikasiModule.column">
                    <template v-slot:judul="{ row: data }">
                      {{ data.judul }}
                    </template>
                    <template v-slot:media="{ row: data }">
                      {{ data.media }}
                    </template>
                    <template v-slot:tahun="{ row: data }">
                      {{ data.tahun }}
                    </template>
                    <template v-slot:action="{ row: data }">
                      <button @click="getUpdateRecord(data.id)" class="btn btn-warning">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button @click="deleteRecord(data.id)" class="btn btn-danger">
                        <i class="fas fa-trash"></i>
                      </button>
                    </template>
                  </KTDatatable>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <router-link to="#" class="btn btn-transparent-portal-soft">Kembali</router-link>
                    <router-link to="/profile/detail-cv/narasumber" class="btn btn-success-portal-soft">Selanjutnya</router-link>
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
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default {
  name: "BackOfficeNarasumber",
  computed: {
    ...mapState({
      publikasiModule: (state) => state.publikasiModule.data,
    })
  },
  mounted() {
    this.getPublikasi();
    this.getYears();
  },
  methods: {
    ...mapActions('publikasiModule', [
      'getPublikasi',
      'getDetailPublikasi',
      'updatePublikasi',
      'deletePublikasi',
      'storePublikasi',
      'validateForm',
      'clearForm',
    ]),
    async handleSubmit() {
      const validateForm = await this.validateForm()
      if (validateForm) {
        const submit = await this.storePublikasi()
        if (submit) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Berhasil Disimpan!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getPublikasi();
          this.clearForm();
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
    async getUpdateRecord(idRecord) {
      await this.getDetailPublikasi(idRecord)
    },
    async deleteRecord(idRecord) {
      console.log(idRecord)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(() => {
        this.progressDelete(idRecord);
      })
    },
    async progressDelete(recordID) {
      const deleteRecord = await this.deletePublikasi(recordID)
        if (deleteRecord) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Berhasil Disimpan!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getPublikasi();
          this.clearForm();
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Gagal Simpan, pastikan data yang anda masukkan sudah benar!',
            showConfirmButton: false,
            timer: 1500,
          });
        }
    },
    async handleUpdate() {
      const validateForm = await this.validateForm()
      if (validateForm) {
        const submit = await this.updatePublikasi()
        if (submit) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Berhasil Disimpan!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getPublikasi();
          this.clearForm();
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
    cancelUpdate() {
      this.clearForm()
    },
    getYears() {
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      
      for (let i = 0; i < 5; i++) {
        let yearIndex = currentYear - i;
        this.yearList.push(yearIndex)
      }
      console.log(this.yearList)
    },
  },
  data() {
    return {
      title: "Publikasi",
      yearList: [],
    };
  },
  components: {
    LayoutProfileAside,
    KTDatatable,
  },
};
</script>
