<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile">
          <div class="title-card">
            <span class="title__general">Data Personal</span>
          </div>
          <div class="body-card">
            <div class="container personal">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Nama Lengkap<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control personal__form"
                        v-model="dataPersonalModule.formData.nama"
                        disabled/>
                        <span v-show="dataPersonalModule.validation.nama" class="text-danger">Wajib Diisi. Harus berisikan abjad saja. Minimal 3 karakter.</span>
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
                      <span v-show="dataPersonalModule.validation.gelar" class="text-danger">Wajib Diisi. Harus berisikan abjad saja. Minimal 3 karakter.</span>
                    </div>
                  </div>
                  <!-- <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Tempat Lahir<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <select
                        class="custom_form_select w-100"
                        placeholder="Select..."
                        as="select"
                        v-model="dataPersonalModule.formData.id_kota_lahir"
                        name="kotaLahir">
                        <option selected disabled value="">Pilih Salah Satu</option>
                        <option
                          v-for="(kota, index) in dataPersonalModule.listKotaLahir"
                          :value="kota.id"
                          :key="index">
                          {{ kota.nama }}
                        </option>
                      </select>
                      <span v-show="dataPersonalModule.validation.id_kota_lahir" class="text-danger">Wajib Memilih salah satu</span>
                    </div>
                  </div> -->
                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Kewarganegaraan<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <div class="form-check mb-4 p-0">
                        <input
                          class="custom_form_check"
                          type="radio"
                          name="is_wna"
                          id="is_wna1"
                          :value="0"
                          v-model="dataPersonalModule.formData.is_wna"
                          @click="changeWNHandler(0)"
                          checked />
                        <label
                          class="form-check-label ml-2"
                          for="exampleRadios1">
                          WNI
                        </label>
                      </div>
                      <div class="form-check p-0">
                        <input
                          class="custom_form_check"
                          type="radio"
                          name="is_wna"
                          id="is_wna2"
                          v-model="dataPersonalModule.formData.is_wna"
                          @click="changeWNHandler(1)"
                          :value="1" />
                        <label
                          class="form-check-label ml-2"
                          for="exampleRadios2">
                          WNA
                        </label>
                      </div>
                      <span v-show="dataPersonalModule.validation.is_wna" class="text-danger">Wajib Dipilih</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >{{dataPersonalModule.labelProvinsi}}<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
                      <select
                        class="custom_form_select w-100"
                        placeholder="Select..."
                        name="provinsi"
                        v-model="dataPersonalModule.formData.provinsi"
                        @change="changeProvinsiHandler"
                        as="select">
                        <option selected disabled value="">Pilih Salah Satu</option>
                        <option
                          v-for="(provinsi, index) in dataPersonalModule.listProvinsi"
                          :value="provinsi.id"
                          :key="index">
                          {{ provinsi.nama }}
                        </option>
                      </select>
                      <span v-show="dataPersonalModule.validation.provinsi" class="text-danger">Wajib Dipilih</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="inputPassword"
                      class="col-sm-3 col-form-label personal__label"
                      >Kota<span class="text-danger">*</span>
                    </label>
                    <div class="col-sm-9">
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
                      <span v-show="dataPersonalModule.validation.kota" class="text-danger">Wajib Dipilih</span>
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
                          v-model="dataPersonalModule.formData.gender"
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
                          v-model="dataPersonalModule.formData.gender"
                          value="P" />
                        <label
                          class="form-check-label ml-2"
                          for="exampleRadios2">
                          Perempuan
                        </label>
                      </div>
                      <span v-show="dataPersonalModule.validation.gender" class="text-danger">Wajib Dipilih</span>
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
                        v-model="dataPersonalModule.formData.marital_status"
                        as="select">
                        <option selected disabled value="">Pilih Salah Satu</option>
                        <option
                        v-for="(status, index) in dataPersonalModule.listStatus"
                          :value="status.id"
                          :key="index">
                          {{ status.name }}
                        </option>
                      </select>
                      <span v-show="dataPersonalModule.validation.marital_status" class="text-danger">Wajib Memilih salah satu</span>
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
                        type="text"
                        v-model="dataPersonalModule.formData.nik"
                        class="form-control personal__form"
                        @keypress="isNumber($event)"
                        id="inputPassword" />
                      <span v-show="dataPersonalModule.validation.nik" class="text-danger">Wajib Diisi. Harus berisikan angka saja. Minimal 5 karakter.</span>
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
                        type="text"
                        v-model="dataPersonalModule.formData.phone"
                        class="form-control personal__form"
                        @keypress="isNumber($event)"
                        id="inputPassword" />
                    </div>
                    <label class="col-sm-3"></label>
                    <span v-show="dataPersonalModule.validation.phone" class="col-sm-9 text-danger">Wajib Diisi. Harus berisikan angka saja. Minimal 10 karakter.</span>
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
                        v-model="dataPersonalModule.formData.tgl_lahir"
                        class="form-control personal__form"
                        id="inputPassword" />
                      <span v-show="dataPersonalModule.validation.tgl_lahir" class="text-danger">Wajib Diisi</span>
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
                        id="inputPassword"
                        disabled/>
                      <span v-show="dataPersonalModule.validation.email" class="text-danger">Wajib Diisi. Format email harus benar.</span>
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
                      <span v-show="dataPersonalModule.validation.agama" class="text-danger">Wajib Memilih salah satu.</span>
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
                        v-model="dataPersonalModule.formData.alamat"
                        rows="10"
                        class="w-100 custom_textarea"></textarea>
                      <span v-show="dataPersonalModule.validation.alamat" class="text-danger">Wajib Diisi Minimal 3 karakter.</span>
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
                      <label v-if="dataPersonalModule.ktpFilename == ''" for="upload" class="label-upload w-100">Pilih atau taruh file disini</label>
                      <label v-else for="upload" class="label-upload">{{ dataPersonalModule.formData.ktp.name }}</label>
                      <span v-show="dataPersonalModule.validation.ktp" class="text-danger">Wajib melampirkan file dengan format pdf, png, jpg atau jpeg.</span>
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
import { Form, Field, ErrorMessage } from "vee-validate";
import { mapState, mapActions } from "vuex";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useRouter } from "vue-router";

