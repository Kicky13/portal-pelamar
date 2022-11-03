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
              name="" />
          </div>
          <div class="form-group">
            <input
              id="my-input"
              class="form-control form-control-solid"
              type="number"
              placeholder="No. KTP"
              name="" />
          </div>
          <div class="form-group">
            <input
              id="my-input"
              class="form-control form-control-solid"
              type="email"
              placeholder="Email"
              name="" />
          </div>
          <div class="form-group">
            <Field
              type="password"
              placeholder="Password"
              class="form-control form-control-solid"
              name="newpassword"
              id="newpassword" />
          </div>
          <div class="form-group">
            <Field
              type="password"
              placeholder="Password"
              class="form-control form-control-solid"
              name="newpassword"
              id="newpassword" />
          </div>
          <div class="w-100 d-flex daftar-akun">
            <span
              >Gunakan 8 atau lebih karakter dengan perpaduan huruf, angka &
              simbol</span
            >
          </div>
          <div class="form-group">
            <button class="btn btn-success w-100">Daftar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ErrorMessage, Field, Form } from "vee-validate";
import { VueRecaptcha } from "vue-recaptcha";
export default {
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
  methods: {},
};
</script>
