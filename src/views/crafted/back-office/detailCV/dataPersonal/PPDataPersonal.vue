<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile">
          <div class="title-card">
            <span>Data Personal</span>
          </div>
          <div class="body-card">
            <div class="container personal">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Nama Lengkap<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="dataPersonalModule.formData.nama"/>
                        <span v-show="validation.name" class="text-danger">Wajib Diisi. Harus berisikan abjad saja. Minimal 3 karakter.</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Gelar Akademik<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        v-model="dataPersonalModule.formData.gelar"
                        class="form-control personal__form"
                        id="inputPassword" />
                      <span v-show="validation.gelar" class="text-danger">Wajib Diisi. Harus berisikan abjad saja. Minimal 3 karakter.</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Tempat Lahir<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <div class="row">
                        <select
                          class="custom_form_select w-50"
                          placeholder="Select..."
                          as="select"
                          v-model="dataPersonalModule.formData.tempatLahir"
                          name="kotaLahir">
                          <option selected disabled value="">Pilih Salah Satu</option>
                          <option
                            v-for="(kota, index) in dataPersonalModule.listKotaLahir"
                            :value="kota.id"
                            :key="index">
                            {{ kota.nama }}
                          </option>
                        </select>
                        <span v-show="validation.tempatLahir" class="text-danger">Wajib Memilih salah satu</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="d-flex align-items-center">
                      <label
                        for="inputPassword"
                        class="col-sm-3 col-form-label personal__label"
                        >Provinsi<span class="text-danger">*</span>
                      </label>
                      <div class="row col-sm-4">
                        <select
                          style="margin-left: 5px"
                          class="custom_form_select w-100"
                          placeholder="Select..."
                          name="provinsi"
                          v-model="dataPersonalModule.formData.provinsi"
                          @change="changeProvinsiHandler"
                          as="select">
                          <option selected disabled value="">Pilih Salah Satu</option>
                          <option
                            v-for="(provinsi, index) in dataPersonalModule.listProvinsi"
                            :value="provinsi.kode"
                            :key="index">
                            {{ provinsi.nama }}
                          </option>
                        </select>
                        <span v-show="validation.provinsi" class="text-danger">Wajib Dipilih</span>
                      </div>
                      <label
                        for="inputPassword"
                        style="margin-left: 10px"
                        class="col-sm-1 col-form-label personal__label"
                        >Kota<span class="text-danger">*</span>
                      </label>
                      <div class="row col-sm-4">
                        <select
                          v-if="dataPersonalModule.selectedProvinsi != null && dataPersonalModule.selectedProvinsi != `` && dataPersonalModule.selectedProvinsi != 0"
                          class="custom_form_select w-100"
                          placeholder="Select..."
                          name="kota"
                          v-model="dataPersonalModule.formData.kota"
                          as="select">
                          <option selected disabled value="">Pilih Salah Satu</option>
                          <option
                            v-for="(kota, index) in dataPersonalModule.listKotaByProvinsi"
                            :value="kota.id"
                            :key="index">
                            {{ kota.nama }}
                          </option>
                        </select>
                        <select
                          v-else
                          class="custom_form_select w-100"
                          placeholder="Select..."
                          name="kota"
                          disabled
                          as="select">
                          <option selected disabled value="">Pilih Provinsi Dahulu</option>
                        </select>
                        <span v-show="validation.kota" class="text-danger">Wajib Dipilih</span>
                      </div>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Jenis Kelamin<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <div class="form-check mb-4 p-0">
                        <input
                          class="custom_form_check"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="L"
                          v-model="dataPersonalModule.formData.jenisKelamin"
                          checked />
                        <label
                          class="form-check-label ml-2"
                          for="exampleRadios1">
                          Laki - Laki
                        </label>
                      </div>
                      <div class="form-check p-0">
                        <input
                          class="custom_form_check"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          v-model="dataPersonalModule.formData.jenisKelamin"
                          value="P" />
                        <label
                          class="form-check-label ml-2"
                          for="exampleRadios2">
                          Perempuan
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Status<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <select
                        class="custom_form_select w-100"
                        placeholder="Select..."
                        name="statusKawin"
                        v-model="dataPersonalModule.formData.statusKawin"
                        as="select">
                        <option selected disabled value="">Pilih Salah Satu</option>
                        <option
                        v-for="(status, index) in dataPersonalModule.listStatus"
                          :value="status.id"
                          :key="index">
                          {{ status.name }}
                        </option>
                      </select>
                      <span v-show="validation.statusKawin" class="text-danger">Wajib Memilih salah satu</span>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >NIK<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="number"
                        v-model="dataPersonalModule.formData.nik"
                        class="form-control personal__form"
                        id="inputPassword" />
                      <span v-show="validation.nik" class="text-danger">Wajib Diisi. Harus berisikan angka saja. Minimal 5 karakter.</span>
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
                        v-model="dataPersonalModule.formData.nohp"
                        class="form-control personal__form"
                        id="inputPassword" />
                    </div>
                    <label class="col-sm-3"></label>
                    <span v-show="validation.nohp" class="col-sm-9 text-danger">Wajib Diisi. Harus berisikan angka saja. Minimal 10 karakter.</span>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Tanggal Lahir<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="date"
                        v-model="dataPersonalModule.formData.tglLahir"
                        class="form-control personal__form"
                        id="inputPassword" />
                      <span v-show="validation.tanggalLahir" class="text-danger">Wajib Diisi</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Alamat Email<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="email"
                        v-model="dataPersonalModule.formData.email"
                        class="form-control personal__form"
                        id="inputPassword" />
                      <span v-show="validation.email" class="text-danger">Wajib Diisi. Format email harus benar.</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Agama<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <select
                        class="custom_form_select w-100"
                        placeholder="Select..."
                        v-model="dataPersonalModule.formData.agama"
                        as="select">
                        <option selected disabled value="">Pilih Salah Satu</option>
                        <option
                        v-for="(agama, index) in dataPersonalModule.listAgama"
                        :value="agama.id"
                        :key="index">
                        {{ agama.name }}
                      </option>
                      </select>
                      <span v-show="validation.agama" class="text-danger">Wajib Memilih salah satu.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Alamat Lengkap<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <textarea
                        name=""
                        id=""
                        v-model="dataPersonalModule.formData.fullAddress"
                        rows="10"
                        class="w-100 custom_textarea"></textarea>
                      <span v-show="validation.fullAddress" class="text-danger">Wajib Diisi Minimal 3 karakter.</span>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Upload File KTP<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <input @change="uploadKtp" ref="ktp" type="file" id="upload" hidden />
                      <label for="upload" class="label-upload w-100">Pilih atau taruh file disini</label>
                      <span v-show="validation.ktp" class="text-danger">Wajib melampirkan file dengan format pdf, png, jpg atau jpeg.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <router-link to="#" class="btn btn-transparent-portal-soft"
                      >Kembali</router-link
                    >
                    <button v-if="!dataPersonalModule.isSubmitLoading" @click="submit" class="btn btn-success-portal-soft">
                      <span class="indicator-label">Selanjutnya</span>
                    </button>
                    <button v-else @click="submit" disabled class="btn btn-success-portal-soft">
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
import { Field, ErrorMessage } from "vee-validate";
import { mapState, mapActions } from "vuex";
import * as Yup from "yup";

