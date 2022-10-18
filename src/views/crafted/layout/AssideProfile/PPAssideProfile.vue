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
        <router-link to="" class="d-flex align-items-center">
          <img
            :src="require('@/assets/images/icon/ic_detail.svg')"
            class="img-fluid"
            alt="" /><span>Detail CV</span>
        </router-link>
      </li>
      <li>
        <router-link to="#" class="d-flex align-items-center">
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
