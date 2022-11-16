<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-7">
        <div class="card-profile min-h-200px">
          <div class="title-card">
            <div class="row">
              <div class="col-sm-6 d-flex align-items-center">
                <img
                  :src="require('@/assets/images/icon/ic_koper.svg')"
                  alt="" />
                <div class="title__general">Jabatan Yang Dilamar</div>
              </div>
              <div class="col-sm-6 d-flex justify-content-end">
                <button v-if="dashboardModule.listLamaran.length != 0" class="btn btn__outline__pp" @click="modalShow = true">
                  Lihat Progress
                </button>
              </div>
            </div>
          </div>
          <div class="body-card">
            <!-- Empty state | empty state yang dipakai jika data kosong -->
            <div v-if="dashboardModule.listLamaran.length === 0" class="lowongan-empty text-center">
              <label for=""
                >Belum ada Jabatan <br />
                Yang dilamar</label
              >
              <div>
                <router-link to="/pencarian-lowongan" class="btn btn-primary-portal btn-custom">
                  Cari Lowongan
                </router-link>
              </div>
            </div>
            <!-- Empty state | empty state yang dipakai jika data kosong -->

            <!-- Content | jika terdapat suatu data -->
            <div class="lowongan">
              <fragment
                class="section-list"
                v-for="lamaran in dashboardModule.listLamaran">
                <div class="row d-flex align-items-center">
                  <div class="col-sm-2">
                    <div class="images-perusahaan">
                      <!-- <img
                        :src="require('@/assets/images/content/sig.png')"
                        alt="" /> -->
                      <img :src="lamaran.logo" alt="" />
                    </div>
                  </div>
                  <div class="col-sm-7">
                    <div class="posisi-perusahaan">
                      {{ lamaran.nama_jabatan }}
                    </div>
                    <div class="perusahaan">
                      {{ lamaran.nama_perusahaan }}
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div v-if="lamaran.status_lamar" class="status-seleksi">
                      Lolos Seleksi
                    </div>
                    <div
                      v-else-if="
                        lamaran.is_manual_closed || lamaran.closed_by_date
                      "
                      class="status-ditolak">
                      Tidak Lolos
                    </div>
                    <div v-else class="status-seleksi">Seleksi Admin</div>
                  </div>
                </div>
                <hr />
              </fragment>
              <!-- <fragment class="section-list">
                <div class="row d-flex align-items-center">
                  <div class="col-sm-2">
                    <div class="images-perusahaan">
                      <img
                        :src="require('@/assets/images/content/perumnas.png')"
                        alt="" />
                    </div>
                  </div>
                  <div class="col-sm-7">
                    <div class="posisi-perusahaan">
                      Direktur Management Risiko
                    </div>
                    <div class="perusahaan">Perum Perumnas</div>
                  </div>
                  <div class="col-sm-3">
                    <div class="status-ditolak">Tidak Lolos</div>
                  </div>
                </div>
                <hr />
              </fragment> -->
            </div>
            <!-- Content | jika terdapat suatu data -->
          </div>
        </div>
      </div>
      <div class="col-sm-5">
        <div class="card-profile min-h-200px">
          <div class="title-card">
            <img :src="require('@/assets/images/icon/ic_user.svg')" alt="" />
            <span>Aktifitas Terakhir</span>
          </div>
          <div class="body-card">
            <!-- Empty state | empty state yang dipakai jika data kosong -->
            <div v-if="dashboardModule.listLamaran.length === 0" class="lowongan-empty text-center">
              <div class="d-flex flex-column">
                <div class="p-2"></div>
                <div class="p-2">
                  <label for=""
                    >Belum ada Aktifitas Pendaftaran <br />
                    Yang dilakukan</label
                  >
                </div>
                <div class="p-2"></div>
              </div>
            </div>
            <!-- Empty state | empty state yang dipakai jika data kosong -->

            <!-- Content | jika terdapat suatu data -->
            <div class="lowongan">
              <fragment ragment class="section-list-activity">
                <div class="row" v-for="lamaran in dashboardModule.listLamaran">
                  <div class="col-sm-1">
                    <img
                      :src="require('@/assets/images/icon/ic_clock.svg')"
                      alt="" />
                  </div>
                  <div class="col-sm-11">
                    <div class="date">{{ lamaran.tgl_melamar }}</div>
                    <div class="informasi-activity">
                      Melamar posisi {{ lamaran.nama_jabatan }} di
                      {{ lamaran.nama_perusahaan }}
                    </div>
                  </div>
                </div>
                <!-- <div class="row">
                  <div class="col-sm-1">
                    <img
                      :src="require('@/assets/images/icon/ic_clock.svg')"
                      alt="" />
                  </div>
                  <div class="col-sm-11">
                    <div class="date">10 Januari 2022</div>
                    <div class="informasi-activity">
                      Melamar posisi Direktur Management Risiko di Perum
                      Perumnas
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-1">
                    <img
                      :src="require('@/assets/images/icon/ic_clock.svg')"
                      alt="" />
                  </div>
                  <div class="col-sm-11">
                    <div class="date">10 Januari 2022</div>
                    <div class="informasi-activity">
                      Melamar posisi Direktur Management Risiko di Perum
                      Perumnas
                    </div>
                  </div>
                </div> -->
              </fragment>
            </div>
            <!-- Content | jika terdapat suatu data -->
          </div>
        </div>
      </div>

      <b-modal
        size="lg"
        centered
        hide-footer
        no-close-on-backdrop
        no-close-on-esc
        v-model="modalShow">
        <div>
          <div class="modal-progress-lamaran">
            <div v-for="lamaran in dashboardModule.listLamaranDetail">
              <div class="section-list">
                <div class="row d-flex align-items-center">
                  <div class="col-sm-2">
                    <div class="images-perusahaan">
                      <img :src="lamaran.logo" alt="" />
                    </div>
                  </div>
                  <div class="col-sm-7">
                    <div class="posisi-perusahaan">
                      {{ lamaran.nama_jabatan }}
                    </div>
                    <div class="perusahaan">
                      {{ lamaran.nama_perusahaan }}
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div v-if="lamaran.status_lamar" class="status-seleksi">
                      Lolos Seleksi
                    </div>
                    <div
                      v-else-if="
                        lamaran.is_manual_closed || lamaran.closed_by_date
                      "
                      class="status-ditolak">
                      Tidak Lolos
                    </div>
                    <div v-else class="status-seleksi">Seleksi Admin</div>
                  </div>
                </div>
                <hr />
              </div>
              <hr />
              <div v-if="lamaran.status_lamar" class="wizard-data">
                <ol>
                  <li class="">Daftar</li>
                  <li class="">Seleksi Admin</li>
                  <li class="current">Lolos Eligible</li>
                </ol>
              </div>
              <div
                v-else-if="lamaran.is_manual_closed || lamaran.closed_by_date"
                class="row">
                <center>
                  <i>Mohon maaf, anda belum lolos untuk jabatan ini</i>
                </center>
              </div>
              <div v-else class="wizard-data">
                <ol>
                  <li class="">Daftar</li>
                  <li class="current">Seleksi Admin</li>
                  <li class="">Lolos Eligible</li>
                </ol>
              </div>
            </div>
            <div v-if="dashboardModule.listLamaranDetail.length === 0">
              <div class="lowongan-empty text-center">
                <label for=""
                  >Belum ada Jabatan <br />
                  Yang dilamar</label
                >
                <div>
                  <button class="btn btn-primary-portal btn-custom">
                    Cari Lowongan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-modal>
    </div>
  </LayoutProfileAside>
</template>

<script>
import LayoutProfileAside from "@/views/crafted/layout/LayoutProfile.vue";
import KTDatatable from "@/components/kt-datatable/KTDataTable.vue";
import { Field, ErrorMessage } from "vee-validate";
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default {
  name: "BackOfficeDashboard",
  data() {
    return {
      title: "Dashboard",
      modalShow: false,
    };
  },
  computed: {
    ...mapState({
      dashboardModule: (state) => state.dashboardModule.data,
    }),
  },
  components: {
    LayoutProfileAside,
    Field,
    ErrorMessage,
  },
  mounted() {
    this.getListLamaran(), this.getListLamaranDetail();
  },
  methods: {
    ...mapActions("dashboardModule", [
      "getListLamaran",
      "getListLamaranDetail",
    ]),
  },
};
</script>
