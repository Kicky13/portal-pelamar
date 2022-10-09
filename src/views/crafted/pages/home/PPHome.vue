<template>
  <div class="home-page">
    <div class="row">
      <div class="col-sm-12">
        <section
          class="banner w-100"
          :style="
            'background-image: url(' +
            require('@/assets/images/background/bg_home_1.png') +
            ')'
          ">
          <div class="container">
            <div class="row">
              <div class="cols-sm-12">
                <div class="title-banner">
                  Bersama <strong>Berkontribusi</strong>
                  <br />
                  Untuk <strong>Negeri</strong>
                </div>
                <div class="sub-title">Lorem Ipsum</div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="banner-filter">
                  <div class="container">
                    <div class="row d-flex">
                      <div class="col-sm-6">
                        <div class="title-filter">
                          Cari Daftar Posisi yang dibuka
                        </div>
                      </div>
                      <div class="col-sm-6 ml-auto">
                        <div class="sub-title-filter">
                          <strong>213</strong> Lowongan Tersedia
                        </div>
                        <br />
                      </div>
                    </div>
                    <div class="row filter-data">
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
                        <button class="btn btn-primary-portal w-100">
                          Cari
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="container pendaftaran">
      <div class="row">
        <div class="col-sm-12 text-center">
          <span class="title-pendaftaran"> Alur Pendafataran </span>
          <div class="line-pendaftaran"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="carousel-pendaftaran">
            <div
              id="kt_carousel_1_carousel"
              class="carousel carousel-custom slide"
              data-bs-ride="carousel"
              data-bs-interval="8000">
              <!--begin::Heading-->

              <!--end::Heading-->

              <!--begin::Carousel-->
              <div class="carousel-inner pt-8">
                <!--begin::Item-->
                <div class="carousel-item active w-100">
                  <div class="carousel-content">

                  </div>
                </div>
                <!--end::Item-->

                <!--begin::Item-->
                <div class="carousel-item">dadasdas</div>
                <!--end::Item-->

                <!--begin::Item-->
                <div class="carousel-item">dadasdas</div>
                <!--end::Item-->
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#kt_carousel_1_carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon-custom">
                  <div class="icon"
                    :style="
                      'background-image: url(' +
                      require('@/assets/images/icon/prev-icon.svg') +
                      ')'
                    "></div
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#kt_carousel_1_carousel"
                data-bs-slide="next">
                <span
                  class="carousel-control-next-icon-custom"
                  >
                  <div class="icon"
                    :style="
                      'background-image: url(' +
                      require('@/assets/images/icon/next-icon.svg') +
                      ')'
                    "></div
                >
                </span>
                <span class="visually-hidden">Next</span>
              </button>
              <!--end::Carousel-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {
    // Navbar: () => import(`../../layout/Navbar/PPNavbar.vue`),
    // // FooterLayout: () => import(`./FooterBar/PPFooter.vue`),
  },
};
</script>
