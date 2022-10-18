<template>
  <LayoutProfileAside :titlePage="title">
    <div class="dashboard-profile">
      <div class="row d-flex align-items-center">
        <div class="col-sm-6 d-flex align-items-center">
          <div class="images-profile">
            <img
              :src="require('@/assets/images/icon/ic_image_profile.png')"
              alt="" />
          </div>
          <div class="informasi-profile">
            <label for="">Nurul Jannah</label>
            <div class="email">nama@gmail.com</div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="informasi-persentase d-flex align-items-center">
            <div class="jabatan-dilamar text-center">
              <label for="" class="total">2</label>
              <p for="" class="wording">Jabatan Dilamar</p>
            </div>
            <div class="jabatan-dilamar text-center">
              <label for="" class="total">100%</label>
              <p for="" class="wording">Prosentase CV</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-7">
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
      <div class="col-sm-5">
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
                    placeholder="Password Baru"
                    type="password"
                    class="form-control pengaturan__form"
                    id="inputPassword" />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-12">
                  <input
                    placeholder="Ketik Ulang Password Baru"
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

export default {
  name: "BackOfficePengaturan",
  data() {
    return {
      title: "Pengaturan",
    };
  },

  components: {
    LayoutProfileAside,
  },
};
</script>