export default {
  name: "BackOfficeDataPersonal",
  data() {
    return {
      title: "Data Personal",
      validation: {
        name: false,
        gelar: false,
        tempatLahir: false,
        provinsi: false,
        kota: false,
        kelamin: false,
        statusKawin: false,
        fullAddress: false,
        nik: false,
        nohp: false,
        tanggalLahir: false,
        email: false,
        agama: false,
        ktp: false,
      },
    };
  },
  computed: {
    ...mapState({
      dataPersonalModule: (state) => state.dataPersonalModule.data,
    })
  },
  components: {
    LayoutProfileAside,
    Field,
    ErrorMessage,
  },
  mounted() {
    this.getListAgama()
    this.getListKota()
    this.getListProvinsi()
    this.getListKotaLahir()
    this.getListStatus()
    this.getDataPersonal()
  },
  methods: {
    ...mapActions('dataPersonalModule', [
      'getListAgama',
      'getListKotaLahir',
      'getListProvinsi',
      'getListKota',
      'getListStatus',
      'getDataPersonal',
      'submitForm',
    ]),
    async submit() {
      const submit = await this.submitForm()
      if (submit) {
        console.log('Submit Berhasil');
      } else {
        console.log('Submit Error');
      }
    },
    async changeProvinsiHandler() {
      this.$store.commit('dataPersonalModule/changeDataPersonal', {
        selectedProvinsi: this.dataPersonalModule.formData.provinsi
      })
      await this.getListKota()
    },
    uploadKtp() {
      this.dataPersonalModule.formData.ktp = this.$refs.ktp.files[0]
      console.log(this.dataPersonalModule.formData.ktp)
    }
  },
};
</script>
