<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile">
          <div class="title-card d-flex align-items-center">
            <span class="title__general">Keanggotaan Organisasi</span>
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
                        v-model="dataOrganisasiModule.formData.jabatan"
                        id="inputJabatan" />
                      <span v-show="dataOrganisasiModule.validator.jabatan" class="text-danger">Wajib Diisi.</span> 
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
                            v-model="dataOrganisasiModule.formData.tanggal_mulai"
                            id="inputTglMulai" />
                          <span v-show="dataOrganisasiModule.validator.tanggal_mulai" class="text-danger">Wajib Diisi.</span> 
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
                            v-model="dataOrganisasiModule.formData.tanggal_akhir"
                            id="inputTglAkhir" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-2 personal__label"
                      >Uraian Kegiatan<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-10">
                      <textarea
                        class="form-control personal__form"
                        style="min-height:100px !important;"
                        v-model="dataOrganisasiModule.formData.uraian_kegiatan"
                        id="inputJabatan">
                      </textarea>
                      <span v-show="dataOrganisasiModule.validator.uraian_kegiatan" class="text-danger">Wajib Diisi.</span> 
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Nama Organisasi<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="dataOrganisasiModule.formData.nama_organisasi"
                        id="inputNamaOrg" />
                      <span v-show="dataOrganisasiModule.validator.nama_organisasi" class="text-danger">Wajib Diisi.</span> 
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Jenis Organisasi<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <div v-for="jenis in dataOrganisasiModule.listJenisOrg">
                        <input
                          type="radio"
                          v-model="dataOrganisasiModule.formData.id_jenis_organisasi"
                          id="inputJenisOrg"
                          :value="jenis.id" />
                        {{ jenis.name }}
                      </div>
                      <span v-show="dataOrganisasiModule.validator.id_jenis_organisasi" class="text-danger">Wajib Diisi.</span> 
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <button v-if="!dataOrganisasiModule.isLoading && dataOrganisasiModule.idOrganisasi == 0" @click="submit" class="btn btn-primary-portal">
                      <i class="fas fa-plus"></i> Tambah
                    </button>
                    <button v-else-if="!dataOrganisasiModule.isLoading && dataOrganisasiModule.idOrganisasi != 0" @click="update" class="btn btn-primary-portal">
                      <i class="fas fa-arrow-circle"></i> Update
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
                    :loading="dataOrganisasiModule.isLoading"
                    :data="dataOrganisasiModule.listOrganisasi"
                    :header="dataOrganisasiModule.tableHeader">
                    <template v-slot:jabatan="{ row: listOrganisasi }">
                      {{ listOrganisasi.jabatan }}<br>
                      {{ listOrganisasi.nama_organisasi }}
                    </template>
                    <template v-slot:tanggal_mulai="{ row: listOrganisasi }">
                      {{ formatDate(listOrganisasi.tanggal_mulai) }}
                    </template>
                    <template v-slot:tanggal_akhir="{ row: listOrganisasi }">
                      {{ formatDate(listOrganisasi.tanggal_akhir) }}
                    </template>
                    <template v-slot:uraian_kegiatan="{ row: listOrganisasi }">
                      {{ listOrganisasi.uraian_kegiatan }}
                    </template>
                    <template v-slot:jenis_organisasi="{ row: listOrganisasi }">
                      {{ listOrganisasi.jenis_org.name }}
                    </template>
                    <template v-slot:action="{ row: listOrganisasi }">
                      <button @click="edit(listOrganisasi.id)" class="btn btn-warning">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button @click="konfirmasiDelete(listOrganisasi.id)" class="btn btn-danger">
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
                    <router-link to="/profile/detail-cv/pendidikan-pelatihan" class="btn btn-success-portal-soft">Selanjutnya</router-link>
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
  name: "BackOfficeOrganisasi",
  data() {
    return {
      title: "Data Keanggotaan Organisasi",
    };
  },
  computed: {
    ...mapState({
      dataOrganisasiModule: (state) => state.dataOrganisasiModule.data,
    })
  },
  components: {
    LayoutProfileAside,
    Field,
    ErrorMessage,
  },
  mounted() {
    this.getListOrganisasi(),
    this.getListJenisOrg(),
    this.cleanForm()
  },
  methods: {
    ...mapActions('dataOrganisasiModule', [
      'getListJenisOrg',
      'getListOrganisasi',
      'getOrganisasiById',
      'submitForm',
      'updateForm',
      'deleteOrganisasi',
      'validateForm',
      'cleanForm'
    ]),
    formatDate(tanggal) {
      let nd = new Date(tanggal).toLocaleDateString('id-id', { day:"numeric", year:"numeric", month:"long"});
      return nd;
    },
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
          this.getListOrganisasi();
          this.cleanForm();
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
    async edit(id){
      this.$store.commit('dataOrganisasiModule/changeDataOrganisasi', {
        idOrganisasi: id
      })
      await this.getOrganisasiById()
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
          this.getListOrganisasi();
          this.cleanForm();
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
    async delOrganisasi(id) {
      this.$store.commit('dataOrganisasiModule/changeDataOrganisasi', {
        idOrganisasi: id
      })
      const del = await this.deleteOrganisasi()
      if (del) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Data Berhasil Dihapus!',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getListOrganisasi();
        this.cleanForm();
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
    konfirmasiDelete(id){
      Swal.fire({
        title: "Hapus data Keanggotaan Organisasi ini?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Hapus"
      }).then((result) => {
        if (result.value) {
          this.delOrganisasi(id);
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
