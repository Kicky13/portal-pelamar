<template>
  <div class="aside-profile">
    <label for="">Akun Saya</label>
    <ul>
      <li>
        <router-link to="/profile/user" class="d-flex align-items-center">
          <img
            :src="require('@/assets/images/icon/ic_dashboard.svg')"
            class="img-fluid"
            alt="" /><span>Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link to="/profile/pengaturan" class="d-flex align-items-center">
          <img
            :src="require('@/assets/images/icon/ic_user.svg')"
            class="img-fluid"
            alt="" /><span>Pengaturan</span>
        </router-link>
      </li>
    </ul>
    <label for="">My Job</label>
    <ul>
      <li>
        <div class="accordion-item">
          <h2 class="accordion-header" id="kt_accordion_1_header_2">
            <a href="javascript:void(0)"
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#kt_accordion_1_body_2"
              aria-expanded="false"
              aria-controls="kt_accordion_1_body_2">
              <img
                :src="require('@/assets/images/icon/ic_detail.svg')"
                class="img-fluid"
                alt="" /><span>Detail CV</span>
            </a>
          </h2>
          <div
            id="kt_accordion_1_body_2"
            class="accordion-collapse collapse"
            aria-labelledby="kt_accordion_1_header_2"
            data-bs-parent="#kt_accordion_1">
            <div class="accordion-body">

              <ul style="margin-left: 36px; margin-top:10px;">
                <li>
                  <router-link to="/profile/detail-cv/personal">
                    <span>Data Personal</span>
                  </router-link>
                </li>
                <li>
                  <router-link  to="/profile/detail-cv/personafikasi">
                    <span>Personifikasi</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <span>Riwayat Pekerjaan</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <span>Keanggotaan Organisasi</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <span>Pendidikan & Pelatihan</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <span>Publikasi</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <span>Narasumber</span>
                  </router-link>
                </li>
                <li>
                  <router-link to="#">
                    <span>Referensi</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li>
        <router-link to="/profile/resume-cv" class="d-flex align-items-center">
          <img
            :src="require('@/assets/images/icon/ic_cv.svg')"
            class="img-fluid"
            alt="" /><span>Resume CV</span>
        </router-link>
      </li>
    </ul>

    <div class="label" for="">
      <img
        :src="require('@/assets/images/icon/ic_logout.svg')"
        class="img-fluid"
        alt="" />Logout
    </div>
  </div>
</template>

<script>
export default {
  name: "AssideProfile",
};
</script>
