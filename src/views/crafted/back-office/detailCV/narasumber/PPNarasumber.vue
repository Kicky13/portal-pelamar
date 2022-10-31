<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile">
          <div class="title-card d-flex align-items-center">
            <span
              >Pengalaman Sebagai Pembicara/Narasumber/Juri dalam 5 Tahun
              Terakhir</span
            >

            <div class="sub-title-card">
              acara terbesar / terpenting menurut anda
            </div>
          </div>
          <div class="body-card">
            <div class="narasumber">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label narasumber__label"
                      >Nama Acara<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="email"
                        class="form-control narasumber__form"
                        v-model="narasumberModule.formData.nama_acara"
                        id="inputPassword" />
                      <span v-show="narasumberModule.validator.nama_acara" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label narasumber__label"
                      >Tahun<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <select
                        class="custom_form_select w-50"
                        placeholder="Select..."
                        v-model="narasumberModule.formData.tahun"
                        as="select">
                        <option selected disabled value="">Pilih Salah Satu</option>
                        <option v-for="(tahun, index) in yearList" :value="tahun">{{ tahun }}</option>
                      </select>
                    </div>
                    <div class="col-sm-3"></div>
                    <span v-show="narasumberModule.validator.tahun" class="col-sm-9 text-danger">Wajib Memilih Salah satu.</span>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label narasumber__label"
                      >Jumlah Peserta<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="number"
                        class="form-control narasumber__form"
                        v-model="narasumberModule.formData.jumlah_peserta"
                        id="inputPassword" />
                      <span v-show="narasumberModule.validator.jumlah_peserta" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label narasumber__label"
                      >Penyelenggara<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control narasumber__form"
                        v-model="narasumberModule.formData.penyelenggara"
                        id="inputPassword" />
                      <span v-show="narasumberModule.validator.penyelenggara" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label narasumber__label"
                      >Lokasi<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control narasumber__form"
                        v-model="narasumberModule.formData.lokasi"
                        id="inputPassword" />
                      <span v-show="narasumberModule.validator.lokasi" class="text-danger">Wajib Diisi.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <button @click="handleSubmit" v-if="!narasumberModule.isSubmitLoading" class="btn btn-primary-portal">
                      <i class="fas fa-plus"></i> Tambah Riwayat Pembicara
                    </button>
                    <button v-else class="btn btn-primary-portal">
                      <span class="indicator-label">Mohon Tunggu
                        <span
                          class="spinner-border spinner-border-sm align-middle ms-2">
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <KTDatatable
                    class="text-center"
                    @on-sort="sort"
                    @on-items-select="onItemSelect"
                    :data="narasumberModule.listNarasumber"
                    :header="narasumberModule.column">
                    <template v-slot:nama_acara="{ row: listNarasumber }">
                      <router-link
                        to="/apps/subscriptions/view-subscription"
                        href=""
                        class="text-gray-800 text-hover-primary mb-1">
                        {{ listNarasumber.nama_acara }}
                      </router-link>
                    </template>
                    <template v-slot:tahun="{ row: listNarasumber }">
                      <a href="#" class="text-gray-600 text-hover-primary mb-1">
                        <div :class="`badge badge-light-success`">
                          {{ listNarasumber.tahun }}
                        </div>
                      </a>
                    </template>
                    <template v-slot:jumlah_peserta="{ row: listNarasumber }">
                      <div class="badge badge-light">
                        {{ listNarasumber.jumlah_peserta }}
                      </div>
                    </template>
                    <template v-slot:penyelenggara="{ row: listNarasumber }">
                      {{ listNarasumber.penyelenggara }}
                    </template>
                    <template v-slot:lokasi="{ row: listNarasumber }">
                      {{ listNarasumber.lokasi }}
                    </template>
                    <template v-slot:actions="{ row: listNarasumber }">
                      <a
                        href="#"
                        class="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
                        data-kt-menu-flip="top-end"
                        >Actions
                        <span class="svg-icon svg-icon-5 m-0">
                          <inline-svg
                            src="media/icons/duotune/arrows/arr072.svg" />
                        </span>
                      </a>
                      <!--begin::Menu-->
                      <div
                        class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4"
                        data-kt-menu="true">
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <router-link
                            to="/apps/customers/customer-details"
                            class="menu-link px-3"
                            >View</router-link
                          >
                        </div>
                        <!--end::Menu item-->
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a
                            @click="deleteData(listNarasumber.id)"
                            class="menu-link px-3"
                            >Delete</a
                          >
                        </div>
                        <!--end::Menu item-->
                      </div>
                      <!--end::Menu-->
                    </template>
                  </KTDatatable>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <router-link to="#" class="btn btn-transparent-portal-soft"
                      >Kembali</router-link
                    >

                    <router-link to="#" class="btn btn-success-portal-soft"
                      >Selanjutnya</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutProfileAside>
</template>
<script>
import LayoutProfileAside from "@/views/crafted/layout/LayoutProfile.vue";
import KTDatatable from "@/components/kt-datatable/KTDataTable.vue";
import { mapState, mapActions } from "vuex";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default {
  name: "BackOfficeNarasumber",
  computed: {
    ...mapState({
      narasumberModule: (state) => state.narasumberModule.data,
    })
  },
  mounted() {
    this.getNarasumber();
    this.getYears();
  },
  methods: {
    ...mapActions('narasumberModule', [
      'getNarasumber',
      'storeNarasumber',
      'validateForm',
    ]),
    async handleSubmit() {
      const validateForm = await this.validateForm()
      if (validateForm) {
        const submit = await this.storeNarasumber()
        if (submit) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data Berhasil Disimpan!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.getNarasumber();
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Something went wrong, please try again later!',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    },
    getYears() {
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      
      for (let i = 0; i < 5; i++) {
        let yearIndex = currentYear - i;
        this.yearList.push(yearIndex)
      }
      console.log(this.yearList)
    },
  },
  data() {
    return {
      title: "Narasumber",
      yearList: [],
    };
  },
  components: {
    LayoutProfileAside,
    KTDatatable,
  },
};
</script>