export default {
  name: "BackOfficeDataPersonal",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const router = useRouter();
    const formValidate = Yup.object().shape({
      name: Yup.string().min(4).required().label("Name")
    });
    return {
      formValidate,
      router,
    }
  },
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
        is_wna: false,
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
    this.initiatePage()
    this.getListKotaLahir()
    this.getListStatus()
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
      'validateForm',
      'findKodeProvinsi',
    ]),
    isNumber(event){
      if (!/^[0-9]+$/.test(event.key)) return event.preventDefault();
    },
    async initiatePage() {
      const personal = await this.getDataPersonal();
      const label = this.dataPersonalModule.formData.is_wna == 0 ? 'Provinsi' : 'Negara';
      this.$store.commit('dataPersonalModule/changeDataPersonal', {
        labelProvinsi: label,
        selectedWN: this.dataPersonalModule.formData.is_wna,
        reqParams: {
          is_luar_negeri: this.dataPersonalModule.formData.is_wna,
        },
      })
      const provinsi = await this.getListProvinsi();

      if (provinsi && personal) {
        const kodeProvinsi = await this.findKodeProvinsi();
        this.$store.commit('dataPersonalModule/changeDataPersonal', {
          selectedProvinsi: kodeProvinsi,
        })
        await this.getListKota()
      }
    },
    async submit() {
      const validating = await this.validateForm()
      console.log(validating)
      if (validating) {
        const formData = new FormData();
        formData.append('nama', this.dataPersonalModule.formData.nama)
        formData.append('gelar', this.dataPersonalModule.formData.gelar)
        formData.append('id_kota_lahir', this.dataPersonalModule.formData.kota)
        formData.append('provinsi', this.dataPersonalModule.formData.provinsi)
        formData.append('kota', this.dataPersonalModule.formData.kota)
        formData.append('gender', this.dataPersonalModule.formData.gender)
        formData.append('marital_status', this.dataPersonalModule.formData.marital_status)
        formData.append('nik', this.dataPersonalModule.formData.nik)
        formData.append('phone', this.dataPersonalModule.formData.phone)
        formData.append('tgl_lahir', this.dataPersonalModule.formData.tgl_lahir)
        formData.append('agama', this.dataPersonalModule.formData.agama)
        formData.append('email', this.dataPersonalModule.formData.email)
        formData.append('ktp', this.dataPersonalModule.formData.ktp)
        formData.append('alamat', this.dataPersonalModule.formData.alamat)
        formData.append('is_wna', this.dataPersonalModule.formData.is_wna)
        const submit = await this.submitForm(formData);
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
            title: 'Gagal Simpan, pastikan data yang anda masukkan sudah benar!',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    },
    async changeWNHandler(val) {
      const label = val == 0 ? 'Provinsi' : 'Negara';
      this.$store.commit('dataPersonalModule/changeDataPersonal', {
        labelProvinsi: label,
        selectedWN: val,
        reqParams: {
          is_luar_negeri: val,
        },
      })
      await this.getListProvinsi()
      await this.getListKota()
    },
    async changeProvinsiHandler() {
      const kodeProvinsi = await this.findKodeProvinsi();
      this.$store.commit('dataPersonalModule/changeDataPersonal', {
        selectedProvinsi: kodeProvinsi,
      })
      await this.getListKota()
    },
    uploadKtp() {
      this.dataPersonalModule.formData.ktp = this.$refs.ktp.files[0]
      this.dataPersonalModule.ktpFilename = this.$refs.ktp.files[0].name
      console.log(this.dataPersonalModule.formData.ktp)
    }
  },
};
</script>
