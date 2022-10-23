<template>
  <LayoutProfileAside :titlePage="title">
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile">
          <div class="title-card d-flex align-items-center">
            <span>Referensi</span>

            <div class="sub-title-card">
              berasal dari pihak internal maupun eksternal perusahaan
            </div>
          </div>
          <div class="body-card">
            <div class="referensi">
              <div class="row">
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Nama<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="email"
                        class="form-control personal__form"
                        id="inputPassword" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Jabatan<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="email"
                        class="form-control personal__form"
                        id="inputPassword" />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >Perusahaan<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9">
                      <input
                        type="email"
                        class="form-control personal__form"
                        id="inputPassword" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="staticEmail"
                      class="col-sm-3 col-form-label personal__label"
                      >No Handphone<span class="text-danger">*</span></label
                    >
                    <div class="col-sm-9 d-flex align-items-center">
                      <div class="flag-id">
                        <div class="flag-red"></div>
                        <div class="flag-white"></div>
                      </div>
                      <label for="" class="number-id">+62</label>
                      <input
                        type="number"
                        class="form-control personal__form"
                        id="inputPassword" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <div class="pengaturan__update">
                    <button class="btn btn-primary-portal">
                      <i class="fas fa-plus"></i> Tambah Referensi
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
  name: "BackOfficeReferensi",
  data() {
    return {
      title: "Referensi",
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
