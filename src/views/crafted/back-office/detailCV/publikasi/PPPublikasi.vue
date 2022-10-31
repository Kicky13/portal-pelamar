<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile">
          <div class="title-card d-flex align-items-center">
            <span>Publikasi</span>

            <div class="d-flex align-items-center">
              <div class="sub-title-card">dalam 5 tahun terakhir</div>
              <div class="d-flex align-items-center">
                <i class="fas fa-check"></i> Ada
              </div>
              <div class="d-flex align-items-center">
                <i class="fas fa-times"></i>Tidak Ada
              </div>
            </div>
          </div>
          <div class="body-card">
            <div class="narasumber">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-2 col-form-label narasumber__label"
                      >Judul Publikasi<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-10">
                      <input
                        type="text"
                        v-model="publikasiModule.formData.judul_publikasi"
                        class="form-control narasumber__form"
                        id="inputPassword" />
                      <span v-show="publikasiModule.validator.judul_publikasi" class="text-danger">Wajib Diisi.</span>  
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-2 col-form-label narasumber__label"
                      >Media Publikasi<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-10">
                      <input
                        type="email"
                        v-model="publikasiModule.formData.media_publikasi"
                        class="form-control narasumber__form"
                        id="inputPassword" />
                      <span v-show="publikasiModule.validator.media_publikasi" class="text-danger">Wajib Diisi.</span>  
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-2 col-form-label narasumber__label"
                      >Tahun<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-10">
                      <select
                        class="custom_form_select w-25"
                        placeholder="Select..."
                        v-model="publikasiModule.formData.tahun"
                        as="select">
                        <option selected disabled value="">Pilih Salah Satu</option>
                        <option v-for="(data, index) in yearList" :value="data">{{ data }}</option>
                      </select>
                    </div>
                    <div class="col-sm-2"></div>
                    <span v-show="publikasiModule.validator.tahun" class="col-sm-10 text-danger">Wajib Dipilih.</span>  
                  </div>
                 
                </div>
               
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <button @click="handleSubmit" v-if="!publikasiModule.isSubmitLoading" class="btn btn-primary-portal">
                      <i class="fas fa-plus"></i> Tambah Publikasi
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
                    :data="publikasiModule.listPublikasi"
                    :header="publikasiModule.column">
                    <template v-slot:customer="{ row: customer }">
                      <router-link
                        to="/apps/subscriptions/view-subscription"
                        href=""
                        class="text-gray-800 text-hover-primary mb-1">
                        {{ data.customer }}
                      </router-link>
                    </template>
                    <template v-slot:judul_publikasi="{ row: data }">
                      <a href="#" class="text-gray-600 text-hover-primary mb-1">
                        <div :class="`badge badge-light-success`">
                          {{ data.judul_publikasi }}
                        </div>
                      </a>
                    </template>
                    <template v-slot:media_publikasi="{ row: data }">
                      <div class="badge badge-light">
                        {{ data.media_publikasi }}
                      </div>
                    </template>
                    <template v-slot:tahun="{ row: data }">
                      {{ data.tahun }}
                    </template>
                    <template v-slot:actions="{ row: data }">
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
                            @click="deleteSubscription(data.id)"
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
      publikasiModule: (state) => state.publikasiModule.data,
    })
  },
  mounted() {
    this.getPublikasi();
    this.getYears();
  },
  methods: {
    ...mapActions('publikasiModule', [
      'getPublikasi',
      'storePublikasi',
      'validateForm',
    ]),
    async handleSubmit() {
      const validateForm = await this.validateForm()
      if (validateForm) {
        const submit = await this.storePublikasi()
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
      tableHeader: [
        {
          columnName: "Order id",
          columnLabel: "order",
          sortEnabled: false,
        },
        {
          columnName: "Amount",
          columnLabel: "amount",
          sortEnabled: false,
        },
        {
          columnName: "Status",
          columnLabel: "status",
          sortingField: "status.label",
          sortEnabled: false,
        },
        {
          columnName: "Date",
          columnLabel: "date",
          sortEnabled: false,
        },
        {
          columnName: "Invoice",
          columnLabel: "invoice",
          sortEnabled: false,
        },
      ],
    };
  },
  components: {
    LayoutProfileAside,
    KTDatatable,
  },
};
</script>
