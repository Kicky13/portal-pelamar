<template>
  <div class="faq-page">
    <div class="row">
      <div class="col-sm-12">
        <div class="container">
          <div class="icon-atas">
            <img
              :src="require('@/assets/images/icon/ic_gelombang.png')"
              alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- Title -->
    <div class="row">
      <div class="col-sm-12">
        <div class="container">
          <div class="title-informasi">
            <div class="row d-flex align-items-center pl-3 pr-3">
              <div class="col-sm-10 d-flex align-items-center">
                <div class="nama-perusahaan">
                  <div class="posisi">Frequently Ask Question</div>
                  <div class="nama">
                    <router-link to="/">Beranda</router-link> > FAQ
                  </div>
                </div>
              </div>
              <div class="col-sm-2">
                <img
                  :src="
                    require('@/assets/images/icon/ic_gelombang_transparent.png')
                  "
                  class="img-transparent"
                  alt="" />
              </div>
            </div>
          </div>
          <div class="line-detail"></div>
        </div>
      </div>
    </div>
    <!-- Title -->
    <div class="content-faq">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="accordion" id="kt_accordion_1">
              <div class="accordion-item">
                <h2 class="accordion-header" id="kt_accordion_1_header_1">
                  <button
                    class="accordion-button fs-4 fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#kt_accordion_1_body_1"
                    aria-expanded="true"
                    aria-controls="kt_accordion_1_body_1">
                    Bagaimana Jika Saya lupa password?
                  </button>
                </h2>
                <div
                  id="kt_accordion_1_body_1"
                  class="accordion-collapse collapse show"
                  aria-labelledby="kt_accordion_1_header_1"
                  data-bs-parent="#kt_accordion_1">
                  <div class="accordion-body">...</div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="kt_accordion_1_header_2">
                  <button
                    class="accordion-button fs-4 fw-bold collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#kt_accordion_1_body_2"
                    aria-expanded="false"
                    aria-controls="kt_accordion_1_body_2">
                    Bagaimana Jika Saya lupa password?
                  </button>
                </h2>
                <div
                  id="kt_accordion_1_body_2"
                  class="accordion-collapse collapse"
                  aria-labelledby="kt_accordion_1_header_2"
                  data-bs-parent="#kt_accordion_1">
                  <div class="accordion-body">...</div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="kt_accordion_1_header_3">
                  <button
                    class="accordion-button fs-4 fw-bold collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#kt_accordion_1_body_3"
                    aria-expanded="false"
                    aria-controls="kt_accordion_1_body_3">
                    Apakah saya bisa melamar di lebih dari 1 perusahaan
                  </button>
                </h2>
                <div
                  id="kt_accordion_1_body_3"
                  class="accordion-collapse collapse"
                  aria-labelledby="kt_accordion_1_header_3"
                  data-bs-parent="#kt_accordion_1">
                  <div class="accordion-body">...</div>
                </div>
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
  data() {
    return {
      detailUuid: "123456",
    };
  },
};
</script>
