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
                        type="email"
                        class="form-control narasumber__form"
                        id="inputPassword" />
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
                        class="form-control narasumber__form"
                        id="inputPassword" />
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
                        as="select">
                        <option value="Dalam Negeri">Dalam Negeri</option>
                        <option value="Luar Negeri">Dalam Negeri</option>
                      </select>
                    </div>
                  </div>
                 
                </div>
               
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <button class="btn btn-primary-portal">
                      <i class="fas fa-plus"></i> Tambah Publikasi
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
                    :data="data"
                    :header="tableHeader">
                    <template v-slot:customer="{ row: customer }">
                      <router-link
                        to="/apps/subscriptions/view-subscription"
                        href=""
                        class="text-gray-800 text-hover-primary mb-1">
                        {{ customer.customer }}
                      </router-link>
                    </template>
                    <template v-slot:status="{ row: customer }">
                      <a href="#" class="text-gray-600 text-hover-primary mb-1">
                        <div :class="`badge badge-light-${customer.color}`">
                          {{ customer.status }}
                        </div>
                      </a>
                    </template>
                    <template v-slot:billing="{ row: customer }">
                      <div class="badge badge-light">
                        {{ customer.billing }}
                      </div>
                    </template>
                    <template v-slot:product="{ row: customer }">
                      {{ customer.product }}
                    </template>
                    <template v-slot:createdDate="{ row: customer }">
                      {{ customer.createdDate }}
                    </template>
                    <template v-slot:actions="{ row: customer }">
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
                            @click="deleteSubscription(customer.id)"
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

export default {
  name: "BackOfficeNarasumber",
  data() {
    return {
      title: "Narasumber",
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
