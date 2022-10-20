<template>
  <LayoutProfileAside :titlePage="title">

    <div class="row">
      <div class="col-sm-7">
        <div class="card-profile">
          <div class="title-card">
            <img :src="require('@/assets/images/icon/ic_koper.svg')" alt="" />
            <span>Jabatan Yang Dilamar</span>
          </div>
          <div class="body-card">
            <!-- Empty state | empty state yang dipakai jika data kosong -->
            <!-- <div class="lowongan-empty text-center">
              <label for=""
                >Belum ada Jabatan <br />
                Yang dilamar</label
              >
              <div>
                <button class="btn btn-primary-portal btn-custom">
                  Cari Lowongan
                </button>
              </div>
            </div> -->
            <!-- Empty state | empty state yang dipakai jika data kosong -->

            <!-- Content | jika terdapat suatu data -->
            <div class="lowongan">
              <fragment class="section-list">
                <div class="row d-flex align-items-center">
                  <div class="col-sm-2">
                    <div class="images-perusahaan">
                      <img
                        :src="require('@/assets/images/content/sig.png')"
                        alt="" />
                    </div>
                  </div>
                  <div class="col-sm-7">
                    <div class="posisi-perusahaan">Direktur Human Capital</div>
                    <div class="perusahaan">
                      PT. Semen Indonesia (Persero) Tbk.
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="status-seleksi">Seleksi Admin</div>
                  </div>
                </div>
                <hr />
              </fragment>
              <fragment class="section-list">
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
              </fragment>
            </div>
            <!-- Content | jika terdapat suatu data -->
          </div>
        </div>
      </div>
      <div class="col-sm-5">
        <div class="card-profile">
          <div class="title-card">
            <img :src="require('@/assets/images/icon/ic_user.svg')" alt="" />
            <span>Aktifitas Terakhir</span>
          </div>
          <div class="body-card">
            <!-- Empty state | empty state yang dipakai jika data kosong -->
            <!-- <div class="lowongan-empty text-center">
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
            </div> -->
            <!-- Empty state | empty state yang dipakai jika data kosong -->

            <!-- Content | jika terdapat suatu data -->
            <div class="lowongan">
              <fragment ragment class="section-list-activity">
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
                </div>
              </fragment>
            </div>
            <!-- Content | jika terdapat suatu data -->
          </div>
        </div>
      </div>
    </div>
  </LayoutProfileAside>
</template>

<script>
import LayoutProfileAside from "@/views/crafted/layout/LayoutProfile.vue";

export default {
  name: "BackOfficeDashboard",
  data() {
    return {
      title: "Dashboard",
    };
  },
  components: {
    LayoutProfileAside,
  },
};
</script>
