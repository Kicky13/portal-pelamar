<template>
  <div class="home-page">
    <!--  -->
    <div class="row">
      <div class="col-sm-12">
        <section
          class="banner w-100"
          :style="
            'background-image: url(' +
            require('@/assets/images/background/bg_home_1_new.png') +
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
                <div class="sub-title">Portal Pelamar BUMN</div>
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
                          v-model="lowonganModule.filter.search"
                          placeholder="Cari Keyword" />
                      </div>
                      <div class="col-sm-3">
                        <select
                          class="form-select form-select-solid"
                          v-model="lowonganModule.filter.id_perusahaan"
                          aria-label="Pilih Perusahaan">
                          <option value="" disabled hidden>Pilih Perusahaan BUMN</option>
                          <option value="">Semua</option>
                          <option
                            v-for="(perusahaan, index) in lowonganModule.listPerusahaan"
                            :value="perusahaan.id"
                            :key="index">
                            {{ perusahaan.nama_perusahaan }}
                          </option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <select
                          class="form-select form-select-solid"
                          v-model="lowonganModule.filter.id_jabatan"
                          aria-label="Select example">
                          <option value="" disabled hidden>Pilih Posisi</option>
                          <option value="">Semua</option>
                          <option
                            v-for="(jabatan, index) in lowonganModule.listJabatan"
                            :value="jabatan.id"
                            :key="index">
                            {{ jabatan.nama_jabatan }}
                          </option>
                        </select>
                      </div>
                      <div class="col-sm-3">
                        <router-link :to="`/pencarian-lowongan`" class="btn btn-primary-portal w-100">
                          Cari
                        </router-link>
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
    <!--  -->
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
              <div class="carousel-inner">
                <!--begin::Item-->
                <div class="carousel-item active w-100">
                  <div class="carousel-content">
                    <div class="row d-flex align-items-center">
                      <div class="col-sm-5">
                        <div class="informasi">
                          <label for="" class="title">Tahap 1</label>
                          <div class="informasi-detail">
                            Membaca Informasi
                            <br />
                            Secara Lengkap
                          </div>
                          <div class="informasi-detail-sub">
                            Pastikan Anda telah membaca secara lengkap
                            <br />
                            informasi yang ditampikan di website ini
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-7">
                        <div class="images">
                          <!-- <img src="" alt=""> -->
                          <!-- <div class="image-default"></div> -->
                          <div
                            class="image-default"
                            :style="
                            'background-image: url(' +
                            require('@/assets/images/background/bg_slide1.png') +
                            ')'
                          ">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--end::Item-->

                <!--begin::Item-->
                <!-- <div class="carousel-item">dadasdas</div> -->
                <!--end::Item-->

                <!--begin::Item-->
                <!-- <div class="carousel-item">dadasdas</div> -->
                <!--end::Item-->
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#kt_carousel_1_carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon-custom">
                  <div
                    class="icon"
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
                <span class="carousel-control-next-icon-custom">
                  <div
                    class="icon"
                    :style="
                      'background-image: url(' +
                      require('@/assets/images/icon/next-icon.svg') +
                      ')'
                    "></div>
                </span>
                <span class="visually-hidden">Next</span>
              </button>
              <!--end::Carousel-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div
      class="kebijakan w-100"
      :style="
        'background-image: url(' +
        require('@/assets/images/background/bg_home_2.png') +
        ')'
      ">
      <div class="container content-kebijakan">
        <div class="row">
          <div class="col-sm-12 text-center">
            <span class="title-persyaratan"> Persyaratan Umum </span>
            <div class="line-persyaratan"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <label for="" class="content-title">
              Sebelum mendaftar pastikan Anda telah membaca seluruh ketentuan
              umum, tata cara melamar dan jadwal kegiatan rekrutmen dan seleksi
              di situs web ini.
            </label>
            <div class="list-content">
              <ol class="ol-custom">
                <li>Warga Negara Indonesia</li>
                <li>
                  Usia minimal ketika mendaftar mengikuti jenjang pendidikan
                  sebagai berikut:
                  <ul>
                    <li>Diploma I/II/III : 27 tahun;</li>
                    <li>S1/Diploma IV : 25 tahun;</li>
                    <li>S2/S3 : 27 tahun;</li>
                  </ul>
                </li>
                <li>Bersedia ditempatkan di seluruh wilayah Indonesia.</li>
                <li>Sehat jasmani, rohani dan bebas narkoba.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="container kontribusi">
      <div class="row">
        <div class="col-sm-12 text-center">
          <span class="title-kontribusi">Kontribusi Untuk Negeri </span>
          <br />
          <span class="sub-title-kontribusi">Bersama Kami</span>
          <div class="line-kontribusi"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
          <div class="cols-sm-12">
          <div class="perusahaan">
            <div class="">
              <img
                :src="require('@/assets/images/content/content_1.png')"
                class="img-fluid w-100"
                alt="" />
            </div>
            <div>
              <img
                :src="require('@/assets/images/content/content_2.png')"
                class="img-fluid w-100"
                alt="" />
            </div>
          </div>
        </div>
        </div>
        <div class="col-sm-2"></div>
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useRouter } from "vue-router";

export default {
  name: "Home",
  computed: {
    ...mapState({
      lowonganModule: (state) => state.lowonganModule.data,
    })
  },
  mounted() {
    this.getKategori(),
    this.getPerusahaan(),
    this.getJabatan(),
    this.resetFilter()
  },
  methods: {
    ...mapActions('lowonganModule', [
      'getLowongan',
      'getPerusahaan',
      'getKategori',
      'getJabatan',
      'resetFilter',
    ]),
  },
  components: {
    // Navbar: () => import(`../../layout/Navbar/PPNavbar.vue`),
    // // FooterLayout: () => import(`./FooterBar/PPFooter.vue`),
  },
};
</script>
