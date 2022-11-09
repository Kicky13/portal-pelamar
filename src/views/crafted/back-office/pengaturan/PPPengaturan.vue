<template>
  <LayoutProfileAside :titlePage="title">
   
    <div class="row">
      <div class="col-sm-7">
        <div class="card-profile">
          <div class="title-card">
            <img :src="require('@/assets/images/icon/ic_lock.svg')" alt="" />
            <span>Ubah Password</span>
          </div>
          <div class="body-card">
            <div class="pengaturan">
              <div class="form-group row">
                <div class="col-sm-12">
                  <input
                    placeholder="Password Saat ini"
                    type="password"
                    v-model="changePasswordPart.formData.password"
                    class="form-control pengaturan__form"
                    id="inputPassword" />
                  <span v-show="changePasswordPart.validator.password" class="col-sm-9 text-danger">Wajib Diisi. Minimal 4 karakter.</span>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12">
                  <input
                    placeholder="Password Baru"
                    type="password"
                    v-model="changePasswordPart.formData.new_password"
                    class="form-control pengaturan__form"
                    id="inputPassword" />
                  <span v-show="changePasswordPart.validator.new_password" class="col-sm-9 text-danger">Wajib Diisi. Minimal 4 karakter. Password tidak boleh sama dengan password saat ini</span>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12">
                  <input
                    placeholder="Ketik Ulang Password Baru"
                    type="password"
                    v-model="changePasswordPart.formData.re_password"
                    class="form-control pengaturan__form"
                    id="inputPassword" />
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
        </div>
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
    };
  },
  methods: {
    ...mapActions('changePasswordPart', [
      'validateForm',
      'storeNewPassword',
    ]),
    async submitNewPassword() {
      if (await this.validateForm()) {
        const res = await this.storeNewPassword();
        if (res) {
          console.log(res)
        } else {
          console.log(res)
        }
      }
    },
  },
  components: {
    LayoutProfileAside,
  },
};
</script>
