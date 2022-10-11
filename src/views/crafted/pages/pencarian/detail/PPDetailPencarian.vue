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
                <img
                  :src="require('@/assets/images/content/sig.png')"
                  class="img-logo"
                  alt="" />

                <div class="nama-perusahaan">
                  <div class="posisi">Direktur Human Capital</div>
                  <div class="nama">PT. Semen Indonesia (Persero) Tbk.</div>
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
                  <div class="detail">Jakarta</div>
                </div>
                <div class="data-informasi">
                  <div class="name">Perusahaan</div>
                  <div class="detail">PT. Semen Indonesia (Persero) Tbk.</div>
                </div>
                <div class="data-informasi">
                  <div class="name">Tanggal Posting</div>
                  <div class="detail">2 September 2022</div>
                </div>
                <div class="data-informasi">
                  <div class="name">Batas Akhir</div>
                  <div class="detail">23 November 2022</div>
                </div>
              </div>
              <div class="col-sm-1"></div>
              <div class="col-sm-7">
                <div class="deskripsi">
                  <div>
                    <label for="">Gambaran Singkat</label>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas ac augue maximus, consequat nisl at, porttitor
                      mi. Phasellus auctor facilisis velit, vitae rhoncus mi
                      venenatis eget. Etiam fringilla felis nulla. Praesent at
                      hendrerit lectus, in malesuada lorem. Aenean sed tortor
                      sit amet lacus fringilla condimentum et at nisl. Nam
                      semper urna enim, sed efficitur arcu lobortis sit amet.
                      Etiam volutpat massa vitae ipsum ultricies, ut feugiat
                      elit dignissim. Nam at consequat lacus. Integer sed nunc
                      dui.
                    </p>
                  </div>

                  <div>
                    <label for="">Peran dan Tanggung Jawab</label>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas ac augue maximus, consequat nisl at, porttitor
                      mi. Phasellus auctor facilisis velit, vitae rhoncus mi
                      venenatis eget. Etiam fringilla felis nulla. Praesent at
                      hendrerit lectus, in malesuada lorem. Aenean sed tortor
                      sit amet lacus fringilla condimentum et at nisl. Nam
                      semper urna enim, sed efficitur arcu lobortis sit amet.
                      Etiam volutpat massa vitae ipsum ultricies, ut feugiat
                      elit dignissim. Nam at consequat lacus. Integer sed nunc
                      dui.
                    </p>
                  </div>

                  <div>
                    <button class="btn btn-success-portal w-25" type="button">
                      Lamar Pekerjaan
                    </button>
                    <button
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
            <div class="row d-flex align-items-center">
              <div class="col-sm-10">
                <div class="informasi d-flex align-items-center">
                  <div class="images">
                    <img
                      :src="require('@/assets/images/content/bri.png')"
                      alt="" />
                  </div>
                  <div class="detail-informasi">
                    <label for="">Direktur Human Capital</label>
                    <div class="name">PT. Semen Indonesia (Persero) Tbk.</div>
                    <div class="date">Buka Sampai 3 Juli 2023</div>
                  </div>
                </div>
              </div>
              <div class="col-sm-2">
                <router-link
                  :to="`/pencarian-lowongan/${this.detailUuid}/detail`"
                  class="btn w-100 float-right btn-primary-outline-portal">
                  Detail
                </router-link>
              </div>
            </div>
            <!--  -->

            <!--  -->
            <div class="row d-flex align-items-center">
              <div class="col-sm-10">
                <div class="informasi d-flex align-items-center">
                  <div class="images">
                    <img
                      :src="require('@/assets/images/content/pertamina.png')"
                      alt="" />
                  </div>
                  <div class="detail-informasi">
                    <label for="">Direktur Human Capital</label>
                    <div class="name">PT. Semen Indonesia (Persero) Tbk.</div>
                    <div class="date">Buka Sampai 3 Juli 2023</div>
                  </div>
                </div>
              </div>
              <div class="col-sm-2">
                <router-link
                  :to="`/pencarian-lowongan/${this.detailUuid}/detail`"
                  class="btn w-100 float-right btn-primary-outline-portal">
                  Detail
                </router-link>
              </div>
            </div>
            <!--  -->

            <!--  -->
            <div class="row d-flex align-items-center">
              <div class="col-sm-10">
                <div class="informasi d-flex align-items-center">
                  <div class="images">
                    <img
                      :src="require('@/assets/images/content/telkom.png')"
                      alt="" />
                  </div>
                  <div class="detail-informasi">
                    <label for="">Direktur Human Capital</label>
                    <div class="name">PT. Semen Indonesia (Persero) Tbk.</div>
                    <div class="date">Buka Sampai 3 Juli 2023</div>
                  </div>
                </div>
              </div>
              <div class="col-sm-2">
                <router-link
                  :to="`/pencarian-lowongan/${this.detailUuid}/detail`"
                  class="btn w-100 float-right btn-primary-outline-portal">
                  Detail
                </router-link>
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
export default {
  data() {
    return {
      detailUuid: "123456",
    };
  },
};
</script>
