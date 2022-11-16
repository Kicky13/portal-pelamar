<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile">
          <div class="title-card d-flex align-items-center">
            <span class="title__general">Riwayat Pendidikan Formal</span>
          </div>
          <div class="body-card">
            <div class="referensi">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-2 col-form-label personal__label"
                      >Jenjang<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-10">
                      <select
                        class="custom_form_select w-100"
                        placeholder="Select..."
                        as="select"
                        v-model="pendidikanPelatihanModule.formDataPendidikan.id_jenjang"
                        name="jenjang">
                        <option selected disabled value="">Pilih Salah Satu</option>
                        <option
                          v-for="(jenjang, index) in pendidikanPelatihanModule.listJenjang"
                          :value="jenjang.id"
                          :key="index">
                          {{ jenjang.name }}
                        </option>
                      </select>
                      <span v-show="pendidikanPelatihanModule.validatorPendidikan.id_jenjang" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-6">
                      <div class="row">
                        <label
                          for="staticEmail"
                          class="col-sm-4 col-form-label personal__label"
                          >Negara<span class="text-danger">*</span></label
                        >
                        <div class="col-sm-8">
                          <select
                            class="custom_form_select w-100"
                            placeholder="Select..."
                            as="select"
                            v-model="pendidikanPelatihanModule.formDataPendidikan.id_negara"
                            @change="changeNegaraHandler($event)"
                            name="negara">
                            <option selected disabled value="">Pilih Salah Satu</option>
                            <option
                              v-for="(negara, index) in pendidikanPelatihanModule.listNegara"
                              :value="negara.id"
                              :key="index"
                              :kode="negara.kode">
                              {{ negara.nama }}
                            </option>
                          </select>
                          <span v-show="pendidikanPelatihanModule.validatorPendidikan.id_negara" class="text-danger">Wajib Diisi.</span>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="row">
                        <label
                          for="staticEmail"
                          class="col-sm-4 col-form-label personal__label"
                          >Kota<span class="text-danger">*</span></label
                        >
                        <div class="col-sm-8">
                          <select
                            class="custom_form_select w-100"
                            placeholder="Select..."
                            as="select"
                            v-model="pendidikanPelatihanModule.formDataPendidikan.id_kota"
                            name="kota">
                            <option selected disabled value="">Pilih Salah Satu</option>
                            <option
                              v-for="(kota, index) in pendidikanPelatihanModule.listKota"
                              :value="kota.id"
                              :key="index">
                              {{ kota.nama }}
                            </option>
                          </select>
                          <span v-show="pendidikanPelatihanModule.validatorPendidikan.id_kota" class="text-danger">Wajib Diisi.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-2 personal__label"
                      >Penghargaan<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-10">
                      <textarea
                        class="form-control personal__form"
                        style="min-height:100px !important;"
                        v-model="pendidikanPelatihanModule.formDataPendidikan.penghargaan"
                        id="penghargaan">
                      </textarea>
                      <span v-show="pendidikanPelatihanModule.validatorPendidikan.penghargaan" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Jurusan<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="pendidikanPelatihanModule.formDataPendidikan.jurusan"
                        id="jurusan" />
                      <span v-show="pendidikanPelatihanModule.validatorPendidikan.jurusan" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Perguruan Tinggi<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <select
                        class="custom_form_select w-100"
                        placeholder="Select..."
                        as="select"
                        v-model="pendidikanPelatihanModule.formDataPendidikan.id_perguruan_tinggi"
                        name="kota">
                        <option selected disabled value="">Pilih Salah Satu</option>
                        <option
                          v-for="(kampus, index) in pendidikanPelatihanModule.listKampus"
                          :value="kampus.id"
                          :key="index">
                          {{ kampus.name }}
                        </option>
                      </select>
                      <span v-show="pendidikanPelatihanModule.validatorPendidikan.id_perguruan_tinggi" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Tahun Lulus<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <select
                        class="custom_form_select w-100"
                        placeholder="Select..."
                        v-model="pendidikanPelatihanModule.formDataPendidikan.tahun_lulus"
                        as="select">
                        <option selected disabled value="">Pilih Salah Satu</option>
                        <option v-for="(data, index) in yearList" :value="data">{{ data }}</option>
                      </select>
                      <span v-show="pendidikanPelatihanModule.validatorPendidikan.tahun_lulus" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <button v-if="!pendidikanPelatihanModule.isLoading1 && pendidikanPelatihanModule.idPendidikan == 0" @click="submit_pendidikan" class="btn btn-primary-portal">
                      <i class="fas fa-plus"></i> Tambah
                    </button>
                    <button v-else-if="!pendidikanPelatihanModule.isLoading1 && pendidikanPelatihanModule.idPendidikan != 0" @click="update_pendidikan" class="btn btn-primary-portal">
                      <i class="fas fa-arrow-circle"></i> Update
                    </button>
                    <button v-else @click="submit_pendidikan" disabled class="btn btn-primary-portal">
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
                    :loading="pendidikanPelatihanModule.isLoading1"
                    :data="pendidikanPelatihanModule.listPendidikan"
                    :header="pendidikanPelatihanModule.tableHeader">
                    <template v-slot:jenjang="{ row: listPendidikan }">
                      {{ listPendidikan.jenjang.name }} - {{ listPendidikan.perguruan_tinggi.name }}
                    </template>
                    <template v-slot:tahun_lulus="{ row: listPendidikan }">
                      {{ listPendidikan.tahun_lulus }}
                    </template>
                    <template v-slot:jurusan="{ row: listPendidikan }">
                      {{ listPendidikan.jurusan }}
                    </template>
                    <template v-slot:kota="{ row: listPendidikan }">
                      {{ listPendidikan.kota.nama }}, {{ listPendidikan.negara.nama }}
                    </template>
                    <template v-slot:penghargaan="{ row: listPendidikan }">
                      {{ listPendidikan.penghargaan }}
                    </template>
                    <template v-slot:action="{ row: listPendidikan }">
                      <button @click="edit_pendidikan(listPendidikan.id)" class="btn btn-warning">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button @click="confirmDeletePendidikan(listPendidikan.id)" class="btn btn-danger">
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
            <span class="title__general">Riwayat Pelatihan</span>
          </div>
          <div class="body-card">
            <div class="referensi">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Nama Pelatihan<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="pendidikanPelatihanModule.formDataPelatihan.name"
                        id="nama_pelatihan" />
                      <span v-show="pendidikanPelatihanModule.validatorPelatihan.name" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Penyelenggara<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="pendidikanPelatihanModule.formDataPelatihan.penyelenggara"
                        id="penyelenggara" />
                      <span v-show="pendidikanPelatihanModule.validatorPelatihan.penyelenggara" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Tahun<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <select
                        class="custom_form_select w-100"
                        placeholder="Select..."
                        v-model="pendidikanPelatihanModule.formDataPelatihan.tahun"
                        as="select">
                        <option selected disabled value="">Pilih Salah Satu</option>
                        <option v-for="(data, index) in yearList" :value="data">{{ data }}</option>
                      </select>
                      <span v-show="pendidikanPelatihanModule.validatorPelatihan.tahun" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Kota<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <select
                        class="custom_form_select w-100"
                        placeholder="Select..."
                        as="select"
                        v-model="pendidikanPelatihanModule.formDataPelatihan.id_kota"
                        name="kotapelatihan">
                        <option selected disabled value="">Pilih Salah Satu</option>
                        <option
                          v-for="(kota, index) in pendidikanPelatihanModule.listKotaPelatihan"
                          :value="kota.id"
                          :key="index">
                          {{ kota.nama }}
                        </option>
                      </select>
                      <span v-show="pendidikanPelatihanModule.validatorPelatihan.id_kota" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 personal__label"
                      >Kategori Pelatihan<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <select
                        class="custom_form_select w-100"
                        placeholder="Select..."
                        as="select"
                        v-model="pendidikanPelatihanModule.formDataPelatihan.id_kategori_pelatihan"
                        name="kategori_pelatihan">
                        <option selected disabled value="">Pilih Salah Satu</option>
                        <option
                          v-for="(kat, index) in pendidikanPelatihanModule.listKategoriPelatihan"
                          :value="kat.id"
                          :key="index">
                          {{ kat.name }}
                        </option>
                      </select>
                      <span v-show="pendidikanPelatihanModule.validatorPelatihan.id_kategori_pelatihan" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 personal__label"
                      >Nomor Sertifikat<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="pendidikanPelatihanModule.formDataPelatihan.nomor_sertifikat"
                        id="nomor_sertifikat" />
                      <span v-show="pendidikanPelatihanModule.validatorPelatihan.nomor_sertifikat" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <button v-if="!pendidikanPelatihanModule.isLoading2 && pendidikanPelatihanModule.idPelatihan == 0" @click="submit_pelatihan" class="btn btn-primary-portal">
                      <i class="fas fa-plus"></i> Tambah
                    </button>
                    <button v-else-if="!pendidikanPelatihanModule.isLoading2 && pendidikanPelatihanModule.idPelatihan != 0" @click="update_pelatihan" class="btn btn-primary-portal">
                      <i class="fas fa-arrow-circle"></i> Update
                    </button>
                    <button v-else @click="submit_pelatihan" disabled class="btn btn-primary-portal">
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
                    :loading="pendidikanPelatihanModule.isLoading2"
                    :data="pendidikanPelatihanModule.listPelatihan"
                    :header="pendidikanPelatihanModule.tableHeader2">
                    <template v-slot:nama="{ row: listPelatihan }">
                      {{ listPelatihan.name }}
                    </template>
                    <template v-slot:tahun="{ row: listPelatihan }">
                      {{ listPelatihan.tahun }}
                    </template>
                    <template v-slot:penyelenggara="{ row: listPelatihan }">
                      {{ listPelatihan.penyelenggara }}
                    </template>
                    <template v-slot:kota="{ row: listPelatihan }">
                      {{ listPelatihan.kota.nama }}
                    </template>
                    <template v-slot:kategori="{ row: listPelatihan }">
                      {{ listPelatihan.kategori.name }}
                    </template>
                    <template v-slot:no_sertifikat="{ row: listPelatihan }">
                      {{ listPelatihan.nomor_sertifikat }}
                    </template>
                    <template v-slot:action="{ row: listPelatihan }">
                      <button @click="edit_pelatihan(listPelatihan.id)" class="btn btn-warning">
                        <i class="fas fa-edit"></i>
                      </button>
                      <button @click="confirmDeletePelatihan(listPelatihan.id)" class="btn btn-danger">
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
                    <router-link to="/profile/detail-cv/publikasi" class="btn btn-success-portal-soft">Selanjutnya</router-link>
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
  name: "BackOfficePendidikan",
  data() {
    return {
      title: "Data Keanggotaan Pendidikan",
      yearList: [],
    };
  },
  computed: {
    ...mapState({
      pendidikanPelatihanModule: (state) => state.pendidikanPelatihanModule.data,
    })
  },
  components: {
    LayoutProfileAside,
    Field,
    ErrorMessage,
  },
  mounted() {
    this.getYears(),
    this.getListJenjang(),
    this.getListNegara(),
    this.getListKota(),
    this.getListKampus(),
    this.getListKotaPelatihan(),
    this.getListKategoriPelatihan(),
    this.getListPendidikan(),
    this.getListPelatihan(),
    this.cleanFormPendidikan(),
    this.cleanFormPelatihan()
  },
  methods: {
    ...mapActions('pendidikanPelatihanModule', [
      'getListJenjang',
      'getListNegara',
      'getListKota',
      'getListKampus',
      'getListKotaPelatihan',
      'getListKategoriPelatihan',
      'getListPendidikan',
      'getListPelatihan',
      'getPendidikanById',
      'getPelatihanById',
      'submitFormPendidikan',
      'submitFormPelatihan',
      'updateFormPendidikan',
      'updateFormPelatihan',
      'deletePendidikan',
      'deletePelatihan',
      'validatePendidikan',
      'validatePelatihan',
      'cleanFormPendidikan',
      'cleanFormPelatihan'
    ]),
    getYears() {
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      
      for (let i = 0; i < 20; i++) {
        let yearIndex = currentYear - i;
        this.yearList.push(yearIndex)
      }
    },
    async changeNegaraHandler() {
      const n = event.target.options[event.target.options.selectedIndex].getAttribute('kode');
      this.$store.commit('pendidikanPelatihanModule/changeDataPendidikan', {
        paramKota: {
          kode_provinsi: n
        }
      })
      await this.getListKota()
    },
    async submit_pendidikan() {
      const validateForm = await this.validatePendidikan()
      if (validateForm) {
        const submit = await this.submitFormPendidikan()
        if (submit) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Berhasil Disimpan!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getListPendidikan();
          this.cleanFormPendidikan();
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
    async edit_pendidikan(id){
      this.$store.commit('pendidikanPelatihanModule/changeDataPendidikan', {
        idPendidikan: id
      })
      await this.getPendidikanById()
    },
    async update_pendidikan() {
      const validateForm = await this.validatePendidikan()
      if (validateForm) {
        const update = await this.updateFormPendidikan()
        if (update) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Berhasil Diubah!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getListPendidikan();
          this.cleanFormPendidikan();
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
    async delPendidikan(id) {
      this.$store.commit('pendidikanPelatihanModule/changeDataPendidikan', {
        idPendidikan: id
      })
      const del = await this.deletePendidikan()
      if (del) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Data Berhasil Dihapus!',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getListPendidikan();
        this.cleanFormPendidikan();
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
    confirmDeletePendidikan(id){
      Swal.fire({
        title: "Hapus data riwayat pendidikan ini?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Hapus"
      }).then((result) => {
        if (result.value) {
          this.delPendidikan(id);
        }
      });
    },
    async submit_pelatihan() {
      const validateForm = await this.validatePelatihan()
      if (validateForm) {
        const submit = await this.submitFormPelatihan()
        if (submit) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Berhasil Disimpan!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getListPelatihan();
          this.cleanFormPelatihan();
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
    async edit_pelatihan(id){
      this.$store.commit('pendidikanPelatihanModule/changeDataPendidikan', {
        idPelatihan: id
      })
      await this.getPelatihanById()
    },
    async update_pelatihan() {
      const validateForm = await this.validatePelatihan()
      if (validateForm) {
        const update = await this.updateFormPelatihan()
        if (update) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Berhasil Diubah!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getListPelatihan();
          this.cleanFormPelatihan();
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
    async delPelatihan(id) {
      this.$store.commit('pendidikanPelatihanModule/changeDataPendidikan', {
        idPelatihan: id
      })
      const del = await this.deletePelatihan()
      if (del) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Data Berhasil Dihapus!',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getListPelatihan();
        this.cleanFormPelatihan();
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
    confirmDeletePelatihan(id){
      Swal.fire({
        title: "Hapus data riwayat pelatihan ini?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Hapus"
      }).then((result) => {
        if (result.value) {
          this.delPelatihan(id);
        }
      });
    },
  },

  components: {
    LayoutProfileAside,
    KTDatatable,
  },
};
</script>
