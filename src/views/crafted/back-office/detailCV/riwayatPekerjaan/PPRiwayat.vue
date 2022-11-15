<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile">
          <div class="title-card d-flex align-items-center">
            <span>Riwayat Jabatan/Pekerjaan</span>
          </div>
          <div class="body-card">
            <div class="referensi">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-2 col-form-label personal__label"
                      >Jabatan<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="riwayatPekerjaanModule.formData1.jabatan"
                        id="inputJabatan" />
                      <span v-show="riwayatPekerjaanModule.validator1.jabatan" class="text-danger">Wajib Diisi.</span> 
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6">
                      <div class="row">
                        <label
                          for="staticEmail"
                          class="col-sm-4 personal__label"
                          >Tanggal Mulai<span class="text-danger">*</span></label
                        >
                        <div class="col-sm-8">
                          <input
                            type="date"
                            class="form-control personal__form"
                            v-model="riwayatPekerjaanModule.formData1.tanggal_mulai"
                            id="inputTglMulai" />
                          <span v-show="riwayatPekerjaanModule.validator1.tanggal_mulai" class="text-danger">Wajib Diisi.</span> 
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="row">
                        <label
                          for="staticEmail"
                          class="col-sm-4 personal__label"
                          >Tanggal Akhir<span class="text-danger">*</span></label
                        >
                        <div class="col-sm-8">
                          <input
                            type="date"
                            class="form-control personal__form"
                            v-model="riwayatPekerjaanModule.formData1.tanggal_akhir"
                            id="inputTglAkhir" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-2 personal__label"
                      >Tupoksi<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-10">
                      <textarea
                        class="form-control personal__form"
                        style="min-height:100px !important;"
                        v-model="riwayatPekerjaanModule.formData1.tupoksi"
                        id="inputJabatan">
                      </textarea>
                      <span v-show="riwayatPekerjaanModule.validator1.tupoksi" class="text-danger">Wajib Diisi.</span> 
                      <i style="opacity: 0.8;">Tidak lebih dari 360 karakter</i>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Nama Instansi<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="riwayatPekerjaanModule.formData1.nama_instansi"
                        id="nama_instansi" />
                      <span v-show="riwayatPekerjaanModule.validator1.nama_instansi" class="text-danger">Wajib Diisi.</span> 
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Bidang Jabatan<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <select
                        class="custom_form_select w-100"
                        placeholder="Select..."
                        as="select"
                        v-model="riwayatPekerjaanModule.formData1.id_bidang_jabatan"
                        name="bidang_jabatan">
                        <option selected value="">Pilih Salah Satu</option>
                        <option
                          v-for="(bidang, index) in riwayatPekerjaanModule.listMinat"
                          :value="bidang.id"
                          :key="index">
                          {{ bidang.name }}
                        </option>
                      </select>
                      <span v-show="riwayatPekerjaanModule.validator1.id_bidang_jabatan" class="text-danger">Wajib Diisi.</span> 
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 personal__label"
                      >Achievement<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <textarea
                        class="form-control personal__form"
                        style="min-height:100px !important;"
                        v-model="riwayatPekerjaanModule.formData1.achievement"
                        id="inputJabatan">
                      </textarea>
                      <span v-show="riwayatPekerjaanModule.validator1.achievement" class="text-danger">Wajib Diisi.</span> 
                      <i style="opacity: 0.8;">Tidak lebih dari 360 karakter</i>
                      <input
                        type="hidden"
                        v-model="riwayatPekerjaanModule.formData1.status_dewan"
                        id="status_dewan" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <button v-if="!riwayatPekerjaanModule.isLoading1 && riwayatPekerjaanModule.idPekerjaan == 0" @click="submit1" class="btn btn-primary-portal">
                      <i class="fas fa-plus"></i> Tambah
                    </button>
                    <button v-else-if="!riwayatPekerjaanModule.isLoading1 && riwayatPekerjaanModule.idPekerjaan != 0" @click="update1" class="btn btn-primary-portal">
                      <i class="fas fa-arrow-circle"></i> Update
                    </button>
                    <button v-else @click="submit1" disabled class="btn btn-primary-portal">
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
                    :loading="riwayatPekerjaanModule.isLoading1"
                    :data="riwayatPekerjaanModule.listPekerjaan1"
                    :header="riwayatPekerjaanModule.tableHeader">
                    <template v-slot:jabatan="{ row: listPekerjaan1 }">
                      {{ listPekerjaan1.jabatan }}<br>
                      {{ listPekerjaan1.nama_instansi }}
                    </template>
                    <template v-slot:tanggal_mulai="{ row: listPekerjaan1 }">
                      {{ formatDate(listPekerjaan1.tanggal_mulai) }}
                    </template>
                    <template v-slot:tanggal_akhir="{ row: listPekerjaan1 }">
                      {{ formatDate(listPekerjaan1.tanggal_akhir) }}
                    </template>
                    <template v-slot:tupoksi="{ row: listPekerjaan1 }">
                      {{ listPekerjaan1.tupoksi }}
                    </template>
                    <template v-slot:achievement="{ row: listPekerjaan1 }">
                      {{ listPekerjaan1.achievement }}
                    </template>
                    <template v-slot:bidang_jabatan="{ row: listPekerjaan1 }">
                      {{ listPekerjaan1.bidang.name }}
                    </template>
                    <template v-slot:action="{ row: listPekerjaan1 }">
                      <button @click="edit1(listPekerjaan1.id)" class="btn btn-warning">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button @click="konfirmasiDelete(listPekerjaan1.id, 0)" class="btn btn-danger">
                        <i class="fas fa-trash"></i>
                      </button>
                    </template>
                  </KTDatatable>
                </div>
              </div>
            </div>
          </div>
          <div>
            <hr>
          </div>
          <div class="title-card d-flex align-items-center">
            <span>Penugasan yang berkaitan dengan Dewan Komisaris/Dewan Pengawas</span>
          </div>
          <div class="body-card">
            <div class="referensi">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-2 col-form-label personal__label"
                      >Jabatan<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="riwayatPekerjaanModule.formData2.jabatan"
                        id="inputJabatan" />
                      <span v-show="riwayatPekerjaanModule.validator2.jabatan" class="text-danger">Wajib Diisi.</span> 
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6">
                      <div class="row">
                        <label
                          for="staticEmail"
                          class="col-sm-4 personal__label"
                          >Tanggal Mulai<span class="text-danger">*</span></label
                        >
                        <div class="col-sm-8">
                          <input
                            type="date"
                            class="form-control personal__form"
                            v-model="riwayatPekerjaanModule.formData2.tanggal_mulai"
                            id="inputTglMulai" />
                          <span v-show="riwayatPekerjaanModule.validator2.tanggal_mulai" class="text-danger">Wajib Diisi.</span> 
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="row">
                        <label
                          for="staticEmail"
                          class="col-sm-4 personal__label"
                          >Tanggal Akhir<span class="text-danger">*</span></label
                        >
                        <div class="col-sm-8">
                          <input
                            type="date"
                            class="form-control personal__form"
                            v-model="riwayatPekerjaanModule.formData2.tanggal_akhir"
                            id="inputTglAkhir" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-2 personal__label"
                      >Tupoksi<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-10">
                      <textarea
                        class="form-control personal__form"
                        style="min-height:100px !important;"
                        v-model="riwayatPekerjaanModule.formData2.tupoksi"
                        id="inputJabatan">
                      </textarea>
                      <span v-show="riwayatPekerjaanModule.validator2.tupoksi" class="text-danger">Wajib Diisi.</span> 
                      <i style="opacity: 0.8;">Tidak lebih dari 360 karakter</i>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Nama Instansi<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="riwayatPekerjaanModule.formData2.nama_instansi"
                        id="nama_instansi" />
                      <span v-show="riwayatPekerjaanModule.validator2.nama_instansi" class="text-danger">Wajib Diisi.</span> 
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Bidang Jabatan<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <select
                        class="custom_form_select w-100"
                        placeholder="Select..."
                        as="select"
                        v-model="riwayatPekerjaanModule.formData2.id_bidang_jabatan"
                        name="bidang_jabatan">
                        <option selected value="">Pilih Salah Satu</option>
                        <option
                          v-for="(bidang, index) in riwayatPekerjaanModule.listMinat"
                          :value="bidang.id"
                          :key="index">
                          {{ bidang.name }}
                        </option>
                      </select>
                      <span v-show="riwayatPekerjaanModule.validator2.id_bidang_jabatan" class="text-danger">Wajib Diisi.</span> 
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 personal__label"
                      >Achievement<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <textarea
                        class="form-control personal__form"
                        style="min-height:100px !important;"
                        v-model="riwayatPekerjaanModule.formData2.achievement"
                        id="inputJabatan">
                      </textarea>
                      <span v-show="riwayatPekerjaanModule.validator2.achievement" class="text-danger">Wajib Diisi.</span> 
                      <i style="opacity: 0.8;">Tidak lebih dari 360 karakter</i>
                      <input
                        type="hidden"
                        v-model="riwayatPekerjaanModule.formData2.status_dewan"
                        id="status_dewan" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <button v-if="!riwayatPekerjaanModule.isLoading2 && riwayatPekerjaanModule.idPekerjaan == 0" @click="submit2" class="btn btn-primary-portal">
                      <i class="fas fa-plus"></i> Tambah
                    </button>
                    <button v-else-if="!riwayatPekerjaanModule.isLoading2 && riwayatPekerjaanModule.idPekerjaan != 0" @click="update2" class="btn btn-primary-portal">
                      <i class="fas fa-arrow-circle"></i> Update
                    </button>
                    <button v-else @click="submit2" disabled class="btn btn-primary-portal">
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
                    :loading="riwayatPekerjaanModule.isLoading2"
                    :data="riwayatPekerjaanModule.listPekerjaan2"
                    :header="riwayatPekerjaanModule.tableHeader">
                    <template v-slot:jabatan="{ row: listPekerjaan2 }">
                      {{ listPekerjaan2.jabatan }}<br>
                      {{ listPekerjaan2.nama_instansi }}
                    </template>
                    <template v-slot:tanggal_mulai="{ row: listPekerjaan2 }">
                      {{ formatDate(listPekerjaan2.tanggal_mulai) }}
                    </template>
                    <template v-slot:tanggal_akhir="{ row: listPekerjaan2 }">
                      {{ formatDate(listPekerjaan2.tanggal_akhir) }}
                    </template>
                    <template v-slot:tupoksi="{ row: listPekerjaan2 }">
                      {{ listPekerjaan2.tupoksi }}
                    </template>
                    <template v-slot:achievement="{ row: listPekerjaan2 }">
                      {{ listPekerjaan2.achievement }}
                    </template>
                    <template v-slot:bidang_jabatan="{ row: listPekerjaan2 }">
                      {{ listPekerjaan2.bidang.name }}
                    </template>
                    <template v-slot:action="{ row: listPekerjaan2 }">
                      <button @click="edit2(listPekerjaan2.id)" class="btn btn-warning">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button @click="konfirmasiDelete(listPekerjaan2.id, 1)" class="btn btn-danger">
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
                    <router-link to="/profile/detail-cv/keanggotaan-organisasi" class="btn btn-success-portal-soft">Selanjutnya</router-link>
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
  name: "BackOfficePekerjaan",
  data() {
    return {
      title: "Data Riwayat Pekerjaan",
    };
  },
  computed: {
    ...mapState({
      riwayatPekerjaanModule: (state) => state.riwayatPekerjaanModule.data,
    })
  },
  components: {
    LayoutProfileAside,
    Field,
    ErrorMessage,
  },
  mounted() {
    this.getListPekerjaan1(),
    this.getListPekerjaan2(),
    this.getBidangKeminatan(),
    this.cleanForm1(),
    this.cleanForm2()
  },
  methods: {
    ...mapActions('riwayatPekerjaanModule', [
      'getBidangKeminatan',
      'getListPekerjaan1',
      'getListPekerjaan2',
      'getPekerjaanById',
      'submitForm',
      'updateForm',
      'deletePekerjaan',
      'validateForm',
      'cleanForm1',
      'cleanForm2'
    ]),
    formatDate(tanggal) {
      let nd = new Date(tanggal).toLocaleDateString('id-id', { day:"numeric", year:"numeric", month:"long"});
      return nd;
    },
    async submit1() {
      this.$store.commit('riwayatPekerjaanModule/changeDataPekerjaan', {
        statusDewan: 0
      })
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
          this.getListPekerjaan1();
          this.cleanForm1();
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
    async edit1(id){
      this.$store.commit('riwayatPekerjaanModule/changeDataPekerjaan', {
        statusDewan: 0,
        idPekerjaan: id
      })
      await this.getPekerjaanById()
    },
    async update1() {
      this.$store.commit('riwayatPekerjaanModule/changeDataPekerjaan', {
        statusDewan: 0
      })
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
          this.getListPekerjaan1();
          this.cleanForm1();
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
    async delPekerjaan1(id) {
      this.$store.commit('riwayatPekerjaanModule/changeDataPekerjaan', {
        statusDewan: 0,
        idPekerjaan: id
      })
      const del = await this.deletePekerjaan()
      if (del) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Data Berhasil Dihapus!',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getListPekerjaan1();
        this.cleanForm1();
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
    async submit2() {
      this.$store.commit('riwayatPekerjaanModule/changeDataPekerjaan', {
        statusDewan: 1
      })
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
          this.getListPekerjaan2();
          this.cleanForm2();
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
    async edit2(id){
      this.$store.commit('riwayatPekerjaanModule/changeDataPekerjaan', {
        statusDewan: 1,
        idPekerjaan: id
      })
      await this.getPekerjaanById()
    },
    async update2() {
      this.$store.commit('riwayatPekerjaanModule/changeDataPekerjaan', {
        statusDewan: 1
      })
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
          this.getListPekerjaan2();
          this.cleanForm2();
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
    async delPekerjaan2(id) {
      this.$store.commit('riwayatPekerjaanModule/changeDataPekerjaan', {
        statusDewan: 1,
        idPekerjaan: id
      })
      const del = await this.deletePekerjaan()
      if (del) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Data Berhasil Dihapus!',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getListPekerjaan2();
        this.cleanForm2();
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
    konfirmasiDelete(id, sd){
      Swal.fire({
        title: "Hapus data Riwayat Pekerjaan ini?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Hapus"
      }).then((result) => {
        if (result.value) {
          if (sd == 0) {
            this.delPekerjaan1(id);
          }else{
            this.delPekerjaan2(id);
          }
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
