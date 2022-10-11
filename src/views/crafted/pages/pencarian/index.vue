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
    <div class="row">
      <div class="col-sm-12">
        <div class="container">
          <div class="pencarian-content">
            <div class="title">
              Menampilkan <strong>1</strong> dari <strong>34</strong> Records
            </div>
            <div class="line-title"></div>
          </div>
          <div class="pencarian-list">
            <!--  -->
            <div class="row d-flex align-items-center">
              <div class="col-sm-10">
                <div class="informasi d-flex align-items-center">
                  <div class="images">
                    <img
                      :src="require('@/assets/images/content/sig.png')"
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
                      :src="require('@/assets/images/content/perumnas.png')"
                      alt="" />
                  </div>
                  <div class="detail-informasi">
                    <label for="">Direktur Manajemen Risiko </label>
                    <div class="name">Perum Perumnas</div>
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
                      :src="require('@/assets/images/content/bri.png')"
                      alt="" />
                  </div>
                  <div class="detail-informasi">
                    <label for=""
                      >Direktur Treasury dan International Banking
                    </label>
                    <div class="name">
                      PT Bank Rakyat Indonesia (Persero) Tbk
                    </div>
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
                    <label for="">Direktur Logistik & Infrastruktur </label>
                    <div class="name">PT Pertamina (Persero)</div>
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
                    <label for="">Direktur Keuangan</label>
                    <div class="name">
                      PT Telekomunikasi Indonesia (Persero), Tbk.
                    </div>
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
          <div class="pagination-portal">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link page-link-prev" href="#">Prev</a>
                </li>
                <li class="page-item">
                  <a class="page-link active" href="#">1</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link page-link-next" href="#">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pencarian",
  data() {
    return {
      detailUuid: "123456",
    };
  },
};
</script>
