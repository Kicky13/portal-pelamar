<template>
  <LayoutProfileAside :titlePage="title">
   
    <div class="row">
      <div class="col-sm-7">
        <div class="card-profile" style="min-height: 360px !important;">
          <div class="title-card">
            <img :src="require('@/assets/images/icon/ic_lock.svg')" alt="" />
            <span>Ubah Password</span>
          </div>
          <div class="body-card">
            <div class="pengaturan">
              <div class="form-group row">
                <div class="col-sm-12">
                  <!-- <input
                    placeholder="Password Saat ini"
                    type="password"
                    v-model="changePasswordPart.formData.password"
                    class="form-control pengaturan__form"
                    id="inputPassword" /> -->
                  <div class="input-group">
                    <input
                      placeholder="Password Saat ini"
                      class="form-control form-control-lg form-control-solid"
                      :type="passwordFieldType1"
                      v-model="changePasswordPart.formData.password"
                      id="inputPassword"
                      autocomplete="off"
                      style="background: rgba(0, 0, 0, 0.07); border-radius: 3px;" />
                    <div class="input-group-addon">
                      <a href="javascript:void(0)" @click="switchVisibility(1)"
                        ><i
                          class="icon-field"
                          :class="passwordFieldType1 === `password` ? `fa fa-eye-slash` : `fa fa-eye`"
                          aria-hidden="true"
                          margin="left"></i
                      ></a>
                    </div>
                  </div>
                  <span v-show="changePasswordPart.validator.password" class="col-sm-9 text-danger">Wajib Diisi. Minimal 4 karakter.</span>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12">
                  <!-- <input
                    placeholder="Password Baru"
                    type="password"
                    v-model="changePasswordPart.formData.new_password"
                    class="form-control pengaturan__form"
                    id="inputPassword" /> -->
                  <div class="input-group">
                    <input
                      placeholder="Password Baru"
                      class="form-control form-control-lg form-control-solid"
                      :type="passwordFieldType2"
                      v-model="changePasswordPart.formData.new_password"
                      id="inputPassword"
                      autocomplete="off"
                      style="background: rgba(0, 0, 0, 0.07); border-radius: 3px;" />
                    <div class="input-group-addon">
                      <a href="javascript:void(0)" @click="switchVisibility(2)"
                        ><i
                          class="icon-field"
                          :class="passwordFieldType2 === `password` ? `fa fa-eye-slash` : `fa fa-eye`"
                          aria-hidden="true"
                          margin="left"></i
                      ></a>
                    </div>
                  </div>
                  <span v-show="changePasswordPart.validator.new_password" class="col-sm-9 text-danger">Wajib Diisi. Minimal 4 karakter. Password tidak boleh sama dengan password saat ini</span>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12">
                  <!-- <input
                    placeholder="Ketik Ulang Password Baru"
                    type="password"
                    v-model="changePasswordPart.formData.re_password"
                    class="form-control pengaturan__form"
                    id="inputPassword" /> -->
                  <div class="input-group">
                    <input
                      placeholder="Ketik Ulang Password Baru"
                      class="form-control form-control-lg form-control-solid"
                      :type="passwordFieldType3"
                      v-model="changePasswordPart.formData.re_password"
                      id="inputPassword"
                      autocomplete="off"
                      style="background: rgba(0, 0, 0, 0.07); border-radius: 3px;" />
                    <div class="input-group-addon">
                      <a href="javascript:void(0)" @click="switchVisibility(3)"
                        ><i
                          class="icon-field"
                          :class="passwordFieldType3 === `password` ? `fa fa-eye-slash` : `fa fa-eye`"
                          aria-hidden="true"
                          margin="left"></i
                      ></a>
                    </div>
                  </div>
                  <span v-show="changePasswordPart.validator.re_password" class="col-sm-9 text-danger">Wajib Diisi. Minimal 4 karakter. Harus sesuai password baru</span>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <button @click="submitNewPassword" class="btn btn-success-portal-soft">Update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-5">
        <div class="card-profile">
          <img :src="require('@/assets/images/background/img_setting.png')" alt="" />
        </div>
        <!-- <div class="card-profile">
          <div class="title-card">
            <img :src="require('@/assets/images/icon/ic_user.svg')" alt="" />
            <span>Akun</span>
          </div>
          <div class="body-card">
            <div class="container pengaturan">
              <div class="form-group row">
                <label
                  for="staticEmail"
                  class="col-sm-3 col-form-label pengaturan__label"
                  >Email :</label
                >
                <div class="col-sm-9">
                  <input
                    type="email"
                    class="form-control pengaturan__form"
                    id="inputPassword" />
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="inputPassword"
                  class="col-sm-3 col-form-label pengaturan__label"
                  >No HP :</label
                >
                <div class="col-sm-9">
                  <input
                    type="password"
                    class="form-control pengaturan__form"
                    id="inputPassword" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <button class="btn btn-success-portal-soft">Update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </LayoutProfileAside>
</template>
<script>
import LayoutProfileAside from "@/views/crafted/layout/LayoutProfile.vue";
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useRouter } from "vue-router";

export default {
  name: "BackOfficePengaturan",
  computed: {
    ...mapState({
      changePasswordPart: (state) => state.changePasswordPart.data,
    })
  },
  data() {
    return {
      title: "Pengaturan",
      passwordFieldType1: "password",
      passwordFieldType2: "password",
      passwordFieldType3: "password",
    };
  },
  methods: {
    ...mapActions('changePasswordPart', [
      'validateForm',
      'storeNewPassword',
      'cleanForm'
    ]),
    async submitNewPassword() {
      if (await this.validateForm()) {
        const res = await this.storeNewPassword();
        if (res) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Password Berhasil Diubah!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.cleanForm()
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Invalid Password!',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    },
    switchVisibility(val) {
      if (val == 1) {
        this.passwordFieldType1 = this.passwordFieldType1 === "password" ? "text" : "password";
      }else if (val == 2) {
        this.passwordFieldType2 = this.passwordFieldType2 === "password" ? "text" : "password";
      }else {
        this.passwordFieldType3 = this.passwordFieldType3 === "password" ? "text" : "password";
      }
    },
  },
  components: {
    LayoutProfileAside,
  },
};
</script>
