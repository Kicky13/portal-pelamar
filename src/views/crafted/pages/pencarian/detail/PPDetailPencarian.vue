<template>
  <div class="pencarian-detail-page">
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
                <!-- <img
                  :src="require('@/assets/images/content/sig.png')"
                  class="img-logo"
                  alt="" /> -->
                <img
                  :src="lowonganModule.selectedLowongan.logo"
                  class="img-logo"
                  alt="" />

                <div class="nama-perusahaan">
                  <div class="posisi">{{ lowonganModule.selectedLowongan.nama_jabatan }}</div>
                  <div class="nama">{{ lowonganModule.selectedLowongan.nama_perusahaan }}</div>
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
      <div class="row">
        <div class="col-sm-12">
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <div class="data-informasi">
                  <div class="name">Lokasi</div>
                  <div class="detail">{{ lowonganModule.selectedLowongan.nama_kota }}</div>
                </div>
                <div class="data-informasi">
                  <div class="name">Perusahaan</div>
                  <div class="detail">{{ lowonganModule.selectedLowongan.nama_perusahaan }}</div>
                </div>
                <div class="data-informasi">
                  <div class="name">Tanggal Posting</div>
                  <div class="detail">
                    {{ formatDate(lowonganModule.selectedLowongan.start_date) }}
                  </div>
                </div>
                <div class="data-informasi">
                  <div class="name">Batas Akhir</div>
                  <div class="detail">{{ formatDate(lowonganModule.selectedLowongan.end_date) }}</div>
                </div>
              </div>
              <div class="col-sm-1"></div>
              <div class="col-sm-7">
                <div class="deskripsi">
                  <div>
                    <label for="">Gambaran Singkat</label>
                    <p>
                      {{ formatText(lowonganModule.selectedLowongan.deskripsi) }}
                    </p>
                  </div>

                  <div>
                    <label for="">Peran dan Tanggung Jawab</label>
                    <p>
                      {{ formatText(lowonganModule.selectedLowongan.tanggung_jawab) }}
                    </p>
                  </div>

                  <div>
                    <button
                    @click="lamarPekerjaan"
                    class="btn btn-success-portal w-25"
                    type="button">
                      Lamar Pekerjaan
                    </button>
                    <button
                      @click="backToPage"
                      class="btn btn-transparent-portal w-25"
                      type="button">
                      Kembali
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Title -->

    <!-- Rekomendasi -->
    <div class="row detail-rekomendasi">
      <div class="col-sm-12">
        <div class="container">
          <div class="rekomendasi">
            <div class="title-rekomendasi">Posisi Serupa</div>
            <div class="line-rekomendasi"></div>
          </div>
          <div class="pencarian-list">
            <!--  -->
            <div
              v-for="(item, index) in lowonganModule.listRecommended"
              class="row d-flex align-items-center">
              <div class="col-sm-10">
                <div class="informasi d-flex align-items-center">
                  <div class="images">
                    <img
                      :src="item.logo"
                      alt="" />
                  </div>
                  <div class="detail-informasi">
                    <label for="">{{ item.nama_jabatan }}</label>
                    <div class="name">{{ item.nama_perusahaan }}</div>
                    <div class="date">
                      Buka Sampai {{ formatDate(item.end_date) }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-2">
                <button
                  @click="routeToPage(item.id)"
                  class="btn w-100 float-right btn-primary-outline-portal">
                  Detail
                </button>
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
    </div>
    <!-- Rekomendasi -->
  </div>
</template>

<script>
import { mapState, mapActions, useStore } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useRouter } from "vue-router";

export default {
  computed: {
    ...mapState({
      lowonganModule: (state) => state.lowonganModule.data,
      progressCv: (state) => state.progressCv.data,
    }),
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const isUserAuthenticated = store.getters.isUserAuthenticated;

    return {
      router,
      store,
      isUserAuthenticated,
    }
  },
  async mounted() {
    await this.initPage();
  },
  methods: {
    ...mapActions('lowonganModule', [
      'getLowongan',
      'changeRecommended',
      'changeSelectedLowongan',
      'lamarLowongan',
    ]),
    ...mapActions('progressCv', [
      'getProgressCv',
    ]),
    async initPage() {
      await this.getLowongan().then(() => {
        this.getSelected();
        this.getRecommended();
      });
    },
    getSelected() {
      const dataSource = this.lowonganModule.listLowongan;
      this.selected = dataSource.find((x) => x.id == this.$route.params.uuid);
      this.changeSelectedLowongan(this.selected)
    },
    getRecommended() {
      const dataSource = this.lowonganModule.listLowongan;
      this.recommended = dataSource.filter(
        (x) => x.id != this.$route.params.uuid
      );
      this.changeRecommended(this.recommended)
    },
    formatDate(tanggal) {
      let nd = new Date(tanggal).toLocaleDateString("id-id", {
        day: "numeric",
        year: "numeric",
        month: "long",
      });
      return nd;
    },
    formatText(myString) {
      return String(myString).replace("<p>", "").replace("</p>", "");
    },
    routeToPage(item) {
      this.router.push(`/pencarian-lowongan/${item}/detail`);
      this.initPage()
    },
    backToPage() {
      this.router.push({ name: 'pencarian-lowongan' });
    },
    async lamarPekerjaan() {
      const userInfo = JSON.parse(window.localStorage.getItem('user_info'))
      if (this.isUserAuthenticated) {
        if (this.progressCv.persentase == 100) {
          const formData = {
            id_lowongan: this.lowonganModule.selectedLowongan.id
          }
          await this.lamarLowongan(formData).then((res) => {
            Swal.fire({
              text: "Berhasil Mendaftar!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn btn-primary",
              },
            }).then(() => {
              this.router.push({ name: 'ProfileUser' });
            });
          })
        } else {
            Swal.fire({
              text: "Data Pribadi belum lengkap, Mohon Melengkapin Data Personal Terlebih Dahulu!",
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn btn-primary",
              },
            }).then(() => {
              this.router.push({ name: 'ProfilePersonal' });
            });
        }
      } else {
          Swal.fire({
            text: "Belum Memiliki Akun, mohon melakukan registrasi terlebih dahulu!",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn btn-primary",
            },
            }).then(() => {
              this.router.push({ name: 'registrasi' });
            });
      }
    },
  },
  data() {
    return {
      selected: {},
      recommended: [],
    };
  },
};
</script>
