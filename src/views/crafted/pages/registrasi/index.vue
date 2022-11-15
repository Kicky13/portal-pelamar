<template>
  <div>
    <div class="row registrasi-page">
      <div
        class="col-sm-6 bg-login d-flex justify-content-center align-items-center"
        :style="
          'background-image: url(' +
          require('@/assets/images/background/bg_login_portal.png') +
          '); background-size: cover'
        ">
        <div class="img-logo">
          <img :src="require('@/assets/images/logo/logo_login.png')" alt="" />
        </div>
      </div>
      <div
        class="col-sm-6 bg-bumn"
        :style="
          'background-image: url(' +
          require('@/assets/images/background/bg_bumn.png') +
          ')'
        ">
        <div class="form-data">
          <label for="my-input" class="label-data"
            >Silahkan Buat Akun Anda</label
          >
          <div class="informasi-akun">
            <span
              >Sudah memiliki akun?
              <router-link to="/sign-in" class="font-weight-bold">Masuk disni</router-link></span
            >
          </div>

          <div class="form-group">
            <input
              id="my-input"
              class="form-control form-control-solid"
              type="text"
              placeholder="Nama Lengkap"
              v-model="registerModule.formData.name"
              name="" />
            <span v-show="registerModule.validator.name" class="col-sm-9 text-danger">Wajib Diisi. Harus berisikan angka saja. Minimal 4 karakter.</span>
          </div>
          <div class="form-group">
            <input
              id="my-input"
              class="form-control form-control-solid"
              type="number"
              placeholder="No. KTP"
              v-model="registerModule.formData.nik"
              name="" />
            <span v-show="registerModule.validator.nik" class="col-sm-9 text-danger">Wajib Diisi. Harus berisikan angka saja. Minimal 8 karakter.</span>
          </div>
          <div class="form-group">
            <input
              id="my-input"
              class="form-control form-control-solid"
              type="email"
              v-model="registerModule.formData.email"
              placeholder="Email"
              name="" />
            <span v-show="registerModule.validator.email" class="col-sm-9 text-danger">Wajib Diisi. Format Email harus benar.</span>
          </div>
          <div class="form-group">
            <Field
              type="password"
              placeholder="Password"
              class="form-control form-control-solid"
              name="newpassword"
              v-model="registerModule.formData.password"
              id="newpassword" />
            <span v-show="registerModule.validator.password" class="col-sm-9 text-danger">Wajib Diisi. Harus berisikan angka saja. Minimal 8 karakter.</span>
          </div>
          <div class="form-group">
            <Field
              type="password"
              placeholder="Password"
              class="form-control form-control-solid"
              name="newpassword"
              v-model="registerModule.formData.confirm_password"
              id="newpassword" />
            <span v-show="registerModule.validator.confirm_password" class="col-sm-9 text-danger">Wajib Diisi. Harus cocok dengan password.</span>
          </div>
          <div class="form-group">
            <button @click="onSubmitRegister" class="btn btn-success w-100">Daftar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ErrorMessage, Field, Form } from "vee-validate";
import { onMounted } from "vue";
import { VueRecaptcha } from "vue-recaptcha";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { mapState, mapActions } from "vuex";
import { useRouter } from "vue-router";
import { Actions } from "@/store/enums/StoreEnums";
export default {
  computed: {
    ...mapState({
      registerModule: (state) => state.registerModule.data,
    })
  },
  data() {
    return {
      siteKey: "",
    };
  },
  components: {
    ErrorMessage,
    Field,
    Form,
    VueRecaptcha,
  },
  methods: {
    ...mapActions('registerModule', [
      'storeRegister',
      'validateForm',
      'clearForm',
    ]),
    async onSubmitRegister() {
      const validating = await this.validateForm();
      console.log(validating);
      if (validating) {
        const res = await this.storeRegister();
        if (res.status) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Pendaftaran Berhasil. Mohon Cek Email untuk konfirmasi akun anda!',
            showConfirmButton: false,
            timer: 1500,
          });
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
};
</script>
