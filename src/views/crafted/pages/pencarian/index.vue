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
              Menampilkan <strong>{{ endIndex + 1 }}</strong> dari <strong>{{ totalItems }}</strong> Records
            </div>
            <div class="line-title"></div>
          </div>
          <div class="pencarian-list">
            <!--  -->
            <div v-for="(item, index) in showData" class="row d-flex align-items-center">
              <div class="col-sm-10">
                <div class="informasi d-flex align-items-center">
                  <div class="images">
                    <img
                      :src="require('@/assets/images/content/sig.png')"
                      alt="" />
                  </div>
                  <div class="detail-informasi">
                    <label for="">{{ item.nama_jabatan }}</label>
                    <div class="name">{{ item.nama_perusahaan }}</div>
                    <div class="date">Buka Sampai {{ formatDate(item.end_date) }}</div>
                  </div>
                </div>
              </div>
              <div class="col-sm-2">
                <router-link
                  :to="`/pencarian-lowongan/${item.id}/detail`"
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
                <li :class="startIndex == 0 ? `page-item disabled` : `page-item`">
                  <a class="page-link page-link-prev" href="#">Prev</a>
                </li>
                <!-- <li class="page-item"><a class="page-link active" href="#">1</a></li> -->
                <li v-for="item in pagination" :class="(item == activePageIndex) ? classActive : classInactive">
                  <button v-if="item == activePageIndex" disabled class="page-link">{{ item }}</button>
                  <button v-else class="page-link">{{ item }}</button>
                </li>
                <li :class="activePageIndex == totalPage ? `page-item disabled` : `page-item`">
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
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useRouter } from "vue-router";

export default {
  name: "pencarian",
  computed: {
    ...mapState({
      lowonganModule: (state) => state.lowonganModule.data,
    })
  },
  data() {
    return {
      detailUuid: "123456",
      classActive: "page-item active",
      classInactive: "page-item",
      showData: [],
      pagination: [1],
      activePageIndex: 1,
      totalItems: 100,
      totalPage: 1,
      itemPerPage: 10,
      startIndex: 0,
      endIndex: 9,
    };
  },
  async mounted() {
    await this.initiateData()
  },
  methods: {
    ...mapActions('lowonganModule', [
      'getLowongan',
    ]),
    async initiateData() {
      await this.getLowongan().then(() => {
        this.setupPagination()
      });
    },
    formatDate(tanggal) {
      console.log(tanggal)
      let nd = new Date(tanggal).toLocaleDateString('id-id', { day:"numeric", year:"numeric", month:"long"});
      return nd;
    },
    setupPagination() {
      this.activePage = 1
      this.totalItems = this.lowonganModule.listLowongan.length
      let pagination = []
      if (this.totalItems <= this.itemPerPage) {
        this.showData = this.lowonganModule.listLowongan
        this.startIndex = 0
        this.endIndex = this.totalItems - 1
        this.pagination = [1]
        console.log(true)
      } else {
        this.startIndex = 0
        this.endIndex = this.startIndex + this.itemPerPage - 1
        this.showData = this.lowonganModule.listLowongan.slice(this.startIndex, this.endIndex)
        this.totalPage = Math.floor(this.totalItems/this.itemPerPage)
      }
      for (let i = 1; i <= this.totalPage; i++) {
        pagination.push(i);
      }
      this.pagination = pagination
    },
  },
};
</script>
