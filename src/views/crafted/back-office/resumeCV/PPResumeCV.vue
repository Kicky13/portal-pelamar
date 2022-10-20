<template>
  <LayoutProfileAside :titlePage="title">
   
    <div class="row">
      <div class="col-sm-12">
        <div class="card-profile p-0">
          <div class="body-card">
            <div class="resume-cv">
              <div class="resume-cv__personal">
                <!-- Data Personal -->
                <div class="title d-flex align-items-center">
                  <label for="">Data Personal</label>
                </div>
                <div class="resume-cv__personal__body">
                  <div class="row">
                    <div class="col-sm-6">
                      <table style="width: 100%">
                        <tr>
                          <td class="title-body w-50">Nama</td>
                          <td>:</td>
                          <td class="title-sub-body">Nurul Jannah</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">Gelar Akademik</td>
                          <td>:</td>
                          <td class="">MBA, SE</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">Jenis Kelamin</td>
                          <td>:</td>
                          <td class="">Perempuan</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">Kewarganegaraan</td>
                          <td>:</td>
                          <td class="t">WNI</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">NIK / Passport</td>
                          <td>:</td>
                          <td class="t">3174067351720007</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">Status Kawin</td>
                          <td>:</td>
                          <td class="t">KAWIN</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">Tempat Lahir</td>
                          <td>:</td>
                          <td class="t">KOTA MEDAN</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">Tanggal Lahir</td>
                          <td>:</td>
                          <td class="t">09 Juni 1972</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">Agama</td>
                          <td>:</td>
                          <td class="t">Agama Islam</td>
                        </tr>
                      </table>
                    </div>
                    <div class="col-sm-6">
                      <div class="resume-cv__personal__update">
                        <button class="btn btn-primary-portal">
                          Ubah Data
                          <img
                            class="mr-2"
                            :src="
                              require('@/assets/images/icon/ic_edit_white.svg')
                            "
                            alt="" />
                        </button>
                      </div>
                      <table style="width: 100%">
                        <tr>
                          <td class="title-body w-50">Golongan Darah</td>
                          <td>:</td>
                          <td class="">B</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">Suku</td>
                          <td>:</td>
                          <td class="">JAWA</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">Alamat</td>
                          <td class="">:</td>
                          <td class="">
                            Alamat Jl. Gaharu III No. 3 – 5, RT 002/RW 007,
                            Kramat Pela, Kebayoran Baru, Jakarta Selatan. Kode
                            Pos : 12130
                          </td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">Email</td>
                          <td>:</td>
                          <td class="t">nurul@gmail.co.id</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">No Handphone</td>
                          <td>:</td>
                          <td class="t">08118717288</td>
                        </tr>
                        <tr>
                          <td class="title-body w-50">NPWP</td>
                          <td>:</td>
                          <td class="t">689876700017000</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- Data Personal -->

                <hr />
                <!-- Personifikasi -->
                <div class="title d-flex align-items-center">
                  <label for="">Personifikasi</label>
                </div>
                <div class="resume-cv__personal__body">
                  <div class="content_personifikasi">
                    <div class="row">
                      <div class="col-sm-2">
                        <div class="title-personifikasi">Nilai Pribadi</div>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-9">
                        <div class="informasi">
                          Ekonomi makro, long run economy, capital and
                          investment flow, ekonomi regional, dan keterkaitan
                          industri.Strategic leadership dan transformative
                          leadership;Mendorong perubahan mindset kolektif;
                          Mendorong munculnya inisiatif, kreatifitas, dan rasa
                          saling membutuhkan pada anggota suatu komunitas;
                          Memimpikan terbentuknya komunitas-komunitas kreatif.
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-2">
                        <div class="title-personifikasi">Visi Pribadi</div>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-9">
                        <div class="informasi">
                          Dengan latar belakang yang saya miliki, dimana selama
                          ini saya telah mengelola berbagai portfolio di
                          berbagai sektor industri, maka menurut hemat saya
                          dapat mengembangkan karir di perbankan ( antara lain
                          Corporate Banking , Commercial Banking, Treasury,
                          Keuangan ) maupun non perbankan. Saya memiliki
                          tertarik berkarir di sektor / bidang yang memberikan
                          ruang untuk melakukan inovasi.
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-2">
                        <div class="title-personifikasi">Aspirasi Bidang</div>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-9">
                        <div class="informasi">
                          Kesehatan, Human Capital, Digitalisasi dan IT
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-2">
                        <div class="title-personifikasi">Akun Sosial Media</div>
                      </div>
                      <div class="col-sm-1">:</div>
                      <div class="col-sm-9">
                        <div class="informasi">
                          nurul jannah (<strong>facebook</strong>) - nurul
                          jannah (<strong>Instagram</strong>) - nurul jannah
                          (<strong>Twitter</strong>)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Personifikasi -->
                <hr />
                <!-- Riwayat Pekerjaan -->
                <div class="title d-flex align-items-center">
                  <label for="">Riwayat Pekerjaan</label>
                </div>

                <div class="container">
                    <KTDatatable
                  @on-sort="sort"
                  @on-items-select="onItemSelect"
                  :data="data"
                  :header="tableHeader"
                  :checkbox-enabled="true">
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
                    <div class="badge badge-light">{{ customer.billing }}</div>
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
                <!-- Riwayat Pekerjaan -->
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
  name: "BackOfficeResumeCV",
  data() {
    return {
      title: "Resume CV",
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
