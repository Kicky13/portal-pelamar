<template>
  <div class="pencarian-page">
    <div class="row">
      <div class="col-sm-12">
        <div
          class="banner"
          :style="
            'background-image: url(' +
            require('@/assets/images/background/bg_pencarian.png') +
            ')'
          ">
          <div class="informasi-banner">
            <label for=""
              >Aksi <strong>Nyata</strong> Untuk <strong>Negeri</strong></label
            >
            <div class="line-banner"></div>
            <div class="total-lowongan">
              <strong>213</strong> Lowongan Tersedia
            </div>
          </div>

          <div class="form-pencarian">
            <div class="row d-flex justify-content-center">
              <div class="col-sm-3">
                <input
                  type="text"
                  class="form-control form-control-solid"
                  placeholder="name@example.com" />
              </div>
              <div class="col-sm-3">
                <select
                  class="form-select form-select-solid"
                  aria-label="Select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-sm-2">
                <select
                  class="form-select form-select-solid"
                  aria-label="Select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="col-sm-2">
                <select
                  class="form-select form-select-solid"
                  aria-label="Select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div class="col-sm-2">
                <router-link
                  :to="`/pencarian-lowongan?`"
                  class="btn btn-primary-portal w-100">
                  Cari
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pencarian",
};
</script>
