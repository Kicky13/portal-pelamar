<template>
  <div>
    <div class="row reset-password-page">
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
          <label for="my-input" class="label-data">Reset Password</label>

          <div class="form-group">
            <input
              id="my-input"
              class="form-control form-control-solid"
              type="email"
              placeholder="Alamat Email"
              name="" />
          </div>

          <div class="form-group">
            <button class="btn btn-success w-100">Kirim</button>
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
