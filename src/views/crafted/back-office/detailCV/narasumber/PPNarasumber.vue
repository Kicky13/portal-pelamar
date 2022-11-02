<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile">
          <div class="title-card d-flex align-items-center">
            <span
              >Pengalaman Sebagai Pembicara/Narasumber/Juri dalam 5 Tahun
              Terakhir</span
            >

            <div class="sub-title-card">
              acara terbesar / terpenting menurut anda
            </div>
          </div>
          <div class="body-card">
            <div class="narasumber">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label narasumber__label"
                      >Nama Acara<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="email"
                        class="form-control narasumber__form"
                        v-model="narasumberModule.formData.nama_acara"
                        id="inputPassword" />
                      <span v-show="narasumberModule.validator.nama_acara" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label narasumber__label"
                      >Tahun<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <select
                        class="custom_form_select w-50"
                        placeholder="Select..."
                        v-model="narasumberModule.formData.tahun"
                        as="select">
                        <option selected disabled value="">Pilih Salah Satu</option>
                        <option v-for="(tahun, index) in yearList" :value="tahun">{{ tahun }}</option>
                      </select>
                    </div>
                    <div class="col-sm-3"></div>
                    <span v-show="narasumberModule.validator.tahun" class="col-sm-9 text-danger">Wajib Memilih Salah satu.</span>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label narasumber__label"
                      >Jumlah Peserta<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="number"
                        class="form-control narasumber__form"
                        v-model="narasumberModule.formData.jumlah_peserta"
                        id="inputPassword" />
                      <span v-show="narasumberModule.validator.jumlah_peserta" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label narasumber__label"
                      >Penyelenggara<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control narasumber__form"
                        v-model="narasumberModule.formData.penyelenggara"
                        id="inputPassword" />
                      <span v-show="narasumberModule.validator.penyelenggara" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label narasumber__label"
                      >Lokasi<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control narasumber__form"
                        v-model="narasumberModule.formData.lokasi"
                        id="inputPassword" />
                      <span v-show="narasumberModule.validator.lokasi" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <button @click="handleSubmit" v-if="!narasumberModule.isSubmitLoading && narasumberModule.selectedRecordID == null" class="btn btn-primary-portal">
                      <i class="fas fa-plus"></i> Tambah Riwayat Pembicara
                    </button>
                    <button @click="handleUpdate" v-else-if="!narasumberModule.isSubmitLoading && narasumberModule.selectedRecordID != null" class="btn btn-primary-portal">
                      <i class="fas fa-edit"></i> Update Riwayat Pembicara
                    </button>
                    <button v-else class="btn btn-primary-portal">
                      <span class="indicator-label">Mohon Tunggu
                        <span
                          class="spinner-border spinner-border-sm align-middle ms-2">
                        </span>
                      </span>
                    </button>
                    <button @click="cancelUpdate" v-if="!narasumberModule.isSubmitLoading && narasumberModule.selectedRecordID != null" class="btn btn-danger-portal">
                      Batal
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
                    :loading="narasumberModule.isLoading"
                    :data="narasumberModule.listNarasumber"
                    :header="narasumberModule.column">
                    <template v-slot:nama_acara="{ row: listNarasumber }">
                      {{ listNarasumber.nama_acara }}
                    </template>
                    <template v-slot:tahun="{ row: listNarasumber }">
                      {{ listNarasumber.tahun }}
                    </template>
                    <template v-slot:jumlah_peserta="{ row: listNarasumber }">
                      {{ listNarasumber.jumlah_peserta }}
                    </template>
                    <template v-slot:penyelenggara="{ row: listNarasumber }">
                      {{ listNarasumber.penyelenggara }}
                    </template>
                    <template v-slot:lokasi="{ row: listNarasumber }">
                      {{ listNarasumber.lokasi }}
                    </template>
                    <template v-slot:action="{ row: listNarasumber }">
                      <button @click="getUpdateRecord(listNarasumber.id)" class="btn btn-warning">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button @click="deleteRecord(listNarasumber.id)" class="btn btn-danger">
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
                    <router-link to="#" class="btn btn-success-portal-soft">Selanjutnya</router-link>
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
      narasumberModule: (state) => state.narasumberModule.data,
    })
  },
  mounted() {
    this.getNarasumber();
    this.getYears();
  },
  methods: {
    ...mapActions('narasumberModule', [
      'getNarasumber',
      'getDetailNarasumber',
      'updateNarasumber',
      'deleteNarasumber',
      'storeNarasumber',
      'validateForm',
      'clearForm',
    ]),
    async handleSubmit() {
      const validateForm = await this.validateForm()
      if (validateForm) {
        const submit = await this.storeNarasumber()
        if (submit) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Berhasil Disimpan!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getNarasumber();
          this.clearForm();
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
    async getUpdateRecord(idRecord) {
      await this.getDetailNarasumber(idRecord)
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
      const deleteRecord = await this.deleteNarasumber(recordID)
        if (deleteRecord) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Berhasil Disimpan!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getNarasumber();
          this.clearForm();
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
    async handleUpdate() {
      const validateForm = await this.validateForm()
      if (validateForm) {
        const submit = await this.updateNarasumber()
        if (submit) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Berhasil Disimpan!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getNarasumber();
          this.clearForm();
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
      title: "Narasumber",
      yearList: [],
    };
  },
  components: {
    LayoutProfileAside,
    KTDatatable,
  },
};
</script>
