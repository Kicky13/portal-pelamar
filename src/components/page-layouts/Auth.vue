<template>
  <div>
    <div class="row auth-login">
      <div
        class="col-sm-6 bg-login d-flex justify-content-center align-items-center"
        :style="
          'background-image: url(' +
          require('@/assets/images/background/bg_login.png') +
          ')'
        ">
        <div class="img-logo">
          <img :src="require('@/assets/images/logo/lg_bumn.png')" alt="" />
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
          <label for="my-input" class="label-data">Login</label>

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
              class="form-control form-control-lg form-control-solid fw-semobold fs-6"
              name="newpassword"
              id="newpassword" />
            <div class="w-100 d-flex flex-row-reverse">
              <router-link to="/reset-password" class="ml-auto lupa-password"
                >Lupa Password</router-link
              >
            </div>
          </div>
          <div class="form-group">
            <vue-recaptcha ref="recaptcha" sitekey="Your key here" />
          </div>
          <div class="form-group">
            <button class="btn btn-success w-100">Masuk</button>
          </div>
          <div class="w-100 d-flex daftar-akun">
            <span
              >Belum punya akun ? Daftar
              <router-link :to="`/registrasi`">Disini</router-link></span
            >
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
